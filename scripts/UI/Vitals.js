

class Vitals extends Element {

  constructor(rocket) {
    super(200, 35);
    this.rocket = rocket;
    this.align = ALIGN.top_right;
  }

  render() {

    super.render();
    strokeWeight(3);
    stroke(255, 125, 0);
    noFill();
    beginShape();
    vertex(0, 20);
    vertex(this.rocket.health * 40 - 5, 20);
    vertex(this.rocket.health * 40, 25);
    vertex(this.rocket.health * 40, 30);
    vertex(this.rocket.health * 40 - 5, 35);
    vertex(0, 35);
    endShape();

    pop();

  }

}
