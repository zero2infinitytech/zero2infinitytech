// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact section form placeholder behavior (if form added in future)
document.addEventListener("DOMContentLoaded", () => {
  const contactInputs = document.querySelectorAll(
    ".contact-section input, .contact-section textarea"
  );
  contactInputs.forEach((input) => {
    input.addEventListener("focus", () => input.classList.add("active"));
    input.addEventListener("blur", () => {
      if (input.value === "") input.classList.remove("active");
    });
  });
});
// Get the hamburger icon and nav links
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navbar .nav-links");

// Add click event to toggle the navigation links
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling to sections
const links = document.querySelectorAll(".navbar .nav-links a");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior

    // Get the target section
    const targetId = link.getAttribute("href").substring(1); // Remove '#' from href
    const targetSection = document.getElementById(targetId);

    // Scroll to the section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close the menu after clicking
    navLinks.classList.remove("active");
  });
});
