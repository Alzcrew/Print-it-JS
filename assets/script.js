const carouselImagesContainer = document.querySelector(".carousel-images");
const carouselTextContent = document.querySelector(".carousel-text p");
const carouselNav = document.querySelector(".carousel-navigation");
const bulletPointsContainer = document.querySelector(".bullet-points");

const carouselData = [
  {
    imageSrc: "./assets/images/slideshow/slide1.jpg",
    text: "Impressions tous formats",
    textSpan: "en boutique et en ligne"
  },
  {
    imageSrc: "./assets/images/slideshow/slide2.jpg",
    text: "Tirages haute définition grand format",
    textSpan: "pour vos bureaux et events"
  },
  {
    imageSrc: "./assets/images/slideshow/slide3.jpg",
    text: "Grand choix de couleurs",
    textSpan: "de CMJN aux pantones"
  },
  {
    imageSrc: "./assets/images/slideshow/slide4.png",
    text: "Autocollants",
    textSpan: "avec découpe laser sur mesure"
  }
];

let currentIndex = 0;
let bullets = [];

// Insertion des images dans le carousel
for (const data of carouselData) {
  const image = document.createElement("img");
  image.src = data.imageSrc;
  image.alt = "Image";
  carouselImagesContainer.appendChild(image);
}

const carouselImages = document.querySelectorAll(".carousel-images img");
const prevButton = document.querySelector(".prev-arrow");
const nextButton = document.querySelector(".next-arrow");

// Crée les bullet points
function createBulletPoints() {
  for (let i = 0; i < carouselData.length; i++) {
    const bullet = document.createElement("div");
    bullet.className = "bullet";
    bulletPointsContainer.appendChild(bullet);
    bullets.push(bullet);
  }
}

// Affiche l'image, le texte et met à jour le bullet point
function showSlide(index) {
  currentIndex = index;

  for (let i = 0; i < carouselImages.length; i++) {
    const image = carouselImages[i];
    const bullet = bullets[i];

    if (i === currentIndex) {
      image.classList.add("active");
      bullet.classList.add("active");
    } else {
      image.classList.remove("active");
      bullet.classList.remove("active");
    }
  }

  const { text, textSpan } = carouselData[currentIndex];
  carouselTextContent.innerHTML = `<p>${text} <span>${textSpan}</span></p>`;
}

// Affiche l'image suivante
function showNextSlide() {
  const nextIndex = (currentIndex + 1) % carouselData.length;
  showSlide(nextIndex);
}

// Affiche l'image précédente
function showPreviousSlide() {
  const prevIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  showSlide(prevIndex);
}

// Gestion des événements des flèches
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Crée les bullet points et affiche la première image au chargement de la page
createBulletPoints();
showSlide(currentIndex);
