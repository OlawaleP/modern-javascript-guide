Task 1: Basic Promise Usage

Create a promise-based timer function that resolves after a specified number of seconds.
Chain multiple promises together to perform a sequence of operations.
Implement a promise-based retry mechanism that attempts an operation up to 3 times before failing.

Task 2: Async/Await Implementation

Convert this promise chain to use async/await:

javascriptfunction fetchUserData(userId) {
  return fetch(`/api/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(user => {
      return fetch(`/api/posts?userId=${user.id}`);
    })
    .then(response => response.json())
    .then(posts => {
      console.log(`${posts.length} posts found for user`);
      return posts;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
}

Create an async function that performs parallel data fetching using Promise.all().
Implement proper error handling for async/await operations.