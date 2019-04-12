class Platform {
    constructor(xpos, ypos, speed, ctx) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.ctx = ctx;
        this.speed = speed;
        this.platform = document.getElementById('platform1');
    }

    update() {

    }

    render() {
        this.ctx.save();
        this.ctx.drawImage(this.platform, this.xpos, this.ypos);
        this.ctx.restore();
    }
}

export default Platform;