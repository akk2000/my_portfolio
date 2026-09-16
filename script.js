// ၁။ Scroll Reveal Animation (Website အောက်သို့ ဆင်းစဉ် Element များ ပေါ်လာစေခြင်း)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});

// ၂။ Typewriter Effect for Hero Title Subheading
const textElement = document.querySelector('.hero p');
const textArray = ["Full Stack Developer", "Linux Enthusiast", "Problem Solver", "Cloud Engineer"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    textElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

// Start Typewriter Animation on Load
document.addEventListener("DOMContentLoaded", () => {
  textElement.textContent = "";
  typeText();
});