

let c, m;
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  c = new Camera();
  p = new Player(new Vec(0, 0, 0), 1);
  m = new Meteor(new Vec(2, 0, 0), 1);
}

function draw() {
  background(0);
  p.display(c);
  m.display(c);

  m.update(deltaTime / 1000.0);
  p.update(deltaTime / 1000.0);
}
