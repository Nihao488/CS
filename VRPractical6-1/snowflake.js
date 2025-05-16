class Snowflake{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -rnd(6,10) / 100;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.2);
    this.obj.setAttribute("opacity",0.5);
    /* Challenge
       An attribute has been identified for the raycaster in the cursor. 
       Add the appropriate attribute in order to interact with this object.
    */
    /* Challenge 
       Make the snowflake "disappear" when the user clicks on it.
       Hint: This is not an animation but a direct adjustment of the opacity attribute.
       Interactions don't necessary have to be connected to animations.
    */
    this.obj.addEventListener("click", ()=>{
      this.obj.setAttribute("opacity", 0);
    });
  
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  fall(){
    if(this.y > 0){
      this.y += this.dy;
      this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z}); 
    }
  }
}