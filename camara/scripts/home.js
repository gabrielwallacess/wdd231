const spotlights = document.querySelector("#spotlights");


async function carregarDestaques() {

    try {

        const resposta = await fetch("data/membros.json");

        const membros = await resposta.json();


        // Somente membros Gold (3) e Silver (2)
        const membrosDestaque = membros.filter(membro =>
            membro.nivel === 2 || membro.nivel === 3
        );


        // Sorteia a ordem
        membrosDestaque.sort(() => Math.random() - 0.5);


        // Escolhe 2 ou 3 empresas
        const quantidade = Math.floor(Math.random() * 2) + 2;


        const selecionados = membrosDestaque.slice(0, quantidade);


        mostrarDestaques(selecionados);


    } catch (erro) {

        console.log("Erro ao carregar membros:", erro);

    }

}



function mostrarDestaques(empresas) {


    spotlights.innerHTML = "";


    empresas.forEach(empresa => {


        const card = document.createElement("article");


        let nivelTexto = "";

        if (empresa.nivel === 3) {
            nivelTexto = "Gold";
        } else {
            nivelTexto = "Silver";
        }


        card.innerHTML = `

            <h3>${empresa.nome}</h3>

            <img 
                src="imagens/${empresa.imagem}" 
                alt="Logo da ${empresa.nome}"
                loading="lazy">


            <p>${empresa.descricao}</p>

            <p>
                📞 ${empresa.telefone}
            </p>

            <p>
                📍 ${empresa.endereco}
            </p>

            <a href="${empresa.site}" target="_blank">
                Visitar site
            </a>

            <p>
                Associação: ${nivelTexto}
            </p>

        `;


        spotlights.appendChild(card);


    });

}



carregarDestaques();