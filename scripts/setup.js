

let c, m;
let p;

let input;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  input = new InputManager();

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

  console.log(input.keys);
}

function keyPressed() {
  input.keyPressed();
}

function keyReleased() {
  input.keyReleased();
}
