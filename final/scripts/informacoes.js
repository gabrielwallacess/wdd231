import "./main.js";



const formulario = document.querySelector("form");



formulario.addEventListener("submit",()=>{


localStorage.setItem(
"visitante",
"planejamento enviado"
);


});