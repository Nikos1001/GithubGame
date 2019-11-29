

class Bullet extends Body {

  constructor(loc, angle) {
    let pos = loc.clone();
    pos.add(new Vec(cos(angle), sin(angle), 0));
    super(pos, 1);

    this.angle = angle;

    this.speed = 10;

    this.p = new Polygon();
    this.p.addVert(new Polar(angle, 0.5, 0));
    this.p.addVert(new Polar(angle, -0.5, 0));
    this.p.addVert(new Polar(angle + 0.001, -0.5, 0));
    this.p.addConnection(0, 1, SEG_TYPES.red);

    this.vel = new Vec(this.speed * cos(angle), this.speed * sin(angle), 0);
    this.radius = 0.1;
    this.alwaysRender = true;

    this.lifetime = 2;
  }

  display(cam) {
    this.p.display(cam);
  }

  update(delta, input) {
    super.update(delta, input);
    this.p.setLoc(this.loc.clone());
    this.vel = new Vec(this.speed * cos(this.angle), this.speed * sin(this.angle), 0);

    this.lifetime -= delta;
  }

  isDead() {
    return this.lifetime < 0;
  }

  getType() {
    return 'bullet';
  }

  getColor() {
    return [0, 0, 0];
  }

}
