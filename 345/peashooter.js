class Peashooter{
    constructor(x, y, z){
        this.obj = document.createElement("a-sphere");
        this.obj.setAttribute("class", "interact");
        this.obj.setAttribute("color", "#00ff00");
        this.obj.setAttribute("position", {x, y, z});
        scene.appendChild(this.obj);
        
        this.peas = [];
        this.clicks = 0;
        
        // Random initial delay between 0-4000ms, then shoot every 2000ms
        this.intervalId = setTimeout(() => {
            this.peas.push(new Pea(x, y, z, Math.PI/2));
            this.intervalId = setInterval(() => {
                this.peas.push(new Pea(x, y, z, Math.PI/2));
            }, 2000);
        }, Math.random() * 4000);

        this.obj.addEventListener("click", () => {
            this.clicks++;
            if(this.clicks >= 5) this.collect();
        });
    }

    collect(){
        clearTimeout(this.intervalId);
        clearInterval(this.intervalId);
        if(this.obj.parentNode) this.obj.parentNode.removeChild(this.obj);
        const index = peashooters.indexOf(this);
        if(index > -1) peashooters.splice(index, 1);
    }
}