class Pea{
    constructor(x, y, z, angle) {
        this.obj = document.createElement("a-sphere");
        this.obj.setAttribute("radius", 0.1);
        this.obj.setAttribute("color", "green");
        this.obj.setAttribute("position", {x, y, z});
        this.speed = 0.2;
        this.direction = new THREE.Vector3(
            Math.sin(angle),
            0,
            Math.cos(angle)
        ).normalize();
        scene.appendChild(this.obj);
    }
  
    update(){
        const pos = this.obj.object3D.position;
        // Clone direction before modifying to prevent cumulative changes
        pos.add(this.direction.clone().multiplyScalar(this.speed));
        this.obj.setAttribute("position", pos);
        
        // Match boundary check with 400x400 plane (200 units from center)
        if(Math.abs(pos.x) > 200 || Math.abs(pos.z) > 200) {
            this.obj.parentNode.removeChild(this.obj);
        }
    }
}