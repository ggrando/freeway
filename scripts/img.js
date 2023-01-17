
let imagemDoCarro;
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro2;
let imagemDoCarro3;

let trilhaSonora;
let somColisao;
let somPonto;

function preload() {
  imagemDaEstrada = loadImage("../img/estrada.png");
  imagemDoAtor = loadImage("../img/ator-1.png");
  imagemDoCarro = loadImage("../img/carro-1.png");
  imagemDoCarro2 = loadImage("../img/carro-2.png");
  imagemDoCarro3 = loadImage("../img/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  trilhaSonora = loadSound("../sons/trilha.mp3");
  somColisao = loadSound("../sons/colidiu.mp3");
  somPonto = loadSound("../sons/pontos.wav")
}