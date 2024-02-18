const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener("scroll", function(){
    if(this.window.scrollY > 80) {
        navbar.classList.add("nav-fixed");
    } else {
        navbar.classList.remove("nav-fixed");
    }
})

navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
})

closeBtn.addEventListener("click", function (){
    sidebar.classList.remove("show-sidebar");
})

date.innerHTML = new Date().getFullYear();