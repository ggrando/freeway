
document.write('<script src="scripts\/img\.js" type="text\/javascript"><\/script>');
document.write('<script src="scripts\/actor\.js" type="text\/javascript"><\/script>');
document.write('<script src="scripts\/car\.js" type="text\/javascript"><\/script>');
document.write('<script src="scripts\/p5\.js" type="text\/javascript"><\/script>');
document.write('<script src="scripts\/p5\.collide2d\.js" type="text\/javascript"><\/script>');
document.write('<script src="https\:\/\/cdnjs.cloudflare.com\/ajax\/libs\/p5\.js\/0\.9\.0\/addons\/p5\.sound\.js" type="text\/javascript"><\/script>')


let trilhaSonoraAtiva = true;

function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function gerenciaSom() {
  if (trilhaSonoraAtiva) {
    trilhaSonora.stop();
    trilhaSonoraAtiva = false;
    document.getElementById("gerenciaSom").value = 'Ativar som';
  } else {
    trilhaSonora.loop();
    trilhaSonoraAtiva = true;
    document.getElementById("gerenciaSom").value = 'Desativar Som';

  }
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDocarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}





