document.addEventListener('DOMContentLoaded', () => {
    // Note the "s" in getElementsByClassName
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    // Check if the button exists before adding the listener (prevents errors)
    if (toggleButton) {
        toggleButton.addEventListener('click', (e) => {
            // This stops the page from jumping to the top when you click
            e.preventDefault(); 
            navbarLinks.classList.toggle('active');
        });
    }
});
