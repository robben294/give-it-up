class Hero {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.onGround = false;
        this.width = 40;
        this.height = 40;
        this.velocity_Y = 0;
        this.velocity_X = 0;    
        this.ticks = 0;
        this.spriteIndex = 0;
        this.sprites = [document.getElementById("hero1"),
                document.getElementById("hero2")];

        document.addEventListener('keydown', (e) => {
            
            if (e.keyCode === 32 && this.y > 335) {
                if (this.y >= 349) {
                    this.velocity_Y = -8.7;
                } else if (this.y >= 347) {
                    this.velocity_Y = -8.6;
                } else if (this.y >= 344) {
                    this.velocity_Y = -8.5;
                } else if (this.y >= 341){
                    this.velocity_Y = -8.4;
                } else if (this.y >= 339) {
                    this.velocity_Y = -8.3;
                } else if (this.y >= 337) {
                    this.velocity_Y = -8.2;
                } else {
                    this.velocity_Y = -8.1;
                }
            }
            // console.log(this.y);
            // console.log(this.velocity_Y);
        });
    }

    hitBottom(platform) {
        this.onGround = this.x >= platform.x
            && (this.x <= platform.x + platform.width)
            && ((this.y + this.height / 2) >= (platform.y + 10));
        this._resetLocation(platform);
        return this.onGround;
    }

    _resetLocation(platform) {
        if(this.onGround) {
            this.x = platform.x + platform.width/2;
        }
    }

    detectCollision(platform) {
        
        return (this.x + this.width/2 >= platform.x + 15) //making sure that when hero is flying over the platform never collide 
            && (this.x - this.width/2 < platform.x)
            && (this.y + this.height/2 > platform.y + 12);
    }

    update() { 
        this.ticks++;
        if (this.ticks % 10.5 === 0) {
            this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length;
        }

        this.x += this.velocity_X;
        this.y += this.velocity_Y;
        this.velocity_Y += 0.6; // down gravity

        // if (this.y >= 350) { //bounce
        //     this.velocity_Y = -6;
        // }
    }

    render() {
        let renderX = this.x - this.width / 2;
        let renderY = this.y - this.height / 2;
        this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
    } 

    
}

export default Hero;