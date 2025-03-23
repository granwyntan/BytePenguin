document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    // Check if all elements are found
    if (menuBtn && mobileMenu && menuIcon && closeIcon) {
        menuBtn.addEventListener("click", function () {
            const menuIsVisible = mobileMenu.classList.contains("hidden");

            // Toggle mobile menu visibility
            mobileMenu.classList.toggle("hidden", !menuIsVisible);
            menuIcon.classList.toggle("hidden", !menuIsVisible);
            closeIcon.classList.toggle("hidden", menuIsVisible);

            // Shift main content up or down
            if (menuIsVisible) {
                mainContent.classList.add("pt-36"); // Add extra padding to shift content down
                navbar.classList.remove("shadow-md"); // Remove shadow when menu is open
            } else {
                mainContent.classList.remove("pt-36"); // Remove extra padding to move content back up
                navbar.classList.add("shadow-md"); // Add shadow back when menu is closed
            }
        });
    } else {
        console.error("Mobile menu elements not found!");
    }
});
