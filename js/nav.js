hamburger = document.getElementById("hamburger")
menu = document.getElementById("nav_bar");
hamburger.onclick = function(){
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
}

main = document.getElementById("main")
profile = document.getElementById("school")
t_list = document.getElementById("t-list")
main.onclick = function(){
  window.location.replace("home_page.html")
}

t_list.onclick = function () {
  window.location.replace("teacher_list.html")
}

profile.onclick = function(){
  window.location.replace("school profile.html")
}
