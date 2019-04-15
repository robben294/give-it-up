
class Game {

    constructor(ctx, environment, hero, platforms) {
        this.ctx = ctx;
        this.environment = environment;
        this.hero = hero;
        this.platforms = platforms;
        this.count = 0;
        this.gameStarted = false;
        this.audio = document.getElementById('bkg');
    }

    render() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.environment.render();
        this.platforms.forEach(platform => {
            platform.render();
        });
        this.hero.render();
    }
    
    gameLoop() {
        // this.audio.play();
        if (this.gameStarted) {
            this.environment.render();
            this.platforms.forEach(platform => {
                if (this.hero.hitBottom(platform)) {
                    this.count += 1;
                    platform.setBounce(this.hero);
                } else if (this.hero.detectCollision(platform)) {
                    // window.alert("you died");    
                    // console.log("you died");
                    this.end();
                    // document.location.reload();
                } else if (this.hero.y > 500) {
                    this.win();
                }
                platform.update();
                platform.render();
            });
            this.ctx.fillText(Math.floor((this.count / this.platforms.length) * 100) + '%', 20, 50);
            this.hero.update();
            this.hero.render();
            this.environment.update();
        }
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    end() {
        // this.ctx.clearRect(0, 0, 900, 500);
        // this.ctx.fillStyle = 'grey';
        // this.ctx.fillRect(0 ,0 , 900, 500);
        this.ctx.fillStyle = 'white';
        this.ctx.font = "30px Dokdo";
        this.ctx.fillText("You'd better play something else!", 200, 100);
        this.ctx.fillText("Press any key to restart!", 200, 150);
        this.ctx.fillStyle = 'red';
        this.ctx.font = '70px Dokdo';
        this.ctx.fillText(Math.ceil((this.count / this.platforms.length) * 100) + '%', 20, 50);
        this.gameStarted = false;
        this.audio.pause();
        document.addEventListener('keydown', this.restart.bind(this));
    }
    
    win() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = "30px Dokdo";
        this.ctx.fillText("You win!", 200, 100);
        this.ctx.fillStyle = 'red';
        this.ctx.fillText("But the hero dead!", 200, 150);
        this.ctx.fillStyle = 'black';
        this.ctx.fillText("Press any key to restart!", 200, 200);
        this.ctx.fillStyle = 'green';
        this.ctx.font = '70px Dokdo';
        this.ctx.fillText(Math.ceil((this.count / this.platforms.length) * 100) + '%', 20, 50);
        this.gameStarted = false;
        this.audio.pause();
        document.addEventListener('keydown', this.restart.bind(this));
    }
    
    restart() {

        document.location.reload();
        this.audio.play();
        document.removeEventListener('keydown', this.restart.bind(this));
    }
}

export default Game;