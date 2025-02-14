class Car{
    constructor(x, y, z){
        this.obj = document.createElement("a-box");
        this.obj.setAttribute("position", {x, y, z});
    }
  }