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


// Toggle the mobile navigation menu when the hamburger icon is clicked
document.querySelector('.hamburger').addEventListener('click', function (event) {
    // Prevent click event from bubbling up to the document
    event.stopPropagation();

    // Toggle 'active' class on the hamburger icon to animate it into an 'X' shape
    this.classList.toggle('active');

    // Toggle 'show' class on the navigation links to display the mobile menu
    document.querySelector('.nav-links.mobile').classList.toggle('show');
});

// Close the mobile menu if user clicks anywhere outside of it
document.addEventListener('click', function (event) {
    const navMenu = document.querySelector('.nav-links.mobile');
    const hamburger = document.querySelector('.hamburger');

    // Check if the click is outside the nav menu and hamburger
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        // Close the mobile menu and reset hamburger icon
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
    }
});

// Prevent event from closing the nav when clicking inside the nav or hamburger
document.querySelector('.nav-links.mobile').addEventListener('click', function (event) {
    event.stopPropagation();
});

