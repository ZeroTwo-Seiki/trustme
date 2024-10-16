let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let text = document.querySelector(".text");
let video = document.querySelector(".video");

function haha() {
  no.style.display = "none";
}
function yeah() {
  console.log(text.innerHTML);
  setTimeout(() => {
    yes.style.display = "none";
    text.style.display = "none";
  }, 1000);
}
yes.addEventListener("click", () => {
  text.innerHTML = "Haha I knew it thanks";
  video.play();
  video.style.display = "block";
  no.style.display = "none";
});
