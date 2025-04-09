// BASIC PROMISE

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Example Data' });
      // In case of error: reject(new Error('Failed to fetch data'));
    }, 1000);
  });
}

// Using Async/Await

// Function declaration with async
async function getData() {
  try {
    console.log('Fetching data...');
    const data = await fetchData();
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Arrow function with async
const processData = async () => {
  const result = await getData();
  return result.id * 10;
};

// Using async functions
(async () => {
  try {
    const processed = await processData();
    console.log('Processed result:', processed);
  } catch (error) {
    console.error('Processing failed:', error);
  }
})();

// PARALLEL EXECUTION