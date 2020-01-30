const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
    document.querySelector(".navigation").classList.toggle("responsive");
}
