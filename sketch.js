//Miguel Angel Rosas Reyes
//ejemplo
//Diego Rivera

//var x = 0; //declaración
var rojo;
var verde;
var azul;

function setup() {
  createCanvas (800,500); //se crea el canvas
}

function draw() {
  frameRate (20);
  rojo = random (0,255);
  verde = random (0,255);
  azul = random (0,255);

  background (255,0,0); //se colorea el canvas
  fill (rojo, verde, azul); //se colorea los elementos
  triangle(30, 75, 58, 20, 86, 75);
  //ellipse(mouseX,mouseY,200,200); //para que el elemento siga al mouse
  ellipse(300,150,200,200);
  ellipse(500,150,200,200);
  //x = x + 2;
}
