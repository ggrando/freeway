

let yCarros = [40, 97, 150];
let xCarros = [600, 600, 600];
let velocidadeCarros = [2, 2.5, 3, 2]

function mostraCarro() {
  image(imagemDoCarro, xCarros[0], yCarros[0], 50, 40);
  image(imagemDoCarro2, xCarros[1], yCarros[1], 50, 40);
  image(imagemDoCarro3, xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro() {
  xCarros[0] -= velocidadeCarros[0];
  xCarros[1] -= velocidadeCarros[1];
  xCarros[2] -= velocidadeCarros[2];
  // Mesma coisa que xCarros = xCarros - velocidadeCarros
}

function voltaPosicaoInicialDocarro() {
  if (xCarros[0] < -50) { xCarros[0] = 600 }
  if (xCarros[1] < -50) { xCarros[1] = 600 }
  if (xCarros[2] < -50) { xCarros[2] = 600 }
}