const user_info = document.getElementsByClassName("user-info");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
// not used
// data.forEach((element) => {
//   const li = createElement("li");
//   user_info.appendChild(li);
//   console.log(data);
// });
// for (x in data) {
//   var a = `${data[x].name} -->${data[x].email}-->${data[x].address.city}<br>`;
//   document.write(a);
// }
//   })
//   .catch((error) => {
// console.log(error);
//     console.log("cannot fetch ");
//   });

// <----------------------------------------------------------------------------------/>

//2nd example

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (x in data) {
      var a = ` stock:--> ${data.stock} brand:--> ${data.brand} price:--> ${data.price}`;
      console.log(a);
    }
  });
//   3rd example patch
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//

// document.getElementById("saveForm").addEventListener("click", function (e) {
//   e.preventDefault();
//   var obj = {
//     title: document.getElementById("titleText").value,
//     body: document.getElementById("bodyText").value,
//     userId: document.getElementById("userid").value,
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(obj),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// });
