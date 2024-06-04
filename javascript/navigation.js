function changeNavigationBackground() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 700) {
        // Adjust this value based on when you want the background to change
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", changeNavigationBackground);
