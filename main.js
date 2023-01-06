const shareBtn = document.querySelector("#share-btn");
const shareSocial = document.querySelector(".share-container");
const hidden = document.querySelector(".hidden");

shareBtn.addEventListener("click", () => {
  shareSocial.classList.toggle("hidden");
});
