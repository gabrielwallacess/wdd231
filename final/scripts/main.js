const weather = document.querySelector("#weather");



async function buscarClima(){


if(!weather) return;


try{


const cidade = "Buenos Aires";


const resposta = await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=c2004a5c634f1e6e5169741579799788&units=metric&lang=pt_br`

);



if(!resposta.ok){

throw new Error("Erro na API");

}



const dados = await resposta.json();



weather.innerHTML = `


<h3>
${dados.name}
</h3>


<p>
Temperatura:
${dados.main.temp}°C
</p>


<p>
${dados.weather[0].description}
</p>


<p>
Umidade:
${dados.main.humidity}%
</p>


`;



localStorage.setItem(
"ultimaCidade",
dados.name
);



}

catch(error){


weather.innerHTML =
"Clima indisponível no momento.";


console.error(error);


}



}



buscarClima();