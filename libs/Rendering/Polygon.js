
class Polygon {

  constructor() {
    this.verts = [];
    this.localVerts = [];
    this.seg = [];
    this.loc = new Vec(0, 0, 0);
  }

  display(cam) {
    noFill();
    stroke(255);
    strokeWeight(2);
    for(let i = 0; i < this.seg.length; i ++) {
      this.seg[i].render(cam, this.loc);
    }
  }

  addConnection(index0, index1, type) {
    this.seg.push(new Segment(this.localVerts[index0], this.localVerts[index1], type));
  }

  addVert(v) {
    this.verts.push(v.clone());
    this.localVerts.push(v.clone());
  }

  setTransform(a, r) {
    for(let i = 0; i < this.verts.length; i ++) {
      this.localVerts[i].a = this.verts[i].a + a;
      this.localVerts[i].r = this.verts[i].r * r;
      this.localVerts[i].z = this.verts[i].z;
    }
  }

  setLoc(loc) {
    this.loc = loc.clone();
  }

}
