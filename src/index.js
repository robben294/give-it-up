import Environment from './environment';
import Hero from './hero';
import Platform from './platform';
import { level1 } from './generatePlatforms';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const environment = new Environment(canvas, ctx);
    const hero = new Hero(150, 350, ctx);
    const platformL1 = level1(ctx);

    ctx.fillStyle = 'white';

    const gameLoop = () => {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        environment.update();
        environment.render();
        platformL1.forEach(platform => {
            if (hero.hitBottom(platform)) {
                platform.setBounce(hero);
            } else if (hero.detectCollision(platform)) {
                // window.alert("you died");
                console.log("you died");
            }
            platform.update();
            platform.render();
        });
        hero.update();
        hero.render();
        window.requestAnimationFrame(gameLoop);
    };
    gameLoop();
});
