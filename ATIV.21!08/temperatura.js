const temperatura = document.getElementById("temperatura");
const pagina = document.getElementById("pagina");

const pagina = document.getElementById('pagina');
const saudacaoEl = document.getElementById('saudacao');
const temperaturaEl = document.getElementById('temperatura');

let turno = '';
let emojiStr = '';
let msg = '';

if (temperatura >= 0 && temperatura < 15) {
    turno = 'muitofrio';
    emojiStr = '🥶';
    msg = 'está muito frio!';
} 

else if (temperatura >= 15 && temperatura < 25) {
    turno = 'climaagradavel';
    emojiStr = '🌤️';
    msg = 'Um bom tempo!';
}

else if (temperatura >= 25 && temperatura < 35) {
    turno = 'muitocalor';
    emojiStr = '☀️';
    msg = 'Um bom calor!';
}

else if (temperatura >= 40) {
    turno = 'extremamente quente';
    emojiStr = '🔥';
    msg = 'Calor insuportável!';
}

pagina.classList.add(turno);
emojiEl.textContent = emojiStr;
saudacaoEl.textContent = msg;
temperaturaEl.textContent = `A temperatura atual é de ${temperatura}°C.`;

console.log(`turno: ${turno} | temperatura: ${temperatura}`);
