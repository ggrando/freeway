let yCarros = [40, 97, 150];
let xCarros = [600, 600, 600];
let velocidadeCarros = [2, 2.5, 3, 2];

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i += 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  for (let i = 0; i < velocidadeCarros.length; i += 1) {
    xCarros[i] -= velocidadeCarros[i];
    // Mesma coisa que xCarros = xCarros - velocidadeCarros
  }
}

function voltaPosicaoInicialDocarro() {
  for (let i = 0; i < imagemCarros.length; i += 1) {
    if (passouTodaAtela(xCarros[i])) {
      xCarros[i] = 600
    }
  }
}

function passouTodaAtela(xCarros) {
  return xCarros < - 50;
}