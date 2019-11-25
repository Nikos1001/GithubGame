
let world;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  world = new World();
  world.addBody(new Player(new Vec(0, 0, 0), 1));

  const nAsteroids = 1000;
  for(let i = 0; i < nAsteroids; i ++) {
    let angle = i * TAU / nAsteroids;
    let radius = random(100, 110);
    world.addBody(new Meteor(new Vec(cos(angle) * radius, sin(angle) * radius, 0), random(0.25, 1.5)));
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
