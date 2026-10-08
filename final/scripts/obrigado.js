const resultado = document.querySelector("#resultado");


const parametros = new URLSearchParams(
window.location.search
);



resultado.innerHTML = `

<p>
Nome:
${parametros.get("nome")}
</p>


<p>
Email:
${parametros.get("email")}
</p>


<p>
Data da viagem:
${parametros.get("data")}
</p>


<p>
Quantidade de pessoas:
${parametros.get("pessoas")}
</p>


<p>
Mensagem:
${parametros.get("mensagem")}
</p>

`;