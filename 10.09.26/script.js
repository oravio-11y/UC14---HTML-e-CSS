console.log("Olá, Luiz! Bem-vindo!");
console.log("Olá, Gustavo! Bem-vindo!");
console.log("Olá, Cecilia! Bem-vindo!");

function darBoasvindas(nome) {
    console.log(`Olá, ${nome}! Bem-vindo!`);
}

darBoasvindas("Luiz");
darBoasvindas("Gustavo");
darBoasvindas("Cecilia");

function apresentar(nome, idade) {
    console.log(`meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar("Luiz", 25);
apresentar("Gustavo", 30);
apresentar("Cecilia", 28);

console.log("Olá, sou o Otávio!");

function Estudar(nome) {
    console.log(`Olá, ${nome}! Você está estudando!`);
}

Estudar("Otávio");

function somar(a, b) {
    return a + b;
}

somar(5, 3);
6
let resultado = somar(5,3);

console.log(resultado);

function mediaprova(a, b, c) {
    return (a + b ) / 2;
}

let mediafinal = mediaprova(7, 8, 9);{

    if (mediafinal >= 7) {
        alert("Parabéns! Você foi aprovado!");
    }else {
        alert("Infelizmente você foi reprovado!");
    }
}

