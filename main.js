function toggleNavLinks() {
    const navLinks = document.getElementById("nav-links");
    const currentHeight = window.getComputedStyle(navLinks).height;
    console.log("currentHeight", currentHeight);
    if (currentHeight === "0px") {
        openNavLinks(navLinks);
    }
    else {
        closeNavLinks(navLinks);
    }
}

function openNavLinks(navLinks) {
    const linkCount = navLinks.childElementCount;
    const linkHeight = navLinks.firstElementChild.offsetHeight;
    const newHeight = linkCount * linkHeight;
    navLinks.style.height = `${newHeight}px`;

}

function closeNavLinks(navLinks) {
    navLinks.style.height = "0px";
}

const addNavToggle = () => {
    const navToggleBtn = document.getElementById("nav-toggle");
    navToggleBtn.addEventListener("click", toggleNavLinks);
}



addNavToggle();

