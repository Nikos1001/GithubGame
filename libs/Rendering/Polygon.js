
class Polygon {

  constructor(cam) {
    this.verts = [];
    this.localVerts = [];
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
    this.seg.push(new Segment(this.localVerts[index0], this.localVerts[index1], type));
  }

  addVert(v) {
    this.verts.push(v.clone());
    this.localVerts.push(v.clone());
  }

  setTransform(a, r) {
    for(let i = 0; i < this.verts.length; i ++) {
      this.localVerts[i].a = this.verts[i].a;
      this.localVerts[i].r = this.verts[i].r;
      this.localVerts[i].z = this.verts[i].z;

      this.localVerts[i].r *= r;
      this.localVerts[i] = this.localVerts[i].rotate(a);
    }
  }

}
