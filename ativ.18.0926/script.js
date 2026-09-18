var numero = 10;

function mostrarCidade() {

    var cidade = document.getElementById("cidade").value;

    document.getElementById("mensagem").textContent =
        "Você escolheu conhecer " + cidade + "!";

}

function destacarMensagem() {

    var mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.backgroundColor = "yellow";
    mensagem.style.fontSize = "25px";

}

function aumentar() {

    numero = numero + 1;

    document.getElementById("contador").textContent = numero;

}

function diminuir() {

    numero = numero - 1;

    document.getElementById("contador").textContent = numero;

}

document.getElementById("botaoCidade").onclick = mostrarCidade;

document.getElementById("botaoEstilo").onclick = destacarMensagem;

document.getElementById("mais").onclick = aumentar;

document.getElementById("menos").onclick = diminuir;
