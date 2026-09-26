// ======================================
// Câmara de Comércio de São Paulo
// WDD 231
// agradecimento.js
// ======================================

// Lê os dados enviados pelo formulário
const params = new URLSearchParams(window.location.search);

// Função para obter um parâmetro da URL
function obterParametro(nome) {
    return params.get(nome) || "Não informado";
}

// Preenche os campos da página
document.querySelector("#nome").textContent =
    obterParametro("nome");

document.querySelector("#sobrenome").textContent =
    obterParametro("sobrenome");

document.querySelector("#email").textContent =
    obterParametro("email");

document.querySelector("#telefone").textContent =
    obterParametro("telefone");

document.querySelector("#empresa").textContent =
    obterParametro("empresa");

// Formata a data e hora do campo oculto
const dataISO = params.get("timestamp");

if (dataISO) {

    const data = new Date(dataISO);

    const dataFormatada = data.toLocaleString("pt-BR", {
        dateStyle: "full",
        timeStyle: "short"
    });

    document.querySelector("#timestamp").textContent = dataFormatada;

} else {

    document.querySelector("#timestamp").textContent = "Não informado";

}