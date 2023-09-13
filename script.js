
      const slider = document.querySelector(".slider");
      const slides = document.querySelectorAll(".slide");
      let curSlide = 0;
      let autoSlideInterval; // Interval variable to control automatic sliding

      function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
      }

      function nextSlide() {
        curSlide = (curSlide + 1) % slides.length;
        goToSlide(curSlide);
      }

      function prevSlide() {
        curSlide = (curSlide - 1 + slides.length) % slides.length;
        goToSlide(curSlide);
      }

      function startAutoSlide() {
        // Automatically advance to the next slide every 5 seconds (adjust as needed)
        autoSlideInterval = setInterval(nextSlide, 2000);
      }

      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }

      // Start automatic sliding when the page loads
      startAutoSlide();

      // Pause automatic sliding when the user interacts with the slider
      slider.addEventListener("mouseenter", stopAutoSlide);
      slider.addEventListener("mouseleave", startAutoSlide);

      // New variable names
const slideElements = document.querySelectorAll(".slide2");
let currentSlideIndex = 0;
let maxSlideIndex = slideElements.length - 1;

// Loop through slideElements and set each slide's translateX property to index * 100%
slideElements.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

// Select next slide button
const nextSlideButton = document.querySelector(".btn-next");

// Add event listener and navigation functionality for next button
nextSlideButton.addEventListener("click", function () {
    // Check if current slide is the last and reset to the first slide
    if (currentSlideIndex === maxSlideIndex) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }

    // Move slides by -100%
    slideElements.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlideIndex)}%)`;
    });
});

// Select previous slide button
const prevSlideButton = document.querySelector(".btn-prev");

// Add event listener and navigation functionality for previous button
prevSlideButton.addEventListener("click", function () {
    // Check if current slide is the first and reset to the last slide
    if (currentSlideIndex === 0) {
        currentSlideIndex = maxSlideIndex;
    } else {
        currentSlideIndex--;
    }

    // Move slides by 100%
    slideElements.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlideIndex)}%)`;
    });
});

   