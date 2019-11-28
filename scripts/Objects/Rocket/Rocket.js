


class Rocket extends Body {

  constructor(loc, mass, fleet) {
    super(loc, mass);
    this.p = new Polygon();
    this.p.addVert(new Polar(0, 0.33, 0)); // 0
    this.p.addVert(new Polar(3 * TAU / 8, 0.33, 0)); // 1
    this.p.addVert(new Polar(TAU / 2, 0.16, 0)); // 2
    this.p.addVert(new Polar(5 * TAU / 8, 0.33, 0)); // 3

    this.p.addConnection(0, 1, SEG_TYPES.line);
    this.p.addConnection(1, 2, SEG_TYPES.line);
    this.p.addConnection(2, 3, SEG_TYPES.line);
    this.p.addConnection(3, 0, SEG_TYPES.line);

    this.fire = new Polygon();
    this.fire.addVert(new Polar(3.5 * TAU / 8, 0.24, 0)); // 0
    this.fire.addVert(new Polar(TAU / 2, 0.33, 0)); // 1
    this.fire.addVert(new Polar(4.5 * TAU / 8, 0.24, 0)); // 2

    this.fire.addConnection(0, 1, SEG_TYPES.red);
    this.fire.addConnection(1, 2, SEG_TYPES.red);

    this.angle = 3 * TAU / 4;
    this.thrusting = false;


    this.thrustForce = 1.5;
    this.rotateSpeed = 1;
    this.decelaration = 1;
    this.maxSpeed = 5;

    this.radius = 0.16;

    this.health = 5;

    this.alwaysRender = true;
    this.active = true;

    this.fleet = fleet;
  }

  update(delta, input) {

    super.update(delta, input);
    this.p.setLoc(this.loc);
    this.fire.setLoc(this.loc);
    this.p.setTransform(this.angle, 1);
    this.fire.setTransform(this.angle, 1);

  }

  thrust(delta) {
    let thrust = new Polar(this.angle, 1, 0);
    thrust = thrust.toVec();
    thrust.mult(delta * this.thrustForce);
    this.addForce(thrust);

    if(this.vel.mag() > this.maxSpeed) {
      this.vel.norm();
      this.vel.mult(this.maxSpeed);
    }

    this.thursting = true;
  }

  decelerate(delta) {
    this.vel.mult(1 - delta * this.decelaration);
  }

  turn(delta, dir) {
    this.angle += dir * TAU * delta * this.rotateSpeed;
  }

  addForce(force) {
    super.addForce(force);
  }

  onCollide(b) {
    this.health -= b.mass;
  }

  getBody() {
    return 'rocket';
  }

  getColor() {
    return [255, 255, 255];
  }

  display(cam) {
    this.p.display(cam);
    if(this.thrusting) {
      this.fire.display(cam);
    }

    this.thrusting = false;
  }

  isDead() {
    return this.health < 0;
  }

}
