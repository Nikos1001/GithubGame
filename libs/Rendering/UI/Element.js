

class Element {

  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.align = ALIGN.center;
  }

  render() {
    pushMatrix();

    switch(this.align) {
      case ALIGN.center:
        translate((width - this.w) / 2, (height - this.h) / 2);
        break;
      case ALIGN.bottom_left:
        translate(0, height - this.h);
        break;
    }

    fill(0);
    noStroke();
    rect(0, 0, this.w, this.h);
  }

}

const ALIGN = {
  center: 0,
  bottom_left: 1
}
