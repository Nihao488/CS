let rnd = (l,u) => Math.random()*(u-l)+l;
let envs = ["contact", "egypt", "checkerboard", "forest", "goaland", "yavapai", "goldmine", "threetowers", "poison", "arches", "tron", "japan", "dream", "volcano", "starry", "osiris", "moon"]
let cars = [], peashooters = [], cursor, camera;

window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  for(let i = 0; i < 4; i++){
    cars.push(new Car(-10, 0, -5 + (i * 3)));
  }


  for(let i = 0; i < 4; i++) {
    peashooters.push(new Peashooter(-8, 0.5, -5 + (i * 3))); // Z changed from -100 to -40
  }

  loop();
}

function loop(){
  
  peashooters.forEach(ps => {
    ps.peas = ps.peas.filter(pea => pea.obj.parentNode);
    ps.peas.forEach(pea => pea.update());
  });

  cars.forEach(car => {
    // Check only horizontal (X/Z) distance
    const carPos = car.obj.object3D.position;
    const camPos = camera.object3D.position;
    const dx = carPos.x - camPos.x;
    const dz = carPos.z - camPos.z;
    const horizontalDistance = Math.sqrt(dx*dx + dz*dz);
    
    if(horizontalDistance < 2) car.moving = true;
    else car.moving = false;  // Add this to stop when moving away
    
    car.update();
  });

  window.requestAnimationFrame( loop );
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}