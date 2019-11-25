

class World {

  constructor() {
    this.bodies = [];
    this.cams = [new Camera()];
    this.input = new InputManager();
    this.activeCam = 0;
  }

  render() {
    let cam = this.cams[this.activeCam];
    for(let i = 0; i < this.bodies.length; i ++) {
      let body = this.bodies[i];
      body.display(cam);
    }
  }

  update() {
    for(let i = 0; i < this.bodies.length; i ++) {
      let body = this.bodies[i];
      body.update(deltaTime / 1000.0, this.input);
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
