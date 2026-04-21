document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section, div[id]");

  // Toggle menu
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    links.classList.toggle("active");
  });

  // Close menu on link click
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!links.contains(e.target) && !toggle.contains(e.target)) {
      links.classList.remove("active");
    }
  });

  // 🔥 Active section highlight on scroll
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});
