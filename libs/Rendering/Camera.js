

class Camera {

  constructor() {
    this.unitsWide = 10;
  }

  worldToScreen(vec) {
    let v = vec.toVec() // clone to avoid problems & to convert polar -> cartesian

    // step 1: scale
    let pxPerUnit = width / this.unitsWide;
    v.mult(pxPerUnit);

    v.x += width / 2;
    v.y += height / 2;

    return v;
  }

}
