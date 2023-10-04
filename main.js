function showLinks() {
    const navToggleBtn = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    navToggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show-links");
    });
}


showLinks();

