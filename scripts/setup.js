
let world;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  world = new World();
  world.cams[0].loc = new Vec(205, 0, 0);

  const nAsteroids = 1000;
  for(let i = 0; i < nAsteroids; i ++) {
    let angle = i * TAU / nAsteroids;
    let radius;
    if(random(100) < 80) {
      radius = random(180, 220);
    } else {
      radius = random(140, 260);
    }
    world.addBody(new Meteor(new Vec(cos(angle) * radius, sin(angle) * radius, 0), random(0.25, 1.5)));
  }
  world.addBody(new Player(new Vec(205, 0, 0), 1));

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
