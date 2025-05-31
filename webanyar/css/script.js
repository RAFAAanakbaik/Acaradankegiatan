document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    console.log("Menu toggle and mobile menu found");
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("translate-x-0");
      mobileMenu.classList.toggle("translate-x-full");
    });
  } else {
    console.error("Menu toggle or mobile menu not found");
  }

  function createSlider() {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
      const slides = slider.querySelector(".slides");
      let currentSlide = 0;

      function showSlide() {
        slides.style.transform = `translateX(-${currentSlide * 33.33}%)`;
        currentSlide = (currentSlide + 1) % 3;
      }

      showSlide();
      setInterval(showSlide, 3000);
    });
  }

  createSlider();
});
