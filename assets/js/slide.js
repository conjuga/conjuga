// main.js
document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slide');
  var currentIndex = 0;
  var slideCount = slides.length;
  var slidesContainer = document.querySelector('.slides');
  var slideWidth = slides[0].clientWidth;

  // Clone first and last slides
  var firstClone = slides[0].cloneNode(true);
  var lastClone = slides[slideCount - 1].cloneNode(true);
  
  // Append and prepend clones
  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slides[0]);

  // Update slide width and initial position
  slidesContainer.style.transform = 'translateX(' + (-slideWidth) + 'px)';

  function moveToSlide(index) {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = 'translateX(' + (-slideWidth * (index + 1)) + 'px)';
  }

  function showNextSlide() {
    currentIndex++;
    moveToSlide(currentIndex);

    if (currentIndex === slideCount) {
      setTimeout(function () {
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = 'translateX(' + (-slideWidth) + 'px)';
        currentIndex = 0;
      }, 500);
    }
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});