

class Player extends Rocket {

  constructor(loc, mass, fleet, world) {
    super(loc, mass, fleet, world);
  }

  update(delta, input) {
    if(super.update(delta, input)) return true;

    if(this.active) {
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
      if(input.keys[' ']) {
        this.inventory.use();
      }
    }

  }

  display(cam) {
    if(this.active) {
      cam.loc = this.loc.clone();
    }
    super.display(cam);
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

  isDead() {
    return super.isDead();
  }

}
