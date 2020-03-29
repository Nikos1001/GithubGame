//mouse of hous

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

  sub(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    this.z -= vec.z;
    return this;
  }

  clone() {
    return new Vec(this.x, this.y, this.z);
  }

  mag() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  norm() {
    this.mult(1 / this.mag());
  }

  static lerp(v1, v2, a) {
    return new Vec(v1.x * a + v2.x * (1 - a), v1.y * a + v2.y * (1 - a), v1.z * a + v2.z * (1 - a));
  }

  toPolar() {

    let r = this.mag();

    let a = atan(this.y / this.x);

    if(this.x < 0) {
      a += TAU / 2;
    } else {
      if(this.y < 0) {
        a += TAU;
      }
    }

    return new Polar(a, r, this.z);
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
