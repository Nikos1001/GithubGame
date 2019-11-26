

class Minimap extends Element {

  constructor(world) {
    super(200, 200);
    this.world = world;
    this.align = ALIGN.bottom_left;
  }

  render() {
    super.render();
    for(let i = 0; i < this.world.bodies.length; i ++) {
      let b = this.world.bodies[i];
      let color = b.getColor();
      fill(color[0], color[1], color[2]);
      let loc = b.loc.clone();

      let x = map(loc.x, world.minX - 100, world.maxX + 100, 0, 200);
      let y = map(loc.y, world.minY - 100, world.maxY + 100, 0, 200);
      let scl = map(b.radius, world.minX - 100, world.maxX - 100, 0, 3);

      ellipse(x, y, scl, scl);
    }
    stroke(255);
    strokeWeight(3);
    line(0, 0, 200, 0);
    line(200, 0, 200, 200);
    pop();
  }

}
