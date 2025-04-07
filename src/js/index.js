// Seleciona todos os botões de personagem e os personagens correspondentes
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Função para remover a seleção atual de um grupo de elementos
function removerSelecao(classe) {
  const elementoSelecionado = document.querySelector(`.${classe}.selecionado`);
  if (elementoSelecionado) {
    elementoSelecionado.classList.remove("selecionado");
  }
}

// Função que lida com o clique no botão
function selecionarPersonagem(indice) {
  // OBJETIVO 1: Marcar o botão clicado como selecionado
  removerSelecao("botao"); // Remove seleção do botão anterior
  botoes[indice].classList.add("selecionado"); // Adiciona seleção no botão atual

  // OBJETIVO 2: Mostrar o personagem correspondente
  removerSelecao("personagem"); // Remove seleção do personagem anterior
  personagens[indice].classList.add("selecionado"); // Adiciona seleção no personagem atual
}

// Adiciona o evento de clique em cada botão
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => selecionarPersonagem(indice));
});
