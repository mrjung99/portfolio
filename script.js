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

//project popup
const popUp = document.getElementById("project-popup");
const popupTitle = document.getElementById("title");
const popupDescription = document.getElementById("description");
const popupLiveLink = document.getElementById("link");
const popupImage = document.getElementById("popUp-image");
const githubLink = document.getElementById("github-link");
const tech = document.getElementById("tech");

document.querySelectorAll(".project-more").forEach((moreButtons) => {
  moreButtons.addEventListener("click", (e) => {
    e.stopPropagation();

    const card = moreButtons.closest(".project-card");
    popupImage.src = card.querySelector("img").src;
    popupDescription.innerHTML = card.dataset.description;
    tech.innerHTML = card.dataset.tech;

    if (card.dataset.link || card.dataset.github) {
      popupLiveLink.innerHTML = `<a href="${card.dataset.link}" target="_blank">${card.dataset.link}</a>`;
      githubLink.innerHTML = `<a href="${card.dataset.github}" target="_blank">${card.dataset.github}</a>`;
    } else {
      popupLiveLink.innerHTML = "";
      githubLink.innerHTML = "";
    }

    popUp.style.display = "flex";
  });
});

document.getElementById("close").addEventListener("click", () => {
  popUp.style.display = "none";
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
