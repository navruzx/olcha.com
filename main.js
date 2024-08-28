let btn = document.querySelector(".btn");
let menu = document.querySelector(".menu");
let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
function openKategory() {
  menu.classList.toggle("menu-block");
}
let login = document.querySelector(".login-contaier");
function showLogin() {
    login.classList.remove("close");
}
function closeLogin() {
    login.classList.add("close");
}