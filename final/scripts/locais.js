const lista = document.querySelector("#lista-locais");

const modal = document.querySelector("#modal");

const conteudoModal = document.querySelector("#conteudo-modal");

const fechar = document.querySelector("#fechar-modal");



async function carregarLocais(){


try{


const resposta = await fetch("./data/atracoes.json");


if(!resposta.ok){

throw new Error("Erro ao carregar dados");

}


const locais = await resposta.json();



lista.innerHTML = locais.map(local => `


<article class="card">


<img 
src="imagens/${local.imagem}"
alt="${local.nome}"
loading="lazy">


<h2>${local.nome}</h2>


<p>
<strong>Categoria:</strong>
${local.categoria}
</p>


<p>
<strong>Bairro:</strong>
${local.bairro}
</p>



<p>
${local.descricao}
</p>


<button class="detalhes"
data-nome="${local.nome}"
data-descricao="${local.descricao}"
data-bairro="${local.bairro}">
Ver detalhes
</button>



</article>



`).join("");



document.querySelectorAll(".detalhes")
.forEach(botao=>{


botao.addEventListener("click",()=>{


modal.showModal();


conteudoModal.innerHTML = `

<h2>${botao.dataset.nome}</h2>

<p>${botao.dataset.descricao}</p>

<p>
Localização:
${botao.dataset.bairro}
</p>

`;



});


});



}

catch(error){


lista.innerHTML =
"<p>Não foi possível carregar os locais.</p>";


console.log(error);


}


}



fechar.addEventListener("click",()=>{

modal.close();

});



carregarLocais();