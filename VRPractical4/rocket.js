class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.05; 
        this.obj = document.createElement("a-entity");

        for(let i = 0; i < 1; i++){
            let head = document.createElement("a-cone");
            head.setAttribute("radius-top",0);
            head.setAttribute("radius-bottom",0.5);
            head.setAttribute("height",1);
            head.setAttribute("color","red");
            head.setAttribute("position","0 0 0");
            this.obj.append(head);
        }
		for(let i = 0; i < 1; i++){
            let body = document.createElement("a-cylinder");
            body.setAttribute("radius",0.5);
            body.setAttribute("height",2);
            body.setAttribute("color","gray");
            body.setAttribute("position","0 -1.5 0");
            this.obj.append(body);
        }
        for(let i = 0; i < 1; i++){
            let tail = document.createElement("a-cone");
            tail.setAttribute("radius-top",0);
            tail.setAttribute("radius-bottom",0.25);
            tail.setAttribute("height",2);
            tail.setAttribute("color","orange");
            tail.setAttribute("position","0 -3.5 0");
            tail.setAttribute("rotation","-180 0 0");
            this.obj.append(tail);
        }

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj );
    }

    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}