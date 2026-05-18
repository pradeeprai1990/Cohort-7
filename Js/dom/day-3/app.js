let galleryMidElement = document.querySelector(".galleryMid");
let galleryOverlayElement = document.querySelector(".galleryOverlay");

let mainImg = document.querySelector(".galleryModal img");
galleryMidElement.addEventListener("click", (e) => {
  let clickedImgsrc = e.target.src; //undefined

  if (clickedImgsrc) {
    galleryOverlayElement.classList.add("showGallery");

    mainImg.src = clickedImgsrc;
  }
});

let galleryModalCloseBtn = document.querySelector(".galleryModal button");

let closeModal = () => {
  galleryOverlayElement.classList.remove("showGallery");
};

galleryModalCloseBtn.addEventListener("click", closeModal);

galleryOverlayElement.addEventListener("click", closeModal);

let galleryModal=document.querySelector(".galleryModal")

galleryModal.addEventListener(
    "click",
    (event)=>{
        event.stopPropagation()
    }
)