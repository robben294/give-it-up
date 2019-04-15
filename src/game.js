
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
        this.environment.update();
        this.environment.render();
        this.platforms.forEach(platform => {
            if (this.hero.hitBottom(platform)) {
                this.count += 1;
                platform.setBounce(this.hero);
            } else if (this.hero.detectCollision(platform)) {
                // window.alert("you died");    
                // console.log("you died");
                this.end();
                document.location.reload();
            }
            platform.update();
            platform.render();
        });
        this.ctx.fillText(Math.floor((this.count / this.platforms.length) * 100) + '%', 20, 50);
        this.hero.update();
        this.hero.render();
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    end() {
        this.ctx.fillText("You'd better play something else", 300, 300);
        // pause();
    }
}

export default Game;