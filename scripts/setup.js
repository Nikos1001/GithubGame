

let m;
let c;

const v = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  c = new Camera();

  m = new Meteor(new Vec(0, 0, 0), 1);
  m.addForce(new Vec(1, 0, 0));
}

function draw() {
  background(0);
  m.display(c);
  m.update(deltaTime / 1000.0);
}
