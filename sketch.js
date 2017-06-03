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

  textSize(16);
textAlign(RIGHT);
text("POWER OF LOVE", 50, 30);
textAlign(CENTER);


  if(mouseIsPressed == true){
    rojo = random (0,255);
    verde = random (0,255);
    azul = random (0,255);
  }
  else{
    rojo = 255;
    verde = 255;
    azul = 255;
  }
