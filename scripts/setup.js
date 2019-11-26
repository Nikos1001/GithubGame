
let world;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  let gen = new SolarSystem();
  world = gen.createWorld();

}

function draw() {
  world.render();
  world.update();
}

function keyPressed() {
  world.keyPressed();
}

function keyReleased() {
  world.keyReleased();
}
