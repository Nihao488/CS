let rnd = (l,u) => Math.random()*(u-l)+l;
let envs = ["contact", "egypt", "checkerboard", "forest", "goaland", "yavapai", "goldmine", "threetowers", "poison", "arches", "tron", "japan", "dream", "volcano", "starry", "osiris", "moon"]
let coins = [], peashooters = [], cursor, camera;

window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  for(let i = 0; i < 120; i++){
    let x = rnd(-200,200);;
    let z = rnd(-50,100);
    coins.push( new Coin(x,0.2,z) );
  }

  for(let i = 0; i < 5; i++) {
    peashooters.push(new Peashooter(-25 + (i * 8), 0.5, -40)); // Z changed from -100 to -40
  }

  loop();
}

function loop(){
  for(coin of coins){
    coin.spin();
    if(coin.visible && distance(coin.obj, camera) < 1){
      coin.collect();
      }
  }
  
  peashooters.forEach(ps => {
    ps.peas = ps.peas.filter(pea => pea.obj.parentNode);
    ps.peas.forEach(pea => pea.update());
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