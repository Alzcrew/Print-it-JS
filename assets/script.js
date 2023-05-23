document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelectorAll(".carousel-images img");
    const bulletPoints = document.querySelectorAll(".bullet-points .bullet");
    const carouselTextContent = document.querySelector(".carousel-text p");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    let currentIndex = 0;
    const totalImages = carouselImages.length;
  
    // Tableau de textes correspondant à chaque image
    const textArray = [
      "Impressions tous formats",
      "Tirages haute définition grand format",
      "Grand choix de couleurs",
      "Autocollants"
    ];
  
    const textSpanArray = [
      "en boutique et en ligne",
      "pour vos bureaux et events",
      "de CMJN aux pantones",
      "avec découpe laser sur mesure"
  ];
  
    // Affiche l'image et met à jour le texte
    function showImage(index) {
      carouselImages.forEach(image => image.style.display = "none");
      carouselImages[index].style.display = "block";
      carouselTextContent.innerHTML = textArray[index] + ' <span>' + textSpanArray[index] + '</span>';
    }
  
    // Met à jour le point sélectionné
    function updateBulletPoint(index) {
      bulletPoints.forEach(bullet => bullet.classList.remove("active"));
      bulletPoints[index].classList.add("active");
    }
  
    // Affiche l'image suivante
    function showNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
      updateBulletPoint(currentIndex);
    }
  
    // Affiche l'image précédente
    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
      updateBulletPoint(currentIndex);
    }
  
    // Événement clic pour la flèche suivante
    nextArrow.addEventListener("click", showNextImage);
  
    // Événement clic pour la flèche précédente
    prevArrow.addEventListener("click", showPreviousImage);
  
    // Événement clic pour les bullet points
    bulletPoints.forEach((bullet, index) => {
      bullet.addEventListener("click", function() {
        currentIndex = index;
        showImage(currentIndex);
        updateBulletPoint(currentIndex);
      });
    });
  
    // Affiche la première image et le texte correspondant au chargement de la page
    showImage(currentIndex);
    updateBulletPoint(currentIndex);
  });
  