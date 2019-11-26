

class SolarSystem extends WorldGenerator {

  constructor() {
    super();
  }

  createWorld() {

    let world = new World();

    const r = 500;
    world.cams[0].loc = new Vec(r, 0, 0);

    const nAsteroids = 1250;
    for(let i = 0; i < nAsteroids; i ++) {
      let angle = i * TAU / nAsteroids;
      let radius;
      if(random(100) < 80) {
        radius = random(r - 20, r + 20);
      } else {
        radius = random(r - 60, r + 60);
      }
      world.addBody(new Meteor(new Vec(cos(angle) * radius, sin(angle) * radius, 0), random(0.25, 1.5)));
    }
    world.addBody(new Sun(new Vec(0, 0, 0), 50, 50));

    world.addBody(new Player(new Vec(r, 0, 0), 1));


    return world;

  }

}
