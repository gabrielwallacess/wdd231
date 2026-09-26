// Preenche automaticamente o campo oculto
// com a data e hora em que a página foi carregada.

document.addEventListener("DOMContentLoaded", () => {

    // Campo oculto com data/hora
    const timestamp = document.querySelector("#timestamp");

    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }

    // Seleciona todos os botões "Saiba mais"
    const botoes = document.querySelectorAll(".modal-btn");

    botoes.forEach((botao) => {

        botao.addEventListener("click", () => {

            const modalID = botao.dataset.modal;
            const modal = document.getElementById(modalID);

            if (modal) {
                modal.showModal();
            }

        });

    });

    // Botões Fechar
    const fechar = document.querySelectorAll(".close");

    fechar.forEach((botao) => {

        botao.addEventListener("click", () => {

            botao.closest("dialog").close();

        });

    });

    // Fecha o modal clicando fora dele
    const dialogs = document.querySelectorAll("dialog");

    dialogs.forEach((dialog) => {

        dialog.addEventListener("click", (event) => {

            const rect = dialog.getBoundingClientRect();

            const clicouFora =
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom;

            if (clicouFora) {
                dialog.close();
            }

        });

    });

});