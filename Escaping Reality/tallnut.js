// tallnut.js
class Tallnut {
    constructor(x,y,z) {
        this.obj = document.createElement("a-cylinder");
        this.obj.setAttribute("class", "interact");
        this.obj.setAttribute("color", "#8B4513"); // Brown color
        this.obj.setAttribute("position", {x, y, z});
        this.obj.setAttribute("radius", 0.5);
        this.obj.setAttribute("height", 2);
        scene.appendChild(this.obj);

        this.clicks = 0;
        
        this.obj.addEventListener("click", () => {
            this.clicks++;
            if (this.clicks >= 10) {
                this.remove();
            }
        });
    }

    remove() {
        if (this.obj.parentNode) {
            this.obj.parentNode.removeChild(this.obj);
        }
        const index = tallnuts.indexOf(this);
        if (index > -1) tallnuts.splice(index, 1);
    }
}