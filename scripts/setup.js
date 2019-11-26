
let world;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  world = new World();
  world.cams[0].loc = new Vec(205, 0, 0);
  world.addBody(new Player(new Vec(205, 0, 0), 1));

  const nAsteroids = 1250;
  for(let i = 0; i < nAsteroids; i ++) {
    let angle = i * TAU / nAsteroids;
    let radius = random(200, 210);
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
