//Task 1

//1. Timer Function

function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${seconds} seconds`);
    }, seconds * 1000);
  });
}

//2 Chaining Multiple Promises

wait(1)
  .then((msg) => {
    console.log(msg);
    return wait(2);
  })
  .then((msg) => {
    console.log(msg);
    return wait(3);
  })
  .then((finalmsg) => console.log(finalmsg));

//3 Retry Mechanism

function testOperation() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve("Successful");
    } else {
      reject("Failure");
    }
  });
}

function retryOperation(attempts) {
  return testOperation().catch((err) => {
    if (attempts === 0) {
      throw new Error("All attempts failed");
    }
    return retryOperation(attempts - 1);
  });
}

retryOperation(3)
  .then((res) => console.log("Retry Result:", res))
  .catch((err) => console.log("Retry Error:", err));

//Task 2

//1 Converting Promise Chain to Async/Await

async function fetchUserData(userId) {
  try {
    const userResponse = await fetch(`/api/users/${userId}`);
    if (!userResponse.ok) {
      throw new Error("User not found");
    }
    const user = await userResponse.json();

    const postsResponse = await fetch(`/api/posts?userId=${user.id}`);
    const posts = await postsResponse.json();

    console.log(`${posts.length} posts found for user`);
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

//2 Parallel Data fetching

async function fetchUserAndPostsInParallel(userId) {
  try {
    const userUrl = `/api/users/${userId}`;
    const postsUrl = `/api/posts?userId=${userId}`;

    const [userRes, postsRes] = await Promise.all([
      fetch(userUrl),
      fetch(postsUrl),
    ]);

    if (!userRes.ok || !postsRes.ok) {
      throw new Error("Failed to fetch one or more resources");
    }

    const [user, posts] = await Promise.all([userRes.json(), postsRes.json()]);

    console.log(`User: ${user.name}, Posts count: ${posts.length}`);
    return { user, posts };
  } catch (error) {
    console.error("Parallel fetch failed", error);
    return { user: null, posts: [] };
  }
}
