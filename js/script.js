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

fetch("https://dummyjson.com/users?limit=5")
  .then((response) => response.json())
  .then((data) => {
    const html = data.users
      .map(
        (user) => `<div id="ouruser">
    <h3>Id: ${user.id}</h3>
    <h3>First Name: ${user.firstName}</h3>
    <h3>Maiden Name: ${user.maidenName}</h3>
    <h3>Last Name: ${user.lastName}</h3>
    <h4>Age:${user.age}</h4>
    </div>`
      )
      .join("");

    const users = document.querySelector("#users");

    users.innerHTML = `
    ${html}`;
  })
  .catch((error) => console.log("Error occured", error));
