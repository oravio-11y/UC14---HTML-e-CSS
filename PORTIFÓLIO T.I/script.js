/*
Usei o ChatGPT como apoio para entender e organizar algumas partes
do JavaScript. Estou revisando o código para aprender como funciona.
*/


// Saudação conforme o horário
function obterSaudacao(hora) {
    if (hora >= 5 && hora < 12) {
        return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

const saudacao = document.getElementById("saudacao");
const horaAtual = new Date().getHours();

saudacao.textContent =
    obterSaudacao(horaAtual) + "! Seja bem-vindo ao meu portfólio.";


// Menu do celular
const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", function () {
    menu.classList.toggle("aberto");

    const aberto = menu.classList.contains("aberto");

    menuBotao.setAttribute("aria-expanded", aberto);
    menuBotao.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuBotao.textContent = aberto ? "✕" : "☰";
});

const linksMenu = menu.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        menuBotao.setAttribute("aria-expanded", "false");
        menuBotao.setAttribute("aria-label", "Abrir menu");
        menuBotao.textContent = "☰";
    });
});


// Modo claro e escuro
const temaBotao = document.getElementById("temaBotao");

function atualizarTema() {
    const escuro = document.body.classList.contains("escuro");

    temaBotao.textContent = escuro ? "☀" : "☾";
    temaBotao.setAttribute(
        "aria-label",
        escuro ? "Ativar modo claro" : "Ativar modo escuro"
    );
}

function salvarTema(tema) {
    try {
        localStorage.setItem("tema", tema);
    } catch (erro) {
        // O site continua funcionando mesmo se não conseguir salvar.
    }
}

try {
    if (localStorage.getItem("tema") === "escuro") {
        document.body.classList.add("escuro");
    }
} catch (erro) {
    // Se o armazenamento estiver bloqueado, começa no tema claro.
}

atualizarTema();

temaBotao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    const temaAtual = document.body.classList.contains("escuro")
        ? "escuro"
        : "claro";

    salvarTema(temaAtual);
    atualizarTema();
});


// Capas dos projetos
function criarCapa(titulo, fundo, detalhe) {
    const desenho = `
        <svg xmlns="http://www.w3.org/2000/svg"
            width="600" height="300" viewBox="0 0 600 300">
            <rect width="600" height="300" fill="${fundo}"/>
            <circle cx="520" cy="30" r="130"
                fill="${detalhe}" opacity="0.3"/>
            <rect x="35" y="45" width="75" height="6"
                rx="3" fill="${detalhe}"/>
            <text x="35" y="145" fill="${detalhe}"
                font-family="Arial" font-size="22">PROJETO ESCOLAR</text>
            <text x="35" y="200" fill="#ffffff"
                font-family="Arial" font-size="32"
                font-weight="bold">${titulo}</text>
        </svg>`;

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(desenho);
}


// Projetos que coloquei no portfólio
const projetos = [
    {
        titulo: "Cine Lumière",
        descricao: "Página de catálogo de filmes que trabalhei nas aulas. Pratiquei a organização dos cards e o visual do site.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagem: criarCapa("Cine Lumière", "#17152b", "#a18bff")
    },
    {
        titulo: "Clínica Vida Saudável",
        descricao: "Página de uma clínica, com informações sobre serviços e profissionais. Foi uma atividade para praticar HTML e CSS.",
        tecnologias: ["HTML", "CSS"],
        imagem: criarCapa("Clínica Vida Saudável", "#103c3e", "#70dec2")
    },
    {
        titulo: "La Mejor - Turismo",
        descricao: "Página sobre turismo e passeios locais, com menu e conteúdo organizado para apresentar os lugares.",
        tecnologias: ["HTML", "CSS"],
        imagem: criarCapa("La Mejor", "#173b5a", "#7bd8ff")
    }
];


