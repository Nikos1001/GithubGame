

let p;
let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  c = new Camera();
  p = new Polygon(c);
  p.verts.push(new Polar(TAU / 8, 1, 0)); // 0
  p.verts.push(new Polar(3 * TAU / 8, 1, 0)); // 1
  p.verts.push(new Polar(5 * TAU / 8, 1, 0)); // 2
  p.verts.push(new Polar(7 * TAU / 8, 1, 0)); // 3
  p.addConnection(0, 1, SEG_TYPES.line);
  p.addConnection(1, 2, SEG_TYPES.line);
  p.addConnection(2, 3, SEG_TYPES.line);
  p.addConnection(0, 3, SEG_TYPES.line);
}

function draw() {
  background(0);
  p.display();
}
