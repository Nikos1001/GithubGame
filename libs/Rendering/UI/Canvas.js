

class UICanvas {

  constructor() {
    this.elements = [];
  }

  render() {
    for(let i = 0; i < this.elements.length; i ++) {
      this.elements[i].render();
    }
  }

}
