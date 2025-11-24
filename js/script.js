const product = document.querySelector("#products");

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    product.innerHTML = `<h2>${data.title}</h2>
    <p>${data.description}</p>
    <p><strong>Price: </strong> ${data.price}</p>
    <img src="${data.thumbnail}" width="200">`;
  })
  .catch((error) => console.log("Error!", error));
