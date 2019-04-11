class Hero {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.width = 120;
        this.height = 120;
        this.velocity_Y = 0;
        this.sprites = [document.getElementById("turtle1"),
            document.getElementById("turtle2"),
            document.getElementById("turtle3")];
    }

    update() {

    }

    render() {
        let renderX = this.x - this.width / 2;
        let renderY = this.y - this.height / 2;
        this.ctx.drawImage(this.sprites[0], renderX, renderY);
    }
}

export default Hero;