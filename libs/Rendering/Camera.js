

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

    // step 2: parallax
    v.x /= (v.z + 1);
    v.y /= (v.z + 1);

    // step 3: scale
    let pxPerUnit = width / this.unitsWide;
    v.mult(pxPerUnit);

    // step 4: center
    v.x += width / 2;
    v.y += height / 2;

    return v;
  }

}
