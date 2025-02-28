// spikeweed.js
class Spikeweed {
    constructor(y, z) {
        this.obj = document.createElement("a-cone");
        this.obj.setAttribute("class", "interact");
        this.obj.setAttribute("color", "#228B22");
        this.obj.setAttribute("position", {x: 2, y, z}); // X position at 2
        this.obj.setAttribute("radius-bottom", 0.6);
        this.obj.setAttribute("radius-top", 0.1);
        this.obj.setAttribute("height", 1.2);
        this.obj.setAttribute("rotation", "0 0 0");
        this.obj.setAttribute("static-body", "");
        scene.appendChild(this.obj);
    }
}