const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
   /* document.getElementById("navigation").classList.toggle("hide");*/
    document.querySelector(".navigation").classList.toggle("responsive");
}
var d = new Date();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days = ['Sunday, ','Monday, ','Tuesday, ','Wednesday, ','Thursday, ','Friday, ','Saturday, '];

document.getElementById("todaysDate").innerHTML = 
days[d.getDay()] + ' '+ 
d.getDate() +' '+ 
months[d.getMonth()] +' '+ 
d.getFullYear();