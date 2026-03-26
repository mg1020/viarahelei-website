document.addEventListener('DOMContentLoaded', () => {
    // querySelector is more precise
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            navbarLinks.classList.toggle('active');
            console.log("Menu toggled!"); // This helps you debug
        });
    } else {
        console.log("Button or Links not found in HTML");
    }
});
