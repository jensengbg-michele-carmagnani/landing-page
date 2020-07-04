const taggle = document.getElementById("toggle");
const closeDown = document.getElementById("close");
const openUp = document.getElementById("open");
const modal = document.getElementById("modal");
const wrapper = document.getElementById("wrapper");
const body = document.querySelector("body");
// toggle nav

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// show modal

openUp.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// Hide modal
closeDown.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// Hide modal on outside click

window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);

window.addEventListener("click", (e) => {
  console.log(body);
  if (e.target == body &&  modal.className == "show-modal") {
   
    modal.classList.remove("show-modal");
  }
});
