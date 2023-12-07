const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

// Function: getFortune
// Parameters: question (string)
// Returns: Promise that resolves to a string or an error message
// TODO: Implement the getFortune function by utilizing the ask function to get the fortune for the question
// Hint: Call the ask function with the question and extract the fortune from the response array
function getFortune(question) {
  const askPromise = ask(question).catch((error) => {
    return "There was an error: A question is required...";
  });

  return askPromise;
}

// Function: fullSession
// Parameters: question (string)
// Returns: Promise that resolves to an array of strings or an error message
// TODO: Create a full session by combining the welcome, getFortune, and goodbye functions
// Hint: Use promise chaining to call the functions in the correct order and concatenate the results
function fullSession(question) {
  // Call the welcome function
  // Chain the getFortune function to get the fortune for the question
  // Chain the goodbye function and concatenate the results with the session
  // Return a promise that resolves to the final session array or an error message
  return Promise.all([
    welcome(),
    getFortune(question),
    goodbye()
  ])
      .then((results) => {
        // Combine the results into a single array
        const combinedResult = results.reduce((acc, result) => {
          if (typeof result === "string") {
            acc.push(result);
          } else if (Array.isArray(result)) {
            acc = acc.concat(result);
          }
          return acc;
        }, []);

        return combinedResult;
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        throw error; // Propagate the error
      });
}

module.exports = { getFortune, fullSession };
