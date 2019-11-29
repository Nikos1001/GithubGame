

class Gun extends Item {

  constructor(rocket) {
    super();
    this.rocket = rocket;
    this.world = rocket.world;
    this.lastShot = 0;
  }

  drawIcon(scl) {
    stroke(255);
    strokeWeight(3);
    noFill();
    beginShape();
    vertex(0.8 * scl, 0.2 * scl);
    vertex(0.3 * scl, 0.8 * scl);
    vertex(0.2 * scl, 0.7 * scl);
    vertex(0.8 * scl, 0.2 * scl);
    endShape();
    beginShape();
    vertex(0.5 * scl, 0.3 * scl);
    vertex(0.7 * scl, 0.5 * scl);
    endShape();
    beginShape();
    vertex(0.4 * scl, 0.4 * scl);
    vertex(0.6 * scl, 0.6 * scl);
    endShape();
    stroke(255, 125, 0);
    ellipse(0.8 * scl, 0.2 * scl, 0.1 * scl, 0.1 * scl);
  }

  getID() {
    return 'gun';
  }

  use() {
    if(millis() - this.lastShot > 500) {
      let bullet = new Bullet(this.rocket.loc.clone(), this.rocket.angle);
      this.world.addBody(bullet);
      this.lastShot = millis();
    }
  }

}
