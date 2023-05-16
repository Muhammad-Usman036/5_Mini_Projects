// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       console.log(element);
//     });
//   });

// part 2

// const myUsers = {
//   userList: [],
// };

// const myCoolFuc = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonuserData = await response.json();
//   //   console.log(jsonuserData);
//   return jsonuserData;
// };
// // myCoolFuc();
// const anotherFunc = async () => {
//   const data = await myCoolFuc();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// anotherFunc();
// console.log(myUsers.userList);

// part 3

// const getAllUsersEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });
//   postToWeb(userEmailArray);
// };

// const postToWeb = (data) => {
//   console.log(data);
// };
// getAllUsersEmails();

// part 4
// 2nd parameter of fetch
const getDadJokes = async () => {
  const response = await fetch(" https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonJokeData = await response.json();
  console.log(jsonJokeData.joke);
};
getDadJokes();
