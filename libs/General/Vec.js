

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

    return this;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
    this.z += vec.z;
    return this;
  }

  clone() {
    return new Vec(this.x, this.y, this.z);
  }

  mag() {
    return sqrt(this.x * this.x + this.y * this.y);
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

  clone() {
    return new Polar(this.a, this.r, this.z);
  }

}
