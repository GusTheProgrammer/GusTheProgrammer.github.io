function initProgressBar() {
  document.querySelectorAll(".skill-bar .skill-bar-in").forEach((bar) => {
    bar.style.width = bar.getAttribute("aria-valuenow") + "%";
  });
}

function typeIt() {
  const element = document.getElementById("type-it");
  if (element) {
    new TypeIt(element, {
      speed: 200,
      loop: false,
      strings: ["Software Developer..."],
      breakLines: false,
    });
  }
}


function addSmoothScrolling() {
  document.querySelectorAll(".one-page-nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.cookie = `theme=${theme};path=/;max-age=31536000`; // 1 year
  document.getElementById("theme-toggle").checked = theme === "light";
}

function getCookieValue(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(name))
    ?.split('=')[1];
  return cookieValue || "dark"; // Default to dark mode
}

function toggleTheme(event) {
  applyTheme(event.target.checked ? "light" : "dark");
}

function createToast() {
  const toastEl = document.getElementById("liveToast");
  return new bootstrap.Toast(toastEl);
}

function showToast() {
  document.getElementById("toastOverlay").style.display = "flex";
  createToast().show();
}

function hideToast() {
  document.getElementById("toastOverlay").style.display = "none";
}

function setupEventListeners() {
  document.getElementById("theme-toggle")?.addEventListener("change", toggleTheme);
  document.getElementById("emailForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast();
  });
  document.getElementById("liveToast")?.addEventListener("hidden.bs.toast", hideToast);
}

function openWebsiteInNewTab(url) {
  window.open(url, '_blank').focus();
}

function populateTableData(data, container) {
  container.innerHTML = ''; // Clear existing content
  const row = document.createElement('div');
  row.className = 'row';

  Object.entries(data).forEach(([semester, courses]) => {
    const col = document.createElement('div');
    col.className = 'col-md-6';
    const table = document.createElement('table');
    table.className = 'table table-dark table-striped';
    col.appendChild(table);
    row.appendChild(col);

    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    headerRow.innerHTML = `<th colspan="2">${semester}</th>`;
    const tbody = table.createTBody();

    courses.forEach(({ course, grade }) => {
      const courseRow = tbody.insertRow();
      courseRow.innerHTML = `<td>${course}</td><td>${grade}</td>`;
    });
  });

  container.appendChild(row);
}

function setupModals() {
  ['YearOne', 'YearTwo', 'YearThree'].forEach((year) => {
    const modal = document.getElementById(year);
    modal?.addEventListener('show.bs.modal', () => {
      fetch('src/data/grades.json')
        .then(response => response.json())
        .then(data => populateTableData(data[year], modal.querySelector('.modal-body')))
        .catch(error => console.error('Error:', error));
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initProgressBar();
  typeIt();
  addSmoothScrolling();
  applyTheme(getCookieValue("theme"));
  setupEventListeners();
  setupModals();

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-top-fixed");
    if (header) {
      header.classList.toggle(
        "solid-bg",
        window.pageYOffset >= (document.getElementById("about")?.offsetTop || 0)
      );
    }
  });
});
