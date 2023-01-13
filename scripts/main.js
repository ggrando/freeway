
document.write('<script src="scripts\/img\.js" type="text\/javascript"><\/script>');
document.write('<script src="scripts\/actor\.js" type="text\/javascript"><\/script>');
document.write('<script src="scripts\/car\.js" type="text\/javascript"><\/script>');
document.write('<script src="scripts\/p5\.js" type="text\/javascript"><\/script>');


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





