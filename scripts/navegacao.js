const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navegacao");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("aberto");
    menuButton.classList.toggle("aberto");

    const expanded = menuButton.classList.contains("aberto");
    menuButton.setAttribute("aria-expanded", expanded);
});