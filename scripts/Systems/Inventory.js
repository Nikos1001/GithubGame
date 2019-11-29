

class Inventory {

  constructor(unit) {
    this.unit = unit;
    this.world = unit.world;
    this.items = [];
    for(let i = 0; i < 9; i ++) {
      this.items.push(new Item());
    }
    this.selectedSlot = 0;
  }

  addItem(item) {
    for(let i = 0; i < 9; i ++) {
      let id = this.items[i].getID();
      if(id.length == 0) {
        this.items[i] = item;
        return;
      }
    }
  }

  use() {
    this.items[this.selectedSlot].use();
  }

  update() {
    if(this.unit.active) {
      for(let i = 1; i < 10; i ++) {
        if(this.world.input.keys[i.toString()]) {
          this.selectedSlot = i - 1;
        }
      }
    }
  }

}
