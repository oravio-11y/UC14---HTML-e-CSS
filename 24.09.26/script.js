let TotalTarefas = 0;
let TotalConcluidas = 0;

function adicionarTarefa() {

   let nome = document.getElementById("tarefa").value;
   
   let material = document.getElementById("materia").value;
   
   let prioridade = document.getElementById("prioridade").value;

   let mensagem = document.getElementById("mensagem");
}
   if (nome === "" || material === "" || prioridade === "") {

    mensagem.textContent = "preencha todos os campos.";
    mensagem.style.color = "red";
    return;
   }

   if (nome === ""|| materia === ""|| prioridade === "") {
    mensagem.textContent = "preencha todos os campos.";
    mensagem.style.color = "red";
}

let duplicada = tarefas.some (function(tarefa) {
    return tarefa.nome.toLowerCase() === nome.toLowerCase();
});

if (duplicada) {
    mensagem.textContent = "essa tarefa já foi cadastrada.";
    mensagem.style.color = "red";


let NovaTarefa = {
    nome: nome,
    materia: material,
    prioridade: prioridade,
    concluida: false
};
tarefas.push(NovaTarefa);
totalTarefas++;
mensagem.textContent = "Tarefa cadastrada com sucesso!";
mensagem.style.color = "green";


atualiuzarContadores();
exibirTarefas();
limparCampos();

}


function exibirTarefas() {
   
   let lista = document.getElementById("listaTarefas");
   lista.textContent = "";

   tarefas.forEach(function(tarefa, indice) {
      let card = document.createElement("div");
      card.className = "tarefa";

      let titulo = document.createElement("h3");

      titulo.textContent = tarefa.nome;
      let materia = document.createElement("p");

      materia.textContent = "Matéria: " + tarefa.materia;

      let prioridade = document.createElement("p");
      prioridade.textContent = "Prioridade: " + tarefa.prioridade;

      let status = document.createElement("p");

      status.textContent = tarefa.concluida
      ? "Status: Concluída"
      : "Status: Pendente";

      card.appendChild(titulo);
      card.appendChild(materia);
      card.appendChild(prioridade);
      card.appendChild(status);

      destacarPrioridade(card, tarefa.prioridade);

      if (tarefa.concluida) {
         card.classList.add("concluida");
      }



      if (tarefa.concluida) {
         let botao = document.createElement("button");
         botao.textContent = "concluir tarefa";

         botao.onclick = function() {
            concluirTarefa(indice);
         };
         card.appendChild(botao);
      }
      lista.appendChild(card);
    });
}

function destacarPrioridade(card, prioridade) {
   if (prioridade === "alta") {
      card.style.borderLeft = "5px solid red";
   } else if (prioridade === "media") {
      card.style.borderLeft = "5px solid orange";
   } else if (prioridade === "baixa") {
      card.style.borderLeft = "5px solid green";
   }    



function concluirTarefa(indice) {
    let tarefa = tarefas[indice];
    if (tarefa.concluida) {
        return;
    }

    tarefa.concluida = true;
    totalConcluidas++;
}

let mensagem = document.getElementById("mensagem");
mensagem.textContent = "Tarefa concluída com sucesso!";
mensagem.style.color = "green";

atualizarContadores();
exibirTarefas();

}

function atualizarContadores() {
    document.getElementById("contador").textContent = 
    "tarefas cadastradas: " + totalTarefas;
document.getElementById("contadorConcluidas").textContent =
    "tarefas concluídas: " + totalConcluidas;
}

function limparCampos() {
    document.getElementById("tarefa").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("prioridade").value = "";
}

function alterarModo() {
    document.body.classList.toggle("modo-escuro");
}