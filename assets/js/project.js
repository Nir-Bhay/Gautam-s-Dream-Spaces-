// Testimonial Carousel Auto-Scroll
let index = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const testimonialCount = testimonials.length;

setInterval(() => {
    index = (index + 1) % testimonialCount;
    document.querySelector('.testimonial-carousel').style.transform = `translateX(-${index * 330}px)`;
}, 3000);

// Lazy Load Image Effect
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById('main-img');
    mainImage.classList.add('loaded');
});

// Star Rating
const stars = document.querySelector('.star-rating');
stars.addEventListener('click', function (e) {
    if (e.target.classList.contains('star')) {
        const rating = Array.from(stars.children).indexOf(e.target) + 1;
        stars.innerHTML = '⭐⭐⭐⭐⭐'.slice(0, rating);
    }
});


// Toggle the mobile navigation menu when the hamburger icon is clicked// JavaScript for Navigation and Discount Banner

// Ensure the discount banner appears with an animation
document.addEventListener("DOMContentLoaded", () => {
    const discountBanner = document.querySelector(".discount-banner");
    setTimeout(() => {
        discountBanner.classList.add("show-banner");
    }, 500);
});

// Handle responsive navigation menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-icon");

// Toggle menu for mobile view
menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
        navLinks.style.left = "0";
    } else {
        navLinks.style.left = "-100%";
    }
});

// Close the mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        if (menuToggle.checked) {
            menuToggle.checked = false;
            navLinks.style.left = "-100%";
        }
    });
});

// Add scroll effect for sticky navigation
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#ffffff";
        nav.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
    }
});

