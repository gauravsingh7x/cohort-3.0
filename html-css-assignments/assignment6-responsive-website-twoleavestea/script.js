const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const section = document.querySelector("#latte-section");

let currentSlide = 0;

const tastePalette = {
  0: {
    slideBg: "#a6682a", 
    sectionBg: "#de9e5f" 
  },
  1: {
    slideBg: "#6A9656", 
    sectionBg: "#497136" 
  },
  2: {
    slideBg: "#009cce", 
    sectionBg: "#03779d" 
  }
};

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  const config = tastePalette[currentSlide];
  
  if (config) {
    if (section) {
      section.style.backgroundColor = config.sectionBg;
    }
    
    slides.forEach((slide, index) => {
      const slideConfig = tastePalette[index];
      if (slideConfig) {
        slide.style.backgroundColor = slideConfig.slideBg;
      }
    });
  }
}

nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
});

updateSlider();