/* ==================== typing animation =====================*/
window.onload = function () {
  var typed = new Typed(".typing", {
    strings: [
      "Student",
      "Computer Hardware Technician",
      "Solar Photovoltaic System Technician",
      "Network Technician",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  /* ==================== Nav Toggler =====================*/
  const navToggler = document.querySelector(".nav-toggler");
  const aside = document.querySelector(".aside");

  navToggler.addEventListener("click", () => {
    aside.classList.toggle("open");
    navToggler.classList.toggle("open");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (!aside.contains(e.target) && !navToggler.contains(e.target)) {
      aside.classList.remove("open");
      navToggler.classList.remove("open");
    }
  });
};
