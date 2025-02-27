class Car{
    constructor(x, y, z){
        this.obj = document.createElement("a-box");
        this.obj.setAttribute("position", {x, y, z});
        this.speed = 0.1;
        this.moving = false;
        this.direction = new THREE.Vector3(1, 0, 0);
        scene.appendChild(this.obj);
    }
  
    update(){
        if(this.moving) {
            const pos = this.obj.object3D.position;
            // Clone direction vector before modification
            pos.add(this.direction.clone().multiplyScalar(this.speed));
            this.obj.setAttribute("position", pos);
        }
    }
}