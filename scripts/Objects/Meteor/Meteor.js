

class Meteor extends Body {

  constructor(loc, mass) {
    super(loc, mass);
    this.p = new Polygon();
    this.a = 0;

    let v = 8;

    let angles = [];
    for(let i = 0; i < v; i ++) {
      angles.push(i * TAU / v + random(-0.2, 0.2));
    }
    angles.sort(function(a, b){return a-b});
    let id = 0;
    for(let i = 0; i < v; i ++) {
      this.p.addVert(new Polar(angles[i], 1, 0));
      let offset = random(0, 0.2);
      let rOffset = random(0.075, 0.25);
      if(i < v - 1) {
        this.p.addVert(new Polar(angles[i + 1] - offset, 1 + rOffset, 0));
        this.p.addVert(new Polar(angles[i + 1] + offset, 1 - rOffset, 0));
      } else {
        this.p.addVert(new Polar(angles[0] - offset, 1 + rOffset, 0));
        this.p.addVert(new Polar(angles[0] + offset, 1 - rOffset, 0));
      }
      if(id < v * 3 - 2) {
        this.p.addConnection(id, id + 1, SEG_TYPES.line);
        this.p.addConnection(id + 1, id + 2, SEG_TYPES.line);
      }
      id += 3;
    }
    this.p.addConnection(0, id - 1, SEG_TYPES.line);
    this.p.setTransform(TAU / 2, this.mass / 2);

    this.radius = mass / 2;
  }

  update(delta, input) {
    super.update(delta, input);
    this.p.setTransform(this.a, this.mass / 2);
    this.a += TAU * delta / 4;
    this.p.setLoc(this.loc);
  }

  display(cam) {
    this.p.display(cam)
  }

  addForce(force) {
    super.addForce(force);
  }

  getType() {
    return 'meteor';
  }

  getColor() {
    return [125, 125, 125];
  }

  isDead() {
    return false;
  }

}
