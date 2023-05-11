const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});
// function
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  //
  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

// random select
function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTags();

    highLight(randomTag);

    setTimeout(() => {
      unhighLight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTags();

      highLight(randomTag);
    }, 100);
  }, times * 100);
}
//
function pickRandomTags() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

//
function highLight(obj) {
  obj.classList.add("highlight");
}
//
function unhighLight(obj) {
  obj.classList.remove("highlight");
}
