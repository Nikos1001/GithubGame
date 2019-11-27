

class Element {

  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.align = ALIGN.center;
  }

  render() {
    push();

    switch(this.align) {
      case ALIGN.center:
        translate((width - this.w) / 2, (height - this.h) / 2);
        break;
      case ALIGN.bottom_left:
        translate(0, height - this.h);
        break;
      case ALIGN.top_right:
        translate(0, 0);
        break;
      case ALIGN.top_left:
        translate(width - this.w, 0);
        break;
    }

    fill(0);
    noStroke();
    rect(0, 0, this.w, this.h);
  }

}

const ALIGN = {
  center: 0,
  bottom_left: 1,
  top_right: 2,
  top_left: 3
}
