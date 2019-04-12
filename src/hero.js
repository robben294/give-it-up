class Hero {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.width = 40;
        this.height = 40;
        this.velocity_Y = 0;
        this.velocity_X = 0;
        // this.sprites = [document.getElementById("turtle1"),
        //     document.getElementById("turtle2"),
        //     document.getElementById("turtle3")
        // ];
        this.ticks = 0;
        this.spriteIndex = 0;
        this.sprites = [document.getElementById("hero1"),
                document.getElementById("hero2")];

        document.addEventListener('keydown', (e) => {
            console.log(this.y);
            if (e.keyCode === 32 && this.y > 340) {

                this.velocity_Y = -8;

            }
        });
    }

    // hitBottom() {
    //     return this.y > 330;
    // }

    // handleJump(e) {

    //     if (e.keyCode === 32 ) {

    //         this.velocity_Y = -8;

    //     }
    // } 

    update() { 
        // console.log(this.y); 
        debugger
        this.ticks++;
        if (this.ticks % 15.5 === 0) {
            this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length;
        }

        this.x += this.velocity_X;
        this.y += this.velocity_Y;
        this.velocity_Y += 0.4; // down gravity

        if (this.y >= 350) { //bounce
            this.velocity_Y = -6;
        }
    }

    render() {
        let renderX = this.x - this.width / 2;
        let renderY = this.y - this.height / 2;
        this.ctx.drawImage(this.sprites[this.spriteIndex], renderX, renderY);
    }
}

export default Hero;