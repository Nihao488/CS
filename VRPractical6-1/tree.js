class Tree{
  constructor(x,z){
      this.x = x;
      this.z = z;
      this.r = 0;
      this.dr = -0.5;

      let offset = 2;
      this.obj = document.createElement("a-box");
      this.obj.setAttribute("height",10);
      this.obj.setAttribute("width",2);
      this.obj.setAttribute("depth",2);
      this.obj.setAttribute("opacity",0);
      let trunk = document.createElement("a-cylinder");
      trunk.setAttribute("position",{x:0,y:0 + offset,z:0})
      trunk.setAttribute("height",3)
      trunk.setAttribute("radius",0.75)
      trunk.setAttribute("color","brown")
      this.obj.append(trunk)
      let size = 2;
      for(let t = 1; t < 7; t++){ 
        let leaves = document.createElement("a-cone");
        leaves.setAttribute("position",{x:0,y:0.5 + t + offset,z:0})
        leaves.setAttribute("height",1.5)
        leaves.setAttribute("radius-bottom",size)
        leaves.setAttribute("radius-top",0.1)
        leaves.setAttribute("color","green");
        size -= 0.3;
        this.obj.append(leaves)
      }
      /* Challenge
         An attribute has been identified for the raycaster in the cursor. 
         Add the appropriate attribute in order to interact with this object.
      */
      /* Challenge 
         Make the tree fall down when the user clicks on the tree.
         Hint: Don't forget to adjust falldown() to incorporate the flag
      */
      this.obj.addEventListener("click", ()=>{
        this.fall = true;
      });

      this.obj.setAttribute("position",{x:this.x,y:-1.5,z:this.z});
      scene.append(this.obj);
  }
  falldown(){
      // In addition to check for the flag ensure the "rotation" angle is greater then -60

      if(this.fall && this. r > -60){
        this.r += this.dr;
        this.obj.setAttribute("rotation",{x:this.r,y:0,z:0});
      }
    
  }
}