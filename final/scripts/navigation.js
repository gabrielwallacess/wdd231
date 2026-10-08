const button = document.querySelector("#menu-button");

const menu = document.querySelector("#menu");


if(button){

button.addEventListener("click",()=>{


menu.classList.toggle("open");


const aberto =
menu.classList.contains("open");


button.setAttribute(
"aria-expanded",
aberto
);


});

}