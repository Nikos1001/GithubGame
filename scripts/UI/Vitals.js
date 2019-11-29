

class Vitals extends Element {

  constructor(rocket) {
    super(width, 55);
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

    stroke(255);
    line(this.rocket.maxHealth * 40 + 20, 0, this.rocket.maxHealth * 40 + 20, 55);

    push();
    translate(this.rocket.maxHealth * 40 + 40, 5);
    for(let i = 0; i < 9; i ++) {
      if(this.rocket.inventory.selectedSlot == i) {
        stroke(255, 125, 0);
        strokeWeight(4);
      }
      rect(i * 55, 0, 45, 45);
      strokeWeight(3);
      stroke(255);
      push();
      translate(i * 55, 0);
      this.rocket.inventory.items[i].drawIcon(45);
      pop();
    }
    pop();

    pop();

  }

}
