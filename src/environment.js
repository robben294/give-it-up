
class Environment {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.bgPos = 0;
        this.fgPos = 0;
        this.bgSpeed = 2;
        this.bgWidth = 1000;
        this.bgImg = document.getElementById('bgImg');
    }

    update() {
        this.bgPos -= this.bgSpeed;
        if (this.bgPos < -this.bgWidth) {
            this.bgPos = 0;
        }
    }

    render() {
        for (let i = 0; i <= this.canvas.width/this.bgWidth + 1; i++) {
            this.ctx.drawImage(this.bgImg, this.bgPos + i*this.bgWidth, 0);
        }
    }
}

export default Environment;