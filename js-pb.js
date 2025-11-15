const jsToggle = document.querySelector(".js-toggle");
const backDrop = document.querySelector(".backDrop");
const hideLinks = document.querySelector(".hide-backdrop");
jsToggle.addEventListener("click", () => {
  backDrop.style.display = "block";
  hideLinks.style.display = "block";
});

backDrop.addEventListener("click", () => {
  backDrop.style.display = "none";
  hideLinks.style.display = "none";
});
// jsToggle.addEventListener("click", () => {
//   backDrop.style.display = "none";
//   hideLinks.style.display = "none";
// })
