

class World {

  constructor() {
    this.bodies = [];
    this.cams = [new Camera()];
    this.teams = [];
    this.input = new InputManager();
    this.activeCam = 0;
    this.ui = new UICanvas();

    this.minX = 0; this.minY = 0;
    this.maxX = 0; this.maxY = 0;

    this.nActiveBodies = 0;

    this.sectors = 20;

  }

  render() {
    background(0, 0, 0, 255);
    let cam = this.cams[this.activeCam];
    for(let i = 0; i < this.bodies.length; i ++) {
      let body = this.bodies[i];
      let diff = cam.loc.clone();
      diff.sub(body.loc);

      if(diff.mag() < 2 * cam.unitsWide || body.alwaysRender) {
        body.display(cam);
      }
    }

    this.ui.render();
  }

  update() {

    let sectorSize = (TAU / this.sectors);

    let camPolarLoc = this.cams[this.activeCam].loc.toPolar();
    let camSector = camPolarLoc.a / sectorSize;


    let newBodies = [];
    let activeBodies = [];
    this.minX = 9999999999; this.minY = 9999999999;
    this.maxX = -9999999999; this.maxY = -9999999999;

    for(let i = 0; i < this.bodies.length; i ++) {
      let body = this.bodies[i];

      let polarLoc = body.loc.toPolar();
      let sector = polarLoc.a / sectorSize;

      let x = body.loc.x;
      let y = body.loc.y;
      let r = body.radius;

      if(x > this.maxX) this.maxX = x;
      if(y > this.maxY) this.maxY = y;

      if(x < this.minX) this.minX = x;
      if(y < this.minY) this.minY = y;

      if(abs(sector - camSector) < sectorSize / 2 || body.alwaysRender) {
        if(!body.isDead()) {
          body.update(deltaTime / 1000.0, this.input);
          newBodies.push(body);
          activeBodies.push(body);
        }

      } else {
        newBodies.push(body);
      }
    }

    this.bodies = newBodies;
    this.nActiveBodies = activeBodies.length;

    for(let i = 0; i < activeBodies.length; i ++) {
      let b1 = activeBodies[i];
      for(let j = 0; j < activeBodies.length; j ++) {
        let b2 = activeBodies[j];
        if(i != j) {
          b1.collide(b2);
        }
      }
    }

    for(let i = 0; i < this.teams.length; i ++) {
      this.teams[i].update();
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
