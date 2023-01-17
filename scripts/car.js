let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2, 2.5, 3, 2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < velocidadeCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
    // Mesma coisa que xCarros = xCarros - velocidadeCarros
  }
}

function voltaPosicaoInicialDocarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaAtela(xCarros[i])) {
      xCarros[i] = 600
    }
  }
}

function passouTodaAtela(xCarros) {
  return xCarros < - 50;
}

function aumentaVelocidade() {
  for (i = 0; i < velocidadeCarros.length; i++) {
    velocidadeCarros[i]++;
  }
}

function reduzVelocidade() {
  for (i = 0; i < velocidadeCarros.length; i++) {
    if (velocidadeCarros[i] < 3) {
      return false;
    } else {
      velocidadeCarros[i]--;
    }
  }
}

function redefinirValores() {
  velocidadeCarros = [2, 2.5, 3, 2, 5, 3.3, 2.3];
}