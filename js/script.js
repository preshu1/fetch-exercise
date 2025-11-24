// script.js
// const apiKey = "bbFyPX+IBtoOPyPU6NBDWQ==9sYv7PN3isa";

// async function getJokes(count) {
//   for (let i = 0; i < count; i++) {
//     try {
//       const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
//         headers: { "X-Api-Key": apiKey },
//       });
//       const data = await response.json();

//       // Safe check
//       if (Array.isArray(data) && data.length > 0 && data[0].joke) {
//         console.log(`${i + 1}: ${data[0].joke}`);
//       } else if (data.error) {
//         console.log(`API Error: ${data.error}`);
//       } else {
//         console.log(`Unexpected response:`, data);
//       }
//     } catch (error) {
//       console.log(`Error fetching joke #${i + 1}:`, error);
//     }
//   }
// }

// // Fetch 5 jokes
// getJokes(5);
const apiKey = "bbFyPX+IBtoOPyPU6NBDWQ==9sYv7SJst7PN3isa";

fetch("https://api.api-ninjas.com/v1/animals?name=cat", {
  headers: { "X-Api-Key": apiKey },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log("Error caught!", error);
  });
