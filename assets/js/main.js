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





document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector("#hero");
    hero.style.backgroundImage = "url('assets/images/herosec.jpg')";
});



document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector("#hero");
    hero.classList.add("fadeInImage");
});







// Wait for the DOM to fully load before running any scripts
document.addEventListener('DOMContentLoaded', function () {

    // Get all the project cards
    const projectCards = document.querySelectorAll('.project-card');

    // Add event listeners for hover effects
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            const projectInfo = card.querySelector('.project-info');
            const projectImage = card.querySelector('img');

            // Add class for hovering effect (scale image, show text)
            projectInfo.style.opacity = 1;
            projectInfo.style.transform = 'translateY(0)';
            projectImage.style.transform = 'scale(1.05)'; // Zoom the image
        });

        card.addEventListener('mouseout', function () {
            const projectInfo = card.querySelector('.project-info');
            const projectImage = card.querySelector('img');

            // Remove hover effect (reset scale and hide text)
            projectInfo.style.opacity = 0;
            projectInfo.style.transform = 'translateY(20px)';
            projectImage.style.transform = 'scale(1)'; // Reset image scale
        });
    });

    // If you want to add interactivity on clicking the project card (like opening a detailed page)
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default link action (optional, if you want to add your own behavior)
            event.preventDefault();

            // You can handle the click here, for example, redirecting to a project page
            const projectURL = link.getAttribute('href');
            window.location.href = projectURL;
        });
    });

});












// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
});

// Parallax Scrolling Effect for Hero Background
window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
});



// JavaScript for the Contact Form Validation and Animation

document.addEventListener('DOMContentLoaded', function () {

    // Get form elements
    const form = document.querySelector('.form');
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');
    const submitButton = document.querySelector('button[type="submit"]');

    // Adding animation when the form is loaded
    form.classList.add('fade-in');

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Validate form fields
        if (validateForm(nameField, emailField, messageField)) {
            // Simulate form submission success
            submitButton.innerText = "Sending...";
            submitButton.disabled = true;

            setTimeout(function () {
                // Simulate a successful form submission
                alert("Your message has been sent successfully!");
                form.reset();
                submitButton.innerText = "Send Message";
                submitButton.disabled = false;
            }, 1500); // 1.5 seconds delay to simulate sending
        } else {
            alert("Please fill out all fields correctly!");
        }
    });

    // Function to validate the form fields
    function validateForm(name, email, message) {
        let isValid = true;

        // Check if name is filled out
        if (name.value.trim() === '') {
            name.classList.add('error');
            isValid = false;
        } else {
            name.classList.remove('error');
        }

        // Check if email is valid
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.value.trim() === '' || !emailPattern.test(email.value)) {
            email.classList.add('error');
            isValid = false;
        } else {
            email.classList.remove('error');
        }

        // Check if message is filled out
        if (message.value.trim() === '') {
            message.classList.add('error');
            isValid = false;
        } else {
            message.classList.remove('error');
        }

        return isValid;
    }

    // Adding CSS animation class to form on load
    setTimeout(function () {
        form.classList.remove('fade-in');
    }, 500);
});



// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll smoothly to the target element
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Newsletter form validation and submission
document.querySelector('.footer-newsletter form').addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value;

    if (validateEmail(email)) {
        // Simulate form submission (you can replace with actual API call)
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = ''; // Clear the input after successful submission
    } else {
        alert('Please enter a valid email address.');
    }
});

// Validate email format (simple validation)
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// Social media icon hover effect
document.querySelectorAll('.social-links li a').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });
});

// Scroll to Top Button (appear after user scrolls)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scroll-to-top');
scrollToTopBtn.innerHTML = '↑';
document.body.appendChild(scrollToTopBtn);

// Show or hide the scroll-to-top button
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
