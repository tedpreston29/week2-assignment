console.log("Hey!");

const thumbnails = document.getElementById("thumbnails");
const imageContainer = document.getElementById("imageContainer");
const buttonRight = document.getElementById("right");
const buttonLeft = document.getElementById("left");
let currentIndex = 0;

const images = [
  {
    src: "./images/car-1920.webp",
    alt: "Cyberpunk car",
    srcset: "./images/car-1000.webp 1000w, ./images/car-500.webp 500w",
  },
  {
    src: "./images/skylight-1920.webp",
    alt: "looking up through a skylight",
    srcset:
      "./images/skylight-1000.webp 1000w, ./images/skylight-500.webp 500w",
  },
  {
    src: "./images/roof-1920.webp",
    alt: "picture of chinese lanterns",
    srcset: "./images/roof-1000.webp 1000w, ./images/roof-500.webp 500w",
  },
  {
    src: "./images/skyscraper-1920.webp",
    alt: "looking up at towering skyscrapers",
    srcset:
      "./images/skyscraper-1000.webp 1000w, ./images/skyscraper-500.webp 500w",
  },
  {
    src: "./images/Foggy-day.webp",
    alt: "Foggy scene of the city",
    srcset: "./images/foggy-day-1000.webp, ./images/foggy-day-500.webp",
  },
  {
    src: "./images/dark-room-1920.webp",
    alt: "A gloomy abandoned room",
    srcset: "./images/dark-room-1000.webp, ./images/dark-room-500.webp",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");
    console.log("current image is", image);
    imageElement.src = image.src;
    imageElement.srcset = image.srcset;
    imageElement.alt = image.alt;
    imageElement.sizes = "500px";
    imageElement.addEventListener("click", function () {
      console.log(image);
      createBigImage(image);
    });
    thumbnails.appendChild(imageElement);
  });
}

createThumbnails();

function createBigImage(imgDetails) {
  imageContainer.innerHTML = "";
  const bigImage = document.createElement("img");
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;
  imageContainer.appendChild(bigImage);
}

function imageRight() {
  console.log("image right");
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  createBigImage(images[currentIndex]);
}
buttonRight.addEventListener("click", imageRight);

function imageLeft() {
  console.log("image left");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  createBigImage(images[currentIndex]);
}
buttonLeft.addEventListener("click", imageLeft);

createBigImage(images[currentIndex]);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    imageRight();
  } else if (event.key === "ArrowLeft") {
    imageLeft();
  }
});
