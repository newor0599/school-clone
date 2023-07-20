hamburger = document.getElementById("hamburger")
menu = document.getElementById("nav_bar");
hamburger.onclick = function(){
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
}