// Mostra os cards na tela
function mostrarProjetos(lista) {
    const listaProjetos = document.getElementById("listaProjetos");

    listaProjetos.replaceChildren();

    if (lista.length === 0) {
        const aviso = document.createElement("p");
        aviso.className = "sem-projeto";
        aviso.textContent = "Não achei projetos com essa tecnologia.";
        listaProjetos.appendChild(aviso);
        return;
    }

    lista.forEach(function (projeto) {
        const cartao = document.createElement("article");
        cartao.className = "projeto";

        const imagem = document.createElement("img");
        imagem.className = "capa";
        imagem.src = projeto.imagem;
        imagem.alt = "Capa ilustrada do projeto " + projeto.titulo;

        const info = document.createElement("div");
        info.className = "projeto-info";

        const titulo = document.createElement("h3");
        titulo.textContent = projeto.titulo;

        const descricao = document.createElement("p");
        descricao.textContent = projeto.descricao;

        const etiquetas = document.createElement("ul");
        etiquetas.className = "etiquetas";
        etiquetas.setAttribute("aria-label", "Tecnologias usadas");

        projeto.tecnologias.forEach(function (tecnologia) {
            const item = document.createElement("li");
            item.textContent = tecnologia;
            etiquetas.appendChild(item);
        });

        const observacao = document.createElement("p");
        observacao.textContent = "Link do projeto: em breve.";

        info.append(titulo, descricao, etiquetas, observacao);
        cartao.append(imagem, info);
        listaProjetos.appendChild(cartao);
    });
}

mostrarProjetos(projetos);


// Filtro por linguagem
const filtro = document.getElementById("filtroTecnologia");

filtro.addEventListener("change", function () {
    const tecnologia = filtro.value;

    if (tecnologia === "") {
        mostrarProjetos(projetos);
        return;
    }

    const resultado = projetos.filter(function (projeto) {
        return projeto.tecnologias.includes(tecnologia);
    });

    mostrarProjetos(resultado);
});


// Formulário de contato
const formulario = document.getElementById("formContato");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const aceito = document.getElementById("aceito");
const resultadoForm = document.getElementById("resultadoForm");

function mostrarErro(campo, idErro, texto) {
    document.getElementById(idErro).textContent = texto;

    if (texto !== "") {
        campo.setAttribute("aria-invalid", "true");
    } else {
        campo.removeAttribute("aria-invalid");
    }
}

function validarFormulario() {
    let valido = true;

    mostrarErro(nome, "erroNome", "");
    mostrarErro(email, "erroEmail", "");
    mostrarErro(mensagem, "erroMensagem", "");
    mostrarErro(aceito, "erroAceito", "");

    if (nome.value.trim() === "") {
        mostrarErro(nome, "erroNome", "Preencha seu nome.");
        valido = false;
    }

    const endereco = email.value.trim();

    if (endereco === "") {
        mostrarErro(email, "erroEmail", "Preencha seu e-mail.");
        valido = false;
    } else if (
        !endereco.includes("@") ||
        !endereco.includes(".") ||
        endereco.indexOf("@") > endereco.lastIndexOf(".") ||
        endereco.includes(" ")
    ) {
        mostrarErro(email, "erroEmail", "Digite um e-mail válido.");
        valido = false;
    }

    if (mensagem.value.trim().length < 20) {
        mostrarErro(
            mensagem,
            "erroMensagem",
            "Escreva pelo menos 20 caracteres."
        );
        valido = false;
    }

    if (!aceito.checked) {
        mostrarErro(
            aceito,
            "erroAceito",
            "Marque a caixa de consentimento."
        );
        valido = false;
    }

    return valido;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    resultadoForm.textContent = "";

    if (validarFormulario()) {
        resultadoForm.textContent =
            "Pronto! Os campos estão corretos, mas a mensagem não foi enviada.";

        formulario.reset();

        mostrarErro(nome, "erroNome", "");
        mostrarErro(email, "erroEmail", "");
        mostrarErro(mensagem, "erroMensagem", "");
        mostrarErro(aceito, "erroAceito", "");
    } else {
        const primeiroErro = formulario.querySelector(
            '[aria-invalid="true"]'
        );

        if (primeiroErro) {
            primeiroErro.focus();
        }
    }
});


// Coloca o ano atual no rodapé
document.getElementById("ano").textContent =
    new Date().getFullYear();


// Mostra o botão de voltar ao topo quando rolar a página
const voltarTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        voltarTopo.classList.add("visivel");
    } else {
        voltarTopo.classList.remove("visivel");
    }
});