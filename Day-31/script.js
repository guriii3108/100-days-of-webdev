/**
 * Day 31: Async JavaScript with Multiple APIs
 * 
 * This file contains practical examples and exercises for learning
 * asynchronous JavaScript concepts including Promises, async/await,
 * and handling multiple API calls.
 */

console.log("🚀 Day 31: Async JavaScript with Multiple APIs");
console.log("=" .repeat(50));

// ============================================================================
// 1. BASIC PROMISE EXAMPLES
// ============================================================================

console.log("\n📚 1. Basic Promise Examples");
console.log("-".repeat(30));

// Example 1: Simple Promise
function createSimplePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success rate
      if (success) {
        resolve("✅ Promise resolved successfully!");
      } else {
        reject("❌ Promise rejected!");
      }
    }, 1000);
  });
}

// Using .then() and .catch()
createSimplePromise()
  .then(result => console.log("Result:", result))
  .catch(error => console.log("Error:", error));

// ============================================================================
// 2. FETCH API EXAMPLES
// ============================================================================

console.log("\n🌐 2. Fetch API Examples");
console.log("-".repeat(30));

// Example 2: Basic fetch with error handling
async function fetchUserData(username) {
  try {
    console.log(`🔄 Fetching data for user: ${username}`);
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const userData = await response.json();
    console.log(`✅ User data for ${username}:`, {
      name: userData.name,
      followers: userData.followers,
      public_repos: userData.public_repos
    });
    return userData;
  } catch (error) {
    console.error(`❌ Error fetching data for ${username}:`, error.message);
    return null;
  }
}

// ============================================================================
// 3. MULTIPLE API CALLS
// ============================================================================

console.log("\n🔄 3. Multiple API Calls");
console.log("-".repeat(30));

// Example 3: Fetching from multiple APIs using Promise.all()
async function fetchMultipleUsers() {
  const usernames = ['guri', 'octocat', 'defunkt'];
  
  try {
    console.log("🔄 Fetching data for multiple users...");
    const promises = usernames.map(username => fetchUserData(username));
    const results = await Promise.all(promises);
    
    console.log("✅ All users fetched successfully!");
    return results.filter(user => user !== null);
  } catch (error) {
    console.error("❌ Error in fetchMultipleUsers:", error);
    return [];
  }
}

// Example 4: Using Promise.allSettled() for better error handling
async function fetchMultipleUsersSettled() {
  const usernames = ['guri', 'invalid-user-12345', 'octocat'];
  
  console.log("🔄 Fetching data with Promise.allSettled()...");
  const promises = usernames.map(async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error(`User ${username} not found`);
      return await response.json();
    } catch (error) {
      return { error: error.message, username };
    }
  });
  
  const results = await Promise.allSettled(promises);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      if (result.value.error) {
        console.log(`❌ ${usernames[index]}: ${result.value.error}`);
      } else {
        console.log(`✅ ${usernames[index]}: ${result.value.name || 'No name'}`);
      }
    } else {
      console.log(`❌ ${usernames[index]}: Promise rejected`);
    }
  });
  
  return results;
}

// ============================================================================
// 4. SEQUENTIAL VS PARALLEL FETCHING
// ============================================================================

console.log("\n⚡ 4. Sequential vs Parallel Fetching");
console.log("-".repeat(30));

// Example 5: Sequential fetching (slower)
async function fetchSequential() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  console.log("🔄 Sequential fetching (slower)...");
  const startTime = Date.now();
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(`📄 Post ${data.id}: ${data.title.substring(0, 30)}...`);
    } catch (error) {
      console.error(`❌ Error fetching ${url}:`, error.message);
    }
  }
  
  const endTime = Date.now();
  console.log(`⏱️ Sequential fetching took: ${endTime - startTime}ms`);
}

// Example 6: Parallel fetching (faster)
async function fetchParallel() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  console.log("🔄 Parallel fetching (faster)...");
  const startTime = Date.now();
  
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      return await response.json();
    });
    
    const results = await Promise.all(promises);
    results.forEach(post => {
      console.log(`📄 Post ${post.id}: ${post.title.substring(0, 30)}...`);
    });
    
    const endTime = Date.now();
    console.log(`⏱️ Parallel fetching took: ${endTime - startTime}ms`);
  } catch (error) {
    console.error("❌ Error in parallel fetching:", error);
  }
}

// ============================================================================
// 5. RETRY MECHANISM
// ============================================================================

console.log("\n🔄 5. Retry Mechanism");
console.log("-".repeat(30));

