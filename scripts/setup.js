

let p;
let c;

const v = 8;
let a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  c = new Camera();
  p = new Polygon(c);
  let angles = [];
  for(let i = 0; i < v; i ++) {
    angles.push(i * TAU / v + random(-0.2, 0.2));
  }
  angles.sort(function(a, b){return a-b});
  let id = 0;
  for(let i = 0; i < v; i ++) {
    p.addVert(new Polar(angles[i], 1, 0));
    let offset = random(0, 0.2);
    let rOffset = random(0.05, 0.15);
    if(i < v - 1) {
      p.addVert(new Polar(angles[i + 1] - offset, 1 + rOffset, 0));
      p.addVert(new Polar(angles[i + 1] + offset, 1 - rOffset, 0));
    } else {
      p.addVert(new Polar(angles[0] - offset, 1 + rOffset, 0));
      p.addVert(new Polar(angles[0] + offset, 1 - rOffset, 0));
    }
    p.addConnection(id, id + 1, SEG_TYPES.line);
    p.addConnection(id + 1, id + 2, SEG_TYPES.line);
    id += 3;
  }
  p.addConnection(0, id, SEG_TYPES.line);
  p.setTransform(TAU / 2, 0.5);
}

function draw() {
  background(0);
  p.display();
  p.setTransform(a, 0.5);
  a += 0.01;
}
