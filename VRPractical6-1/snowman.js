class Snowman{
  constructor(x,z){
      this.x = x;
      this.z = z;
      /* Challenge
        Add variables in order to animate the snowman rotating
      */
      this.r = 0;
      this.dr = 1;
      /* Challenge 
         Set this.obj below to be a clone of the snowman from the template in the HTML
      */
      this.obj = document.createElement("a-entity");
      this.obj.append(snowmanTemplate.cloneNode(true));
      /* Challenge
         An attribute has been identified for the raycaster in the cursor. 
         Add the appropriate attribute in order to interact with this object.
      */
      
      /* Challenge 
         Make the snowman spin when the user clicks on the snowman.
         Hint: Don't forget to adjust spin() to incorporate the "flag"
      */
      this.obj.addEventListener("click", ()=>{
         this.rotate = true;
      });

      this.obj.setAttribute("position",{x:this.x,y:-1.5,z:this.z});
      scene.append(this.obj);
  }
  spin(){
    
      /* Challenge
         Add the necessary code to rotating the snowman when the "flag" is set
      */
     if(this.rotate){
      this.r += this.dr;
      this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
     }
  }
}