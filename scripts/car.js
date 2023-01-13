let yCarros = [40, 97, 150];
let xCarros = [600, 600, 600];
let velocidadeCarros = [2, 2.5, 3, 2]

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i += 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
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