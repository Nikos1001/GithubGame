
class Polygon {

  constructor(cam) {
    this.verts = [];
    this.seg = [];
    this.cam = cam;
  }

  display() {
    noFill();
    stroke(255);
    strokeWeight(2);
    for(let i = 0; i < this.seg.length; i ++) {
      this.seg[i].render(this.cam);
    }
  }

  addConnection(index0, index1, type) {
    this.seg.push(new Segment(this.verts[index0], this.verts[index1], type));
  }

}
