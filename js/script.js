const product = document.querySelector("#products");

fetch("https://dummyjson.com/products?limit=5")
  .then((res) => res.json())
  .then((data) => {
    product.innerHTML = data.products
      .map(
        (product) => `<h2>${product.title}</h2>
    <p>${product.description}</p>
    <p><strong>Price: </strong> ${product.price}</p>
    <img src="${product.thumbnail}" width="200">`
      )
      .join("");
  })
  .catch((error) => console.log("Error!", error));
