let rnd = (l,u) => Math.random()*(u-l)+l;
let envs = ["contact", "egypt", "checkerboard", "forest", "goaland", "yavapai", "goldmine", "threetowers", "poison", "arches", "tron", "japan", "dream", "volcano", "starry", "osiris", "moon"]
let cars = [], peashooters = [], cursor, camera, health = 100;
// Add at the top with other variables
let gameOver = false;
let door;

window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  health_text = document.querySelector("#health");
  door = document.querySelector('[position="-11.500 1.500 1"]');

  // Create one car at random position from original five locations
  const zPositions = [-4, -2, 0, 2, 4];
  const randomZ = zPositions[Math.floor(Math.random() * zPositions.length)];
  cars.push(new Car(-10, 0, randomZ));  // Original x=-10, y=0

  // Rest of the code remains same...
  for(let i = 0; i < 5; i++) {
    peashooters.push(new Peashooter(-8, 0.5, -4 + (i * 2)));
  }

  loop();
}

function loop(){
  if(gameOver) return;
  
  const doorPos = door.object3D.position;
  const camPos = camera.object3D.position;
  const dx = doorPos.x - camPos.x;
  const dy = doorPos.y - camPos.y;
  const dz = doorPos.z - camPos.z;
  const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

  if(dist < 2) {
    gameOver = true;
    alert('VICTORY! You reached the door!');
    return;
  }

  peashooters.forEach(ps => {
    ps.peas = ps.peas.filter(pea => pea.obj.parentNode);
    ps.peas.forEach(pea => pea.update());
  });

  peashooters.forEach(ps => {
    for (let i = ps.peas.length - 1; i >= 0; i--) {
      const pea = ps.peas[i];
      const peaPos = pea.obj.object3D.position;
      const camPos = camera.object3D.position;
      const dx = peaPos.x - camPos.x;
      const dy = peaPos.y - camPos.y;
      const dz = peaPos.z - camPos.z;
      const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
      
      if (dist < 1) { // Collision threshold
        health = Math.max(health - 10, 0);
        health_text.setAttribute('value', `Health: ${health}`);
        pea.obj.parentNode?.removeChild(pea.obj);
        ps.peas.splice(i, 1);
        
        if (health <= 0) {
          gameOver = true;
          alert('You Die! Game Over!');
          return;
        }
      }
    }
  });

  cars.forEach(car => {
    // Check only horizontal (X/Z) distance
    const carPos = car.obj.object3D.position;
    const camPos = camera.object3D.position;
    const dx = carPos.x - camPos.x;
    const dz = carPos.z - camPos.z;
    const horizontalDistance = Math.sqrt(dx*dx + dz*dz);
    
    if(horizontalDistance < 1.5) { // Collision threshold
      health = Math.max(health - 50, 0); // Big damage
      health_text.setAttribute('value', `Health: ${health}`);
      
      if(health <= 0) {
        gameOver = true;
        alert('GAME OVER - You were crushed by a car!');
        return;
      }
    }
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