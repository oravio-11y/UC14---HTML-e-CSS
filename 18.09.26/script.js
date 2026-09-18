function mostrarNome() {
    let nome = document.getElementById("nome").Value;

    document.getElementById("resultado").textContent = "Olá, " + nome + "!";
}

let contador = 0;

function aumentar() {
    contador ++;
    document.getElementById("numero").textContent = contador;
}

function diminuir() {
    contador--;
    document.getElementById("numero").textContent = contador;
}