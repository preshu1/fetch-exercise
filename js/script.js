// const product = document.querySelector("#products");

// fetch("https://dummyjson.com/products?limit=5")
//   .then((res) => res.json())
//   .then((data) => {
//     product.innerHTML = data.products
//       .map(
//         (product) => `<h2>${product.title}</h2>
//     <p>${product.description}</p>
//     <p><strong>Price: </strong> ${product.price}</p>
//     <img src="${product.thumbnail}" width="200">`
//       )
//       .join("");
//   })
//   .catch((error) => console.log("Error!", error));

fetch("https://dummyjson.com/users/1")
  .then((response) => response.json())
  .then((data) => {
    const html = `<div id="ouruser">
    <h2>Our Users</h2>
    <h3>Id: ${data.id}</h3>
    <h3>First Name: ${data.firstName}</h3>
    <h3>Maiden Name: ${data.maidenName}</h3>
    <h3>Last Name: ${data.lastName}</h3>
    <h4>Age:${data.age}</h4>
    </div>`;

    const users = document.querySelector("#users");

    users.innerHTML = html;
  })
  .catch((error) => console.log("Error occured", error));
