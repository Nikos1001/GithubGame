
let world;
const r = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  world = new World();
  world.cams[0].loc = new Vec(r, 0, 0);

  const nAsteroids = 1250;
  for(let i = 0; i < nAsteroids; i ++) {
    let angle = i * TAU / nAsteroids;
    let radius;
    if(random(100) < 80) {
      radius = random(r - 20, r + 20);
    } else {
      radius = random(r - 60, r + 60);
    }
    world.addBody(new Meteor(new Vec(cos(angle) * radius, sin(angle) * radius, 0), random(0.25, 1.5)));
  }
  world.addBody(new Player(new Vec(r, 0, 0), 1));

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
