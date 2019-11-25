

class Player extends Body {

  constructor(loc, mass) {
    super(loc, mass);
    this.p = new Polygon();
    this.p.addVert(new Polar(TAU / 4, 0.33, 0)); // 0
    this.p.addVert(new Polar(5 * TAU / 8, 0.33, 0)); // 1
    this.p.addVert(new Polar(3 * TAU / 4, 0.16, 0)); // 2
    this.p.addVert(new Polar(7 * TAU / 8, 0.33, 0)); // 3

    this.p.addConnection(0, 1, SEG_TYPES.line);
    this.p.addConnection(1, 2, SEG_TYPES.line);
    this.p.addConnection(2, 3, SEG_TYPES.line);
    this.p.addConnection(3, 0, SEG_TYPES.line);
  }

  update(delta) {
    super.update(delta);
    this.p.setLoc(this.loc);
  }

  display(cam) {
    this.p.display(cam);
  }

  addForce(force) {
    super.addForce(force);
  }

}
