



class Sun extends Planet {

  constructor(loc, mass, radius) {
    super(loc, mass, radius);

  }

  update(delta, input) {
    super.update(delta, input);
  }

  addForce(force) {

  }

  display(cam) {
    super.display(cam);
  }

  getType() {
    return 'planet';
  }

  getColor() {
    return [255, 125, 0];
  }

}
