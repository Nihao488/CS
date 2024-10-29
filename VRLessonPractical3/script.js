
let scene, car, pokemonball, rocket, dude, sun;
window.onload = function(){
  scene = document.querySelector("a-scene");

  car = document.querySelector("#car");
  pokemonball = document.querySelector("#pokemonball");
  rocket = document.querySelector("#rocket");
  dude = document.querySelector("#dude");
  sun = document.querySelector("#sun");

  car.x = 0;
  pokemonball.r = 0;
  rocket.y = 0;
  dude.s = 1;
  dude.ds = 0.1;
  sun.opacity = 0;
  sun.do = 0.01;

  loop();
}

function loop(){
  car.x -= 0.05;
  pokemonball.r ++;
  rocket.y += 0.01;
  dude.s += dude.ds;
  sun.opacity += sun.do;

  if(dude.s > 5){
    dude.ds =-0.05;
  }else if(dude.s < 1){
    dude.ds = 0.05;
  }

  if(sun.opacity > 1){
    sun.do = -0.01;
  }else if(sun.opacity < 0){
    sun.do = 0.01;
  }
  
  if(car.x < -15){
	  car.x = 0; 
  }
  if(rocket.y > 15){
	  rocket.y = 0;
  }


  car.setAttribute("position", {x:car.x, y:0, z:0});
  pokemonball.setAttribute("rotation", {x:pokemonball.r, y:0, z:0});
  rocket.setAttribute("position", {x:0, y:rocket.y, z:0});
  dude.setAttribute("scale", {x:1, y:dude.s, z:1});
  sun.setAttribute("opacity", sun.opacity);


  window.requestAnimationFrame(loop);
}
