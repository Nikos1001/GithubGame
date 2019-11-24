

class Vec {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toVec() {
    return new Vec(this.x, this.y, this.z);
  }

  mult(mag) {
    this.x *= mag;
    this.y *= mag;
    // we leave out z cause its mostly used for parallaxing
  }

}

class Polar {

  constructor(a, r, z) {
    this.a = a;
    this.r = r;
    this.z = z;
  }

  toVec() {
    return new Vec(cos(this.a) * this.r, sin(this.a) * this.r, this.z);
  }

  rotate(angle) {
    return new Polar(this.a + angle, this.r, this.z);
  }

  mult(mag) {
    this.r *= mag;
  }

}
