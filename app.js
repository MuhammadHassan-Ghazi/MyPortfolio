// JavaScript to add the "visible" class when elements come into view

const elementsToAnimate = document.querySelectorAll('.fade-left, .fade-right, .fade-up, .project-card');

const observerOptions = {
    threshold: 0.2 // Only trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe each element
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Additional functionality to trigger portfolio visibility
document.getElementById('viewPortfolioBtn').addEventListener('click', function () {
    document.getElementById('portfolio').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('technologies').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    this.style.display = 'none'; // Hide the button after clicking
});
