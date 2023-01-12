//carregando o p5
document.write('<script src="p5.js" type="text\/javascript"><\/script>');

let imagemDaEstrada;
let imagemDoAtor;

//Gerenciamento do Ator

let yAtor = 366;

//Gerenciamento do carro
let imagemDoCarro;
let xCarro = 600;
let yCarro = 40;


function preload() {
  imagemDaEstrada = loadImage("./img/estrada.png")
  imagemDoAtor = loadImage("./img/ator-1.png")
  imagemDoCarro = loadImage("./img/carro-1.png")
}



function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor() {
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

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

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {

    //Acrescentei esse if para limitar o tamanho da tela
    if (yAtor == 3) {
    } else {
      yAtor -= 3;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {

    //Acrescentei esse if para limitar o tamanho da tela
    if (yAtor == 366) {
    } else {
      yAtor += 3;
    }
  }
}