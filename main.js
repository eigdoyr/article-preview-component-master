const shareBtn = document.querySelector("#share-btn");
const shareSocial = document.querySelector(".share-container");
const shareBtnPop = document.querySelector("#share-btn-pop");
const hidden = document.querySelector(".hidden");

shareBtn.addEventListener("click", (e) => {
  shareSocial.classList.toggle("hidden");
});

shareBtnPop.addEventListener("click", (e) => {
  hidden.classList.toggle("hidden");
});
