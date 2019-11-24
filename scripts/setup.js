

let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  p = new Polygon();
  console.log(p);
}

function draw() {
  background(0);
  p.display();
}
