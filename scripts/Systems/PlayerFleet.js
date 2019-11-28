

class PlayerFleet extends Fleet {

  constructor(world, vitalsUI) {

    super(world);
    this.activeUnit = 0;
    this.vitalsUI = vitalsUI;

  }

  update() {
    if(this.units.length > 0) {

      let newUnits = [];
      for(let i = 0; i < this.units.length; i ++) {
        let unit = this.units[i];
        unit.active = false;
        if(!unit.isDead()) {
          newUnits.push(unit);
        }
      }
      this.units = newUnits;

      if(this.activeUnit >= this.units.length) {
        this.activeUnit = this.units.length - 1;
      }

      this.units[this.activeUnit].active = true;
      this.vitalsUI.rocket = this.units[this.activeUnit];

      for(let i = 1; i < 11; i ++) {
        if(this.world.input.keys[i.toString()]) {
          this.activeUnit = i - 1;
        }
      }
    }
  }

}
