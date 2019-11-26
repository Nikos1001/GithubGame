

class Body {

  constructor(loc, mass) {
    this.mass = mass;
    this.loc = loc.clone();
    this.vel = new Vec(0, 0, 0);
    this.acc = new Vec(0, 0, 0);

    this.radius = 1;
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

  collide(body) {
    let diff = this.loc.clone();
    diff.sub(body.loc);

    if(diff.mag() < this.radius + body.radius) {
      // Collision!
      diff.norm();
      diff.mult(this.radius + body.radius);
      this.loc = body.loc.clone().add(diff);

      diff.norm();
      this.vel = diff.clone();

      this.onCollide(body);
    }
  }

  getType() {
    return 'body';
  }

  onCollide(b) {

  }

}
