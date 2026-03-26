document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', (e) => {
        e.preventDefault(); // This is crucial for mobile browsers
        navbarLinks.classList.toggle('active');
    });
});
