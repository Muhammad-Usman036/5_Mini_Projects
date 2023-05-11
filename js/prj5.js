const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_image");
const name_ = document.getElementById("name");
const date = document.getElementById("date");

// calling
setTimeout(getData, 1000);
//
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");
//
function getData() {
  header.innerHTML = ` <img src= "../assets/top.jpg">`;
  title.innerHTML = `Lorem ipsum Culpa, id.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequatur.`;

  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  name_.textContent = `Usman`;
  date.textContent = `May 11, 2023`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
