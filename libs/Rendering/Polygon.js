
class Polygon {

  constructor() {
    this.verts = [];
  }

  display() {
    noFill();
    stroke(255);
    strokeWeight(2);
    beginShape();
    for(let i = 0; i < this.verts.length; i ++) {
      let v = this.verts[i].toVec();
      vertex(v.x + width / 2, v.y + height / 2);
    }
    endShape();
  }

}
