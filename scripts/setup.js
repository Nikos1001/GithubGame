
let world;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  world = new World();
  world.addBody(new Player(new Vec(0, 0, 0), 1));
  for(let i = 0; i < 100; i ++) {
    world.addBody(new Meteor(new Vec(random(-20, 20), random(-20, 20), 0), random(0.25, 1.5)));
  }
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
