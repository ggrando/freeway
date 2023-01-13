let yAtor = 366;
let xAtor = 100;

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