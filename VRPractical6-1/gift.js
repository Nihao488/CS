class Gift{
  constructor(x,z){
    this.x = x;
    this.dx = rnd(-10,10) / 100 ;
    this.z = z;
    this.dz = rnd(-10,10) / 100;

     this.obj = document.createElement("a-box");
     this.obj.setAttribute("height",1);
    /* Challenge 
       Create an appropriate object to represent a gift.  Feel free to replace the above statement with a clone if you want.
    */
      this.obj.setAttribute("src", "#gift");
      this.obj.setAttribute("repeat", "10 10");
    /* Challenge
       An attribute has been identified for the raycaster in the cursor. 
       Add the appropriate attribute in order to interact with this object.
    */
    /* Challenge 
       Stop the gift from moving when the user clicks on it.
       Hint: Don't forget to adjust roam() to incorporate the flag
    */
   this.obj.addEventListener("click", ()=>{
      this.stop = true;
   });
    this.obj.setAttribute("position",{x:this.x, y:0.25, z:this.z});
    scene.append(this.obj);
  }
  roam(){
    /* Challenge
       Create an altering animation for movement on the z axis. Keep the gift 
       between the z values of -20 and 20
    */

    /* Challenge
       Create an altering animation for movement on the x axis. Keep the gift 
       between the x values of -20 and 20
    */
      if(!this.stop){
         this.z += this.dz;
         this.x += this.dx;
         if(this.z > 20 || this.z < -20){
           this.dz = -this.dz;
           this.dx = -this.dx;
           this.obj.setAttribute("position", {x:this.x, y:0, z:this.z});
         }    
      }

      this.obj.setAttribute("position",{x:this.x, y:0.25, z:this.z}); 
    
  }
}