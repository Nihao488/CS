class Car{
    constructor(x, y, z){
        this.obj = document.createElement("a-box");
        this.obj.setAttribute("position", {x, y, z});
        this.speed = 0.1;
        this.moving = false;
        // Initialize direction as zero vector
        this.direction = new THREE.Vector3(0, 0, 0); 
        scene.appendChild(this.obj);
    }
  
    update(){
        if(this.moving) {
            // Calculate direction towards camera
            const camPos = camera.object3D.position;
            const carPos = this.obj.object3D.position;
            this.direction.subVectors(camPos, carPos).normalize();
            
            const pos = this.obj.object3D.position;
            pos.add(this.direction.clone().multiplyScalar(this.speed));
            this.obj.setAttribute("position", pos);
        }
    }
}