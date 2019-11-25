

class Body {

  constructor(loc, mass) {
    this.mass = mass;
    this.loc = loc.clone();
    this.vel = new Vec(0, 0, 0);
    this.acc = new Vec(0, 0, 0);
  }

  update(delta, input) {
    this.vel.add(this.acc);
    this.loc.add(this.vel.clone().mult(delta));
    this.acc.mult(0);
  }

  addForce(force) {
    this.acc.add(force.clone().mult(1 / this.mass));
  }

  display(cam) {

  }

}
