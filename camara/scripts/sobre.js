import { locais } from "../data/locais.mjs";
console.log("sobre.js carregado");
console.log(locais);
// ================================
// Criação dos cartões
// ================================

const cards = document.querySelector("#cards");

locais.forEach((local) => {
    const card = document.createElement("article");

    const titulo = document.createElement("h2");
    titulo.textContent = local.nome;

    const figure = document.createElement("figure");

    const imagem = document.createElement("img");
    imagem.src = local.imagem;
    imagem.alt = local.nome;
    imagem.width = 300;
    imagem.height = 200;
    imagem.loading = "lazy";

    figure.appendChild(imagem);

    const endereco = document.createElement("address");
    endereco.textContent = local.endereco;

    const descricao = document.createElement("p");
    descricao.textContent = local.descricao;

    const botao = document.createElement("button");
    botao.textContent = "Saiba mais";

    botao.addEventListener("click", () => {
        alert(`${local.nome}\n\n${local.descricao}`);
    });

    card.appendChild(titulo);
    card.appendChild(figure);
    card.appendChild(endereco);
    card.appendChild(descricao);
    card.appendChild(botao);

    cards.appendChild(card);
});

// ================================
// Última visita
// ================================

const mensagem = document.querySelector("#mensagem-visita");

const ultimaVisita = localStorage.getItem("ultimaVisita");

const agora = Date.now();

if (!ultimaVisita) {

    mensagem.textContent =
        "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";

} else {

    const diferenca = agora - Number(ultimaVisita);

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    if (dias < 1) {

        mensagem.textContent = "Já voltou? Que legal!";

    } else if (dias === 1) {

        mensagem.textContent =
            "Seu último acesso foi há 1 dia.";

    } else {

        mensagem.textContent =
            `Seu último acesso foi há ${dias} dias.`;

    }

}

localStorage.setItem("ultimaVisita", agora);
