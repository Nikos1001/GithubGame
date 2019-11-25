

class InputManager {

  constructor() {
      this.keys = {};
  }

  keyPressed() {
    this.keys[key] = true;
  }

  keyReleased() {
    this.keys[key] = false;
  }

}