// Example 7: Retry mechanism with exponential backoff
async function fetchWithRetry(url, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Attempt ${attempt}/${maxRetries} for ${url}`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log(`✅ Success on attempt ${attempt}`);
      return data;
    } catch (error) {
      console.log(`❌ Attempt ${attempt} failed: ${error.message}`);
      
      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
      }
      
      // Exponential backoff: delay increases with each retry
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log(`⏳ Waiting ${delay}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// ============================================================================
// 6. LOADING STATES AND UI SIMULATION
// ============================================================================

console.log("\n⏳ 6. Loading States and UI Simulation");
console.log("-".repeat(30));

// Example 8: Simulating loading states
async function fetchWithLoadingState() {
  console.log("⏳ Loading...");
  
  try {
    // Simulate a slow API call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    
    console.log("✅ Data loaded successfully!");
    console.log("📄 Post:", data.title);
    
    return data;
  } catch (error) {
    console.log("❌ Failed to load data:", error.message);
    return null;
  }
}

// ============================================================================
// 7. PRACTICE EXERCISES
// ============================================================================

console.log("\n🧑‍💻 7. Practice Exercises");
console.log("-".repeat(30));

// Exercise 1: Combine data from multiple APIs
async function combineApiData() {
  console.log("🔄 Exercise 1: Combining data from multiple APIs...");
  
  try {
    // Fetch user data and posts in parallel
    const [userResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);
    
    const user = await userResponse.json();
    const posts = await postsResponse.json();
    
    const combinedData = {
      user: {
        name: user.name,
        email: user.email,
        website: user.website
      },
      posts: posts.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body.substring(0, 100) + '...'
      }))
    };
    
    console.log("✅ Combined data:", combinedData);
    return combinedData;
  } catch (error) {
    console.error("❌ Error combining data:", error);
    return null;
  }
}

// Exercise 2: Create a data aggregation service
async function aggregateData() {
  console.log("🔄 Exercise 2: Data aggregation service...");
  
  const apis = [
    { name: 'Users', url: 'https://jsonplaceholder.typicode.com/users' },
    { name: 'Posts', url: 'https://jsonplaceholder.typicode.com/posts' },
    { name: 'Comments', url: 'https://jsonplaceholder.typicode.com/comments' }
  ];
  
  try {
    const results = await Promise.allSettled(
      apis.map(async (api) => {
        const response = await fetch(api.url);
        const data = await response.json();
        return { name: api.name, data: data.slice(0, 3) }; // Limit to 3 items
      })
    );
    
    const aggregatedData = {};
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        aggregatedData[result.value.name] = result.value.data;
        console.log(`✅ ${result.value.name}: ${result.value.data.length} items`);
      } else {
        console.log(`❌ ${apis[index].name}: Failed to fetch`);
      }
    });
    
    console.log("📊 Aggregated data summary:", {
      totalAPIs: apis.length,
      successful: Object.keys(aggregatedData).length,
      data: aggregatedData
    });
    
    return aggregatedData;
  } catch (error) {
    console.error("❌ Error in aggregation:", error);
    return null;
  }
}

// ============================================================================
// 8. UTILITY FUNCTIONS
// ============================================================================

console.log("\n🛠️ 8. Utility Functions");
console.log("-".repeat(30));

// Utility: Delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Utility: Timeout wrapper for fetch
async function fetchWithTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw error;
  }
}

// ============================================================================
// 9. RUNNING EXAMPLES
// ============================================================================

console.log("\n🎯 Running Examples...");
console.log("=" .repeat(50));

// Run examples with delays to see the async behavior
async function runExamples() {
  // Wait a bit for the first promise example to complete
  await delay(1500);
  
  // Run fetch examples
  await fetchUserData('guri');
  await delay(1000);
  
  // Run multiple API examples
  await fetchMultipleUsers();
  await delay(1000);
  
  await fetchMultipleUsersSettled();
  await delay(1000);
  
  // Run sequential vs parallel comparison
  await fetchSequential();
  await delay(1000);
  
  await fetchParallel();
  await delay(1000);
  
  // Run retry mechanism
  try {
    await fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1');
  } catch (error) {
    console.log("Retry example completed with error (expected)");
  }
  await delay(1000);
  
  // Run loading state example
  await fetchWithLoadingState();
  await delay(1000);
  
  // Run practice exercises
  await combineApiData();
  await delay(1000);
  
  await aggregateData();
  
  console.log("\n🎉 All examples completed!");
  console.log("=" .repeat(50));
}

// Start running examples
runExamples().catch(console.error);

// ============================================================================
// 10. ADDITIONAL EXERCISES FOR PRACTICE
// ============================================================================

console.log("\n📝 Additional Exercises for Practice:");
console.log("1. Implement a function that fetches weather data from multiple cities");
console.log("2. Create a function that combines GitHub user data with their repositories");
console.log("3. Build a function that fetches random quotes with retry logic");
console.log("4. Implement a function that fetches data with different timeout values");
console.log("5. Create a caching mechanism to avoid redundant API calls");

// Export functions for use in other files or browser console
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fetchUserData,
    fetchMultipleUsers,
    fetchWithRetry,
    combineApiData,
    aggregateData,
    delay,
    fetchWithTimeout
  };
}
