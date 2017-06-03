//Miguel Angel Rosas Reyes
//ejemplo
//Diego Rivera

//var x = 0; //declaración
var foto;

function preload() {
  foto = loadImage ("gaby.jpg");

function setup() {
  createCanvas (800,500); //se crea el canvas
}

function draw() {
  image (foto,0,0);

}
