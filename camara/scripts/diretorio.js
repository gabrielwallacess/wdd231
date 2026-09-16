const url = "dados/membros.json";
const container = document.querySelector("#membros");

async function carregarMembros() {

    try {

        const resposta = await fetch(url);

        const membros = await resposta.json();

        mostrarMembros(membros);

    } catch (erro) {

        console.error("Erro ao carregar os membros.", erro);

    }

}

function mostrarMembros(membros) {

    container.innerHTML = "";

    membros.forEach(membro => {

        const card = document.createElement("section");

        card.classList.add("card");

        card.innerHTML = `
            <img src="imagens/${membro.imagem}" alt="${membro.nome}" loading="lazy">

            <h3>${membro.nome}</h3>

            <p><strong>Endereço:</strong> ${membro.endereco}</p>

            <p><strong>Telefone:</strong> ${membro.telefone}</p>

            <p><strong>Associação:</strong> ${nivelTexto(membro.nivel)}</p>

            <p>${membro.descricao}</p>

            <a href="${membro.site}" target="_blank">
                Visitar Site
            </a>
        `;

        container.appendChild(card);

    });

}

function nivelTexto(nivel){

    if(nivel === 1) return "Membro";

    if(nivel === 2) return "Prata";

    return "Ouro";

}

carregarMembros();

const grid = document.querySelector("#gridView");
const lista = document.querySelector("#listView");

grid.addEventListener("click", () => {

    container.classList.add("grid");

    container.classList.remove("lista");

});

lista.addEventListener("click", () => {

    container.classList.add("lista");

    container.classList.remove("grid");

});