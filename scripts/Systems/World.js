

class World {

  constructor() {
    this.bodies = [];
    this.cams = [new Camera()];
    this.input = new InputManager();
    this.activeCam = 0;
  }

  render() {
    background(0, 0, 0, 180);
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
