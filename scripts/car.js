let xCarro = 600;
let yCarro = 40;

function mostraCarro() {
  image(imagemDoCarro, xCarro, yCarro, 50, 40);
}

function movimentaCarro() {
  xCarro -= 2;
  //mesma coisa que xCarro = xCarro - 2
  //Parte Adicionada por mim (remover se necessário nas prox aulas). 
  //Objetivo, fazer com o que o carro apareça de novo
  if (xCarro == -50) { xCarro = 600 }
  //FIm
}