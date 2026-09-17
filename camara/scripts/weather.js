const temperatura = document.querySelector("#temperatura");
const descricao = document.querySelector("#descricao-clima");
const previsao = document.querySelector("#previsao");
const icone = document.querySelector("#icone-clima");


const apiKey = "c2004a5c634f1e6e5169741579799788";


const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.55&lon=-46.63&units=metric&lang=pt_br&appid=${apiKey}`;


async function buscarClima() {

    try {

        const resposta = await fetch(url);


        if (resposta.ok) {

            const dados = await resposta.json();

            console.log(dados);

            mostrarClima(dados);


        } else {

            throw Error(await resposta.text());

        }


    } catch (erro) {

        console.log(erro);

    }

}



function mostrarClima(dados) {


    // Temperatura atual
    temperatura.textContent =
        dados.list[0].main.temp.toFixed(1);


    // Descrição atual
    const textoClima = dados.list[0].weather[0].description;

descricao.textContent =
    textoClima.charAt(0).toUpperCase() + textoClima.slice(1);



    const codigoIcone = dados.list[0].weather[0].icon;

icone.src = `https://openweathermap.org/img/wn/${codigoIcone}@2x.png`;

icone.alt = textoClima;

mostrarPrevisao(dados);

}




function mostrarPrevisao(dados) {

    previsao.innerHTML = "";

    const previsoes = dados.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );


    previsoes.slice(1, 4).forEach(dia => {

        const card = document.createElement("p");

        card.innerHTML = `
            <strong>${formatarData(dia.dt_txt).toUpperCase()}</strong>
            <br>
            Temperatura: ${dia.main.temp.toFixed(1)}°C
            <br>
            ${dia.weather[0].description}
        `;

        previsao.appendChild(card);

    });

}



function formatarData(data) {


    const dia = new Date(data);


    return dia.toLocaleDateString(
        "pt-BR",
        {
            weekday: "long"
        }
    );

}



buscarClima();