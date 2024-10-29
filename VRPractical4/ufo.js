class UFO{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.05; 
        this.object = document.createElement("a-entity");

        for(let i = 0; i < 1; i++){
            let heart = document.createElement("a-sphere");
            heart.setAttribute("radius",2);
            heart.setAttribute("color","red");
            heart.setAttribute("position","0 10 0");
            this.object.append(heart);
        }
		for(let i = 0; i < 1; i++){
            let side = document.createElement("a-cylinder");
            side.setAttribute("radius",3);
            side.setAttribute("height",0.5);
            side.setAttribute("color","blue");
            side.setAttribute("position","0 10 0");
            this.object.append(side);
        }

        this.object.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.object );
    }

    fall(){
        this.y -= this.dy;
        this.object.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}