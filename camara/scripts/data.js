
const currentYear = document.querySelector("#ano");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#ultimaModificacao");
lastModified.textContent = document.lastModified;