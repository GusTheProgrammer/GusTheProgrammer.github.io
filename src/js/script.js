function initParticles(theme) {
  // Choose particle config file based on theme
  var configFileName = theme === 'light' ? 'src/config/light-particles-config.json' : 'src/config/dark-particles-config.json';

  particlesJS.load(
    "particlebackground",
    configFileName,
    function () {
      console.log("callback - particles.js config loaded for " + theme + " mode");
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

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.cookie = "theme=" + theme + ";path=/;max-age=31536000"; // 1 year
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if(name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

function applySavedTheme() {
  var savedTheme = getCookie('theme') || 'dark'; // Default to dark mode
  var toggleSwitch = document.getElementById('theme-toggle');
  toggleSwitch.checked = (savedTheme === 'light');
  setTheme(savedTheme);
}

document.getElementById('theme-toggle').addEventListener('change', function() {
  var newTheme = this.checked ? 'light' : 'dark';
  setTheme(newTheme);
});

window.addEventListener('scroll', function() {
  var aboutSection = document.getElementById('about');
  var header = document.querySelector('.header-top-fixed');
  
  // Get the position of the about section
  var aboutPosition = aboutSection.offsetTop;

  // Check if the current scroll position is greater than or equal to the about section's position
  if (window.pageYOffset >= aboutPosition) {
    header.classList.add('solid-bg');
  } else {
    header.classList.remove('solid-bg');
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  var savedTheme = getCookie('theme') || 'dark';
  initParticles(savedTheme);
  initProgressBar();
  typeIt();
  initScrollIt();
  applySavedTheme();
});
