const infosDoCurso = document.querySelector("#infos-do-curso");

const cursos = [

{
    subject:"CSE",
    number:110,
    title:"Introdução a Programação",
    credits:2,
    certificate:"Web and Computer Programming",
    description:"Introdução aos fundamentos da programação utilizando JavaScript.",
    technology:["JavaScript"],
    completed:true
},

{
    subject:"WDD",
    number:130,
    title:"Fundamentos da Web",
    credits:2,
    certificate:"Web and Computer Programming",
    description:"Fundamentos do desenvolvimento web utilizando HTML e CSS.",
    technology:["HTML","CSS"],
    completed:true
},

{
    subject:"CSE",
    number:111,
    title:"Programação com Funções",
    credits:2,
    certificate:"Web and Computer Programming",
    description:"Funções, lógica de programação e resolução de problemas.",
    technology:["JavaScript"],
    completed:true
},

{
    subject:"CSE",
    number:210,
    title:"Programação com Classes",
    credits:2,
    certificate:"Web and Computer Programming",
    description:"Programação orientada a objetos utilizando classes.",
    technology:["C#",".NET"],
    completed:false
},

{
    subject:"WDD",
    number:131,
    title:"Fundamentos de Desenvolvimento Web Dinâmico",
    credits:2,
    certificate:"Web and Computer Programming",
    description:"Desenvolvimento de páginas dinâmicas utilizando HTML, CSS e JavaScript.",
    technology:["HTML","CSS","JavaScript"],
    completed:true
},

{
    subject:"WDD",
    number:231,
    title:"Desenvolvimento Front-end para Web I",
    credits:2,
    certificate:"Web and Computer Programming",
    description:"Desenvolvimento Front-end com HTML, CSS, JavaScript, APIs, animações e design responsivo.",
    technology:["HTML","CSS","JavaScript"],
    completed:false
}

];

const courseContainer=document.querySelector("#cursos");
const totalCredits=document.querySelector("#totalCreditos");
const filterButtons=document.querySelectorAll(".filtro");

function exibirCursos(lista){

    courseContainer.innerHTML="";

    lista.forEach(curso=>{

        const card=document.createElement("article");

        card.className="curso";

        if(curso.completed){
            card.classList.add("concluido");
        }

        const status=curso.completed
        ?"✓ Concluído"
        :"Em andamento / a concluir";

        card.innerHTML=`
            <span>${curso.subject} ${curso.number}</span>
            <span class="status">${status}</span>
        `;

        card.title=`${curso.title}`;

        card.addEventListener("click",()=>{
            exibirInfosDoCurso(curso);
        });

        courseContainer.appendChild(card);

    });

    totalCredits.textContent=
    lista.reduce((total,curso)=>total+curso.credits,0);

}

function aplicarFiltro(filtro){

    const cursosFiltrados=
    filtro==="todos"
    ?cursos
    :cursos.filter(curso=>curso.subject===filtro);

    exibirCursos(cursosFiltrados);

    filterButtons.forEach(botao=>{

        const ativo=botao.dataset.filtro===filtro;

        botao.classList.toggle("ativo",ativo);

        botao.setAttribute("aria-pressed",ativo);

    });

}

filterButtons.forEach(botao=>{

    botao.addEventListener("click",()=>{

        aplicarFiltro(botao.dataset.filtro);

    });

});

function exibirInfosDoCurso(curso){

    infosDoCurso.innerHTML=`

    <button id="fecharModal">❌</button>

    <h2>${curso.subject} ${curso.number}</h2>

    <h3>${curso.title}</h3>

    <p><strong>Créditos:</strong> ${curso.credits}</p>

    <p><strong>Certificado:</strong> ${curso.certificate}</p>

    <p><strong>Descrição:</strong> ${curso.description}</p>

    <p><strong>Tecnologias:</strong> ${curso.technology.join(", ")}</p>

    `;

    infosDoCurso.showModal();

    document
        .querySelector("#fecharModal")
        .addEventListener("click",()=>infosDoCurso.close());

}

infosDoCurso.addEventListener("click",(event)=>{

    const rect=infosDoCurso.getBoundingClientRect();

    if(
        event.clientX<rect.left||
        event.clientX>rect.right||
        event.clientY<rect.top||
        event.clientY>rect.bottom
    ){
        infosDoCurso.close();
    }

});

exibirCursos(cursos);