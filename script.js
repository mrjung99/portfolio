// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".bar");

function animateBars() {
  skillBars.forEach((bar) => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent;
  });
}

// Trigger animation when skills section is in view
const skillsSection = document.querySelector(".skills");

function checkScroll() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    animateBars();
    window.removeEventListener("scroll", checkScroll);
  }
}

window.addEventListener("scroll", checkScroll);
