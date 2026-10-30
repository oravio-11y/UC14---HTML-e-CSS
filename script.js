
// =====================================
// CAPTURA DOS ELEMENTOS HTML
// =====================================

const formulario = document.getElementById("formularioNotas");

const nomeInput = document.getElementById("nome");

const nota1Input = document.getElementById("nota1");
const nota2Input = document.getElementById("nota2");
const nota3Input = document.getElementById("nota3");

const mensagemErro = document.getElementById("mensagemErro");

const resultado = document.getElementById("resultado");

const nomeResultado = document.getElementById("nomeResultado");
const mediaResultado = document.getElementById("mediaResultado");
const seloSituacao = document.getElementById("seloSituacao");
const mensagemResultado = document.getElementById("mensagemResultado");

const camposNotas = [
    nota1Input,
    nota2Input,
    nota3Input
];


// =====================================
// FUNÇÃO PARA EXIBIR ERROS
// =====================================

function mostrarErro(mensagem, campo = null) {

    mensagemErro.textContent = mensagem;

    mensagemErro.hidden = false;

    resultado.hidden = true;

    if (campo) {
        campo.focus();
    }
}


// =====================================
// FUNÇÃO PARA ESCONDER ERROS
// =====================================

function limparErro() {

    mensagemErro.textContent = "";

    mensagemErro.hidden = true;

}


// =====================================
// EVENTO DE CÁLCULO
// =====================================

formulario.addEventListener("submit", function(evento) {

    // Impede o recarregamento da página
    evento.preventDefault();

    limparErro();

    // Captura o nome
    const nome = nomeInput.value.trim();

    // Verifica se o nome está vazio
    if (nome === "") {

        mostrarErro(
            "Por favor, informe o nome do estudante.",
            nomeInput
        );

        return;
    }


    // =================================
    // VALIDAÇÃO DAS TRÊS NOTAS
    // =================================

    const notas = [];

    for (let indice = 0; indice < camposNotas.length; indice++) {

        const campo = camposNotas[indice];

        const valorDigitado = campo.value.trim();

        // Verifica se o campo está vazio
        if (valorDigitado === "") {

            mostrarErro(
                `A nota ${indice + 1} não foi preenchida.`,
                campo
            );

            return;
        }

        // Aceita vírgula ou ponto como separador decimal
        const nota = Number(
            valorDigitado.replace(",", ".")
        );

        // Verifica se o valor é um número válido
        if (!Number.isFinite(nota)) {

            mostrarErro(
                `A nota ${indice + 1} precisa ser um número válido.`,
                campo
            );

            return;
        }

        // Verifica se a nota está entre 0 e 10
        if (nota < 0 || nota > 10) {

            mostrarErro(
                `A nota ${indice + 1} deve estar entre 0 e 10.`,
                campo
            );

            return;
        }

        notas.push(nota);

    }


    // =================================
    // CÁLCULO DA MÉDIA
    // =================================

    const soma = notas.reduce(function(total, nota) {

        return total + nota;

    }, 0);

    const media = soma / 3;


    // =================================
    // CLASSIFICAÇÃO DO ESTUDANTE
    // =================================

    let situacao = "";
    let classeResultado = "";
    let descricao = "";

    if (media >= 7) {

        situacao = "Aprovado";
        classeResultado = "aprovado";

        descricao = "Parabéns! O estudante alcançou a média necessária para aprovação.";

    } else if (media >= 5) {

        situacao = "Recuperação";
        classeResultado = "recuperacao";

        descricao = "O estudante está em recuperação e precisa melhorar seu desempenho.";

    } else {

        situacao = "Reprovado";
        classeResultado = "reprovado";

        descricao = "O estudante não alcançou a média mínima estabelecida.";

    }


    // =================================
    // EXIBIÇÃO DOS RESULTADOS
    // =================================

    nomeResultado.textContent = nome;

    mediaResultado.textContent = media.toLocaleString(
        "pt-BR",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );

    seloSituacao.textContent = situacao;

    mensagemResultado.textContent = descricao;

    // Atualiza a aparência conforme a situação
    resultado.className = "resultado";

    resultado.classList.add(classeResultado);

    // Mostra a área do resultado
    resultado.hidden = false;

});


// =====================================
// EVENTO PARA LIMPAR A CONSULTA
// =====================================

formulario.addEventListener("reset", function() {

    limparErro();

    resultado.hidden = true;

    resultado.className = "resultado";

    nomeResultado.textContent = "";

    mediaResultado.textContent = "";

    seloSituacao.textContent = "";

    mensagemResultado.textContent = "";

});
