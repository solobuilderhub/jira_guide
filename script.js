document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for internal anchor links only.
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for header height
            behavior: "smooth"
          });
        }
      }
    });
  });
});
