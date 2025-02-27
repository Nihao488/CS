class Peashooter{
    constructor(x, y, z){
        this.obj = document.createElement("a-sphere");
        this.obj.setAttribute("color", "#00ff00");
        this.obj.setAttribute("position", {x, y, z});
        scene.appendChild(this.obj);
        
        this.peas = [];
        setInterval(() => {
            // Shoot forward (0 radians instead of Math.PI)
            this.peas.push(new Pea(x, y, z, Math.PI/2));
        }, 1000);

        this.obj.addEventListener("click", ()=>{
            this.collect();
        })
    }

    collect(){
        this.obj.setAttribute("opacity",0)
    }
}