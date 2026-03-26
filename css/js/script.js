document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            navbarLinks.classList.toggle('active');
            console.log("Menu button clicked!"); 
        });
    }
});
