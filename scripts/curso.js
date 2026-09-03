const cursos = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: false
    }
];

const courseContainer = document.querySelector("#cursos");
const totalCredits = document.querySelector("#totalCreditos");
const filterButtons = document.querySelectorAll(".filtro");

function exibirCursos(lista) {
    courseContainer.innerHTML = "";

    lista.forEach((curso) => {
        const card = document.createElement("article");
        card.className = "curso";

        if (curso.completed) {
            card.classList.add("concluido");
        }

        const status = curso.completed ? "✓ Concluído" : "Em andamento / a concluir";

        card.innerHTML = `
            <span>${curso.subject} ${curso.number}</span>
            <span class="status">${status}</span>
        `;

        card.title = `${curso.title} — ${curso.credits} créditos`;
        courseContainer.appendChild(card);
    });

    const creditos = lista.reduce((total, curso) => total + curso.credits, 0);
    totalCredits.textContent = creditos;
}

function aplicarFiltro(filtro) {
    const cursosFiltrados =
        filtro === "todos"
            ? cursos
            : cursos.filter((curso) => curso.subject === filtro);

    exibirCursos(cursosFiltrados);

    filterButtons.forEach((button) => {
        const ativo = button.dataset.filtro === filtro;
        button.classList.toggle("ativo", ativo);
        button.setAttribute("aria-pressed", String(ativo));
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => aplicarFiltro(button.dataset.filtro));
});

exibirCursos(cursos);
