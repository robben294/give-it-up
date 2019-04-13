class Platform {
    constructor(x, y, width, height, speed, name, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.speed = speed;
        this.name = name;
        this.platform = document.getElementById(name);
    }

    setBounce(hero) {
        if (this.name === 'platform1') {
            hero.velocity_Y = -6;
        } else if (this.name === 'platform2') {
            if (this.x + this.width / 2 < hero.x) {
                hero.velocity_Y = -3.2;
            } else if (this.x + this.width / 2 >= hero.x ) {
                hero.velocity_Y = -3.4;
            }
            
        }
    }

    update() {
        this.x -= this.speed;
    }

    render() {
        this.ctx.save();
        this.ctx.drawImage(this.platform, this.x, this.y);
        this.ctx.restore();
    }
}

export default Platform;