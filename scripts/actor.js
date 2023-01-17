let yAtor = 366;
let xAtor = 100;
let colisao = true;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
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

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    //parametros collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      colidiu();
    }
  }
}

function colidiu() {
  for (i = yAtor; yAtor < 366; i += 1) {
    yAtor = i;
  }
}

