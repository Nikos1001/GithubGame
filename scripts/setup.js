

let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  p = new Polygon();
  p.verts.push(new Polar(TAU / 8, 100, 0));
  p.verts.push(new Polar(3 * TAU / 8, 100, 0));
  p.verts.push(new Polar(5 * TAU / 8, 100, 0));
  p.verts.push(new Polar(7 * TAU / 8, 100, 0));
}

function draw() {
  background(0);
  p.display();
}
