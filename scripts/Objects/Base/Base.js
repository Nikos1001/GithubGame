


class Base extends Body {

  constructor(loc, color, fleet) {
    super(loc, 10);
    this.color = color;

    this.fleet = fleet;

    this.inventory = new Inventory(this);

    this.p = new Polygon();

    const pts = 16;

    let i = 0;
    for(let a = 0; a < TAU; a += TAU / pts) {
      this.p.addVert(new Polar(a, 0.5, 0));
      if(i > 0) {
        this.p.addConnection(i, i - 1, SEG_TYPES.line);
      }
      i ++;
    }
    this.p.addConnection(0, pts - 1, SEG_TYPES.line);

    this.p.addVert(new Polar(TAU / 8, 2 * sqrt(2), 0));
    this.p.addVert(new Polar(3 * TAU / 8, 2 * sqrt(2), 0));
    this.p.addVert(new Polar(5 * TAU / 8, 2 * sqrt(2), 0));
    this.p.addVert(new Polar(7 * TAU / 8, 2 * sqrt(2), 0));

    this.p.addVert(new Polar(TAU / 4, 2, 0));
    this.p.addVert(new Polar(TAU / 2, 2, 0));
    this.p.addVert(new Polar(3 * TAU / 4, 2, 0));
    this.p.addVert(new Polar(0, 2, 0));

    this.p.addConnection(pts + 4, pts / 4, SEG_TYPES.grey);
    this.p.addConnection(pts + 5, pts / 2, SEG_TYPES.grey);
    this.p.addConnection(pts + 6, 3 * pts / 4, SEG_TYPES.grey);
    this.p.addConnection(pts + 7, 0, SEG_TYPES.grey);

    this.p.addConnection(pts, pts + 1, SEG_TYPES.grey);
    this.p.addConnection(pts + 1, pts + 2, SEG_TYPES.grey);
    this.p.addConnection(pts + 2, pts + 3, SEG_TYPES.grey);
    this.p.addConnection(pts, pts + 3, SEG_TYPES.grey);


    this.active = false;
    this.alwaysRender = true;

    this.radius = 0.5;
  }

  update(delta, input) {
    super.update(delta, input);
    this.p.setLoc(this.loc.clone());
  }

  display(cam) {
    if(this.active) {
      cam.loc = this.loc.clone();
    }
    this.p.display(cam);
  }

  getType() {
    return 'base';
  }

  getColor() {
    return this.color;
  }

}
