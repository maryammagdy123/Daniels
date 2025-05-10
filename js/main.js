window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar-example2");
    const aboutSection = document.getElementById("about");

    if (window.scrollY >= aboutSection.offsetTop - 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});