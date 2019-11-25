

class Camera {

  constructor() {
    this.unitsWide = 10;
    this.loc = new Vec(0, 0, 0);
  }

  worldToScreen(vec) {
    let v = vec.toVec() // clone to avoid problems & to convert polar -> cartesian

    // step 1: move
    v.x -= this.loc.x;
    v.y -= this.loc.y;

    // step 2: scale
    let pxPerUnit = width / this.unitsWide;
    v.mult(pxPerUnit);

    v.x += width / 2;
    v.y += height / 2;

    return v;
  }

}
