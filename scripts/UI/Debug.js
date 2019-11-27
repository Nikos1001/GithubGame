

class Debug extends Element {

  constructor(world) {
    super(400, 200);
    this.align = ALIGN.top_left;
    this.world = world;

    this.xPrev = false;
  }

  render() {
    if(this.active) {
      super.render();
      stroke(255);
      strokeWeight(3);
      line(0, 0, 0, this.h);
      line(0, this.h, this.w, this.h);

      noStroke();
      fill(255);
      textSize(20)
      text("FPS: " + round(1 / (deltaTime / 1000.0)), 10, 20);
      text("Active Bodies: " + this.world.nActiveBodies, 10, 40);

      pop();
    }

    if(this.world.input.keys['x'] && !this.xPrev) {
      this.active = !this.active;
    }
    this.xPrev = this.world.input.keys['x'];
  }

}
