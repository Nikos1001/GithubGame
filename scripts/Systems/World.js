

class World {

  constructor() {
    this.bodies = [];
    this.cams = [new Camera()];
    this.input = new InputManager();
    this.activeCam = 0;
    this.minimap = new Minimap(this);

    this.minX = 0; this.minY = 0;
    this.maxX = 0; this.maxY = 0;

  }

  render() {
    background(0, 0, 0, 180);
    let cam = this.cams[this.activeCam];
    for(let i = 0; i < this.bodies.length; i ++) {
      let body = this.bodies[i];
      let diff = cam.loc.clone();
      diff.sub(body.loc);

      if(diff.mag() < 2 * cam.unitsWide) {
        body.display(cam);
      }
    }

    this.minimap.render();
  }

  update() {
    let newBodies = [];
    this.minX = 9999999999; this.minY = 9999999999;
    this.maxX = -9999999999; this.maxY = -9999999999;
    for(let i = 0; i < this.bodies.length; i ++) {
      let body = this.bodies[i];

      let x = body.loc.x;
      let y = body.loc.y;

      if(x > this.maxX) this.maxX = x;
      if(y > this.maxY) this.maxY = y;

      if(x < this.minX) this.minX = x;
      if(y < this.minY) this.minY = y;

      if(!body.update(deltaTime / 1000.0, this.input)) {
        newBodies.push(body);
      }
    }


    this.bodies = newBodies;


    for(let i = 0; i < this.bodies.length; i ++) {
      let b1 = this.bodies[i];
      for(let j = 0; j < this.bodies.length; j ++) {
        if(i != j) {
          let b2 = this.bodies[j];
          b1.collide(b2);
        }
      }
    }
  }

  keyPressed() {
    this.input.keyPressed();
  }

  keyReleased() {
    this.input.keyReleased();
  }

  addBody(body) {
    this.bodies.push(body);
  }

}
