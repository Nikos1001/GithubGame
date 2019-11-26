

class Player extends Rocket {

  constructor(loc, mass) {
    super(loc, mass);
  }

  update(delta, input) {
    if(super.update(delta, input)) return true;

    if(input.keys['a']) {
      this.turn(delta, -1);
    }
    if(input.keys['d']) {
      this.turn(delta, 1);
    }
    if(input.keys['w'] && !input.keys['s']) {
      this.thrust(delta);
      this.thrusting = true;
    }
    if(input.keys['s'] && !input.keys['w']) {
      this.decelerate(delta);
    }

  }

  display(cam) {
    super.display(cam);

    cam.loc = this.loc.clone();

  }

  addForce(force) {
    super.addForce(force);
  }

  getBody() {
    return 'rocket';
  }

  onCollide(b) {
    super.onCollide(b);
  }

  getColor() {
    return [255, 0, 0];
  }

  turn(delta, dir) {
    super.turn(delta, dir);
  }

  thrust(delta) {
    super.thrust(delta);
  }

  decelerate(delta) {
    super.decelerate(delta);
  }

}
