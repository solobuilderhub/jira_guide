document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for internal navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      // Only intercept links that point to an anchor on the page
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

  // Highlight the active navigation link based on scroll position
  const sections = document.querySelectorAll("main section");
  window.addEventListener("scroll", function () {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach(section => {
      if (
        section.offsetTop <= scrollPos + 70 &&
        section.offsetTop + section.offsetHeight > scrollPos + 70
      ) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (section.getAttribute("id") === link.getAttribute("href").substring(1)) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
