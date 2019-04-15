import Environment from './environment';
import Hero from './hero';
import Game from './game';
import { level1 } from './generatePlatforms';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const environment = new Environment(canvas, ctx);
    const hero = new Hero(150, 350, ctx);
    const platformL1 = level1(ctx);
    const game = new Game(ctx, environment, hero, platformL1);

    game.render();

    
    ctx.font = "30px Arial";
    ctx.fillText("Click to Start ", 200, 200);

    // document.addEventListener('click', () => {
        // gameLoop();
        game.start();
    // });
});
