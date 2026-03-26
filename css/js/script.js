document.addEventListener('DOMContentLoaded', function() {
    // We use querySelector to be 100% sure we find the right elements
    var btn = document.querySelector('.toggle-button');
    var menu = document.querySelector('.navbar-links');
    
    if (btn && menu) {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Stops the page from jumping
            menu.classList.toggle('active');
            console.log("Mobile menu toggled!");
        });
    } else {
        console.error("Menu elements not found on this page.");
    }
});
