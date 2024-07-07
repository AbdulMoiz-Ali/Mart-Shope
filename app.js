const list = document.getElementById("list");

function getSingleProduct(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            appendToDOM(data.products);
        })
        .catch(function (err) {
            //   alert(err); // execute when API promise rejected
        });
}

window.addEventListener("load", function (evt) {
    fetch("https://dummyjson.com/products")
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            appendToDOM(data.products);
        })
        .catch(function (err) {
            //   alert(err); // execute when API promise rejected
        });
});

function appendToDOM(products) {
    for (let product of products) {
        let card = `<div class="card" style="width: 18rem;">
        <img src=${product.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">Brand: ${product.brand}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: ${product.price}</li>
          <li class="list-group-item">description: ${product.description}</li>
          <li class="list-group-item"><button onclick="getSingleProduct(${product.id})">show details</button></li>
        </ul>
      </div>`;
        list.innerHTML += card;
    }
}

// //POST REQUEST

// // fetch("https://dummyjson.com/products",{
// //     method: "POST",
// //     body: {
// //         // data to be sent to server
// //     }

// // })

// // fetch(`https://dummyjson.com/products/${id}`,{
// //     method: "PATCH",
// //     body:{
// //         //data to be updated
// //     }
// // })

// // DELETE REQUEST
// // fetch(`https://dummyjson.com/products/:id`,{
// // fetch(`https://dummyjson.com/products/${id}`,{
// //     method: "DELETE",
// // })


