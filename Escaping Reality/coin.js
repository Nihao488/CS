class Coin{
    constructor(x,y,z){
      this.visible = true;
      this.obj = document.createElement("a-torus");
      this.obj.setAttribute("color","gold");
      this.obj.setAttribute("radius",0.2)
      this.obj.setAttribute("radius-tubular",0.02)
      this.obj.setAttribute("position", {x, y, z})
      scene.append(this.obj);
      
    }
    spin(){
      this.obj.object3D.rotation.y += 0.02;
      this.obj.object3D.position.y += Math.sin(this.obj.object3D.rotation.y) / 300;
    }
    collect(){
      this.visible = false;
      this.obj.setAttribute("opacity",0);
    }
  }