function initParticles() {
  // Particle Effect for Background
  particlesJS.load(
    "particlebackground",
    "src/particles-config.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
}

function initProgressBar() {
  const progressBars = document.querySelectorAll(".skill-bar .skill-bar-in");
  progressBars.forEach((bar) => {
    const progressWidth = bar.getAttribute("aria-valuenow") + "%";
    bar.style.width = progressWidth;
  });
}

function typeIt() {
  const element = document.getElementById("type-it");
  if (element) {
    new TypeIt("#type-it", {
      speed: 200,
      loop: false,
      strings: ["Software Developer..."],
      breakLines: false,
    });
  }
}

function initScrollIt() {
  // Select all navigation links
  const navLinks = document.querySelectorAll(".one-page-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  initParticles();
  initProgressBar();
  typeIt();
  initScrollIt();
});
