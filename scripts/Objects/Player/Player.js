

class Player extends Body {

  constructor(loc, mass) {
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

    this.angle = 0;
    this.thrusting = false;


    this.thrustForce = 1.5;
    this.rotateSpeed = 1;
    this.decelaration = 1;
    this.maxSpeed = 3;

    this.radius = 0.16;

    this.health = 5;
  }

  update(delta, input) {
    super.update(delta, input);
    this.p.setLoc(this.loc);
    this.fire.setLoc(this.loc);
    this.p.setTransform(this.angle, 1);
    this.fire.setTransform(this.angle, 1);

    if(input.keys['a']) {
      this.angle -= TAU * delta * this.rotateSpeed;
    }
    if(input.keys['d']) {
      this.angle += TAU * delta * this.rotateSpeed;
    }
    if(input.keys['w'] && !input.keys['s']) {
      let thrust = new Polar(this.angle, 1, 0);
      thrust = thrust.toVec();
      thrust.mult(delta * this.thrustForce);
      if(this.vel.mag() < this.maxSpeed) {
        this.addForce(thrust);
      }
    }
    if(input.keys['s'] && !input.keys['w']) {
      this.vel.mult(1 - delta * this.decelaration);
    }

    this.thrusting = input.keys['w'] && !input.keys['s'];

    console.log(this.health);

    if(this.health < 0) {
      return true;
    }
  }

  display(cam) {
    this.p.display(cam);
    if(this.thrusting) {
      this.fire.display(cam);
    }

    cam.loc = this.loc.clone();
  }

  addForce(force) {
    super.addForce(force);
  }

  getBody() {
    return 'rocket';
  }

  onCollide(b) {
    this.health -= b.mass;
  }

}
