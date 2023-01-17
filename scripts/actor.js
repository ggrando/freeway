let yAtor = 366;
let xAtor = 85;
let colisao = true;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;

  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }

  }
}
function podeSeMover() {
  return yAtor < 366
}


function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    //parametros collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      somColisao.play();
      atorInicio();
      if (pontosMaiorQueZero()) {
        meusPontos--;
      }
    }
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0
}

function atorInicio() {
  for (i = yAtor; yAtor < 366; i += 1) {
    yAtor = i;
  }
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  //text é uma funcao do P5, ela deve receber O que vai ser exibido, x, y
  text(meusPontos, width / 5, 27)
}

function marcaPonto() {
  if (yAtor < 15) {
    somPonto.play();
    meusPontos += 1;
    atorInicio()
  }
}