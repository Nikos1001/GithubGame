

class Planet extends Body {

  constructor(loc, mass, radius) {
    super(loc, mass);
    this.p = new Polygon();
    const pts = 50;
    this.radius = radius;
    for(let a = 0; a < TAU; a += TAU / pts) {
      let dist = radius;
      this.p.addVert(new Polar(a, dist, 0));
    }
    for(let i = 0; i < pts; i ++) {
      this.p.addConnection(i, (i + 1) % (pts), SEG_TYPES.red);
    }

    this.alwaysRender = true;
  }

  update(delta, input) {
    super.update(delta, input);
  }

  addForce(force) {

  }

  display(cam) {
    this.p.display(cam);
  }

  getType() {
    return 'planet';
  }

  getColor() {
    return [255, 255, 255];
  }

}
