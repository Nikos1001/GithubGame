////..

class SolarSystem extends WorldGenerator {

  constructor() {
    super();
  }

  createWorld() {

    let world = new World();

    const r = 750;
    world.cams[0].loc = new Vec(r, 0, 0);

    const nAsteroids = 2000;
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
    let playerFleet;

    let p = new Player(new Vec(r - 1.5, -1.5, 0), 1, playerFleet, world);
    let p1 = new Player(new Vec(r - 0.75, -1.5, 0), 1, playerFleet, world);
    let b = new Base(new Vec(r, 0, 0), [255, 0, 0], playerFleet);
    world.addBody(b);
    world.addBody(p);
    world.addBody(p1);

    world.ui.elements.push(new Minimap(world));
    let vitals = new Vitals(p);
    world.ui.elements.push(vitals);
    world.ui.elements.push(new Debug(world));

    playerFleet = new PlayerFleet(world, vitals);
    playerFleet.units.push(p);
    playerFleet.units.push(b);
    playerFleet.units.push(p1);

    world.teams.push(playerFleet);

    return world;

  }

}
