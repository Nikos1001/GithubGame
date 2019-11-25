
class Segment {

  constructor(v1, v2, type) {
    this.v1 = v1;
    this.v2 = v2;
    this.type = type;
  }

  render(cam, loc) {

    let v1 = this.v1.toVec();
    v1.add(loc);
    v1 = cam.worldToScreen(v1);
    let v2 = this.v2.toVec();
    v2.add(loc);
    v2 = cam.worldToScreen(v2);

    switch(this.type) {
      case SEG_TYPES.line:
        stroke(255);
        line(v1.x, v1.y, v2.x, v2.y);
        break;
      case SEG_TYPES.red:
        stroke(255, 125, 0);
        line(v1.x, v1.y, v2.x, v2.y);
        break;
    }

  }

}

const SEG_TYPES = {

  line: 0,
  grey: 1,
  dashed: 2,
  red: 3

}
