const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#menuNavegacao");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});