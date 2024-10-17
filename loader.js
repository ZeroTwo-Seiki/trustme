let all = document.querySelector(".second-page");
let loader = document.querySelector(".first-page");

setTimeout(() => {
  loader.style.display = "none";
  all.style.display = "block";
}, 4500);
