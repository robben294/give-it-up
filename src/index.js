import Environment from './environment';
import Hero from './hero';
import Game from './game';
import { level1 } from './generatePlatforms';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const environment = new Environment(canvas, ctx);
    const hero = new Hero(275, 350, ctx);
    const platformL1 = level1(ctx);
    const game = new Game(ctx, environment, hero, platformL1);

    game.render();
    
    const startGame = () => {
        const startMenus = document.getElementById('start-menus');
        startMenus.classList.add('hidden');
        game.gameStarted = true;
        document.removeEventListener('keydown', startGame);
        game.audio.play();
        if (game.gameStarted) {
            game.gameLoop();
        }
    };
    
    document.addEventListener('keydown', startGame);
    ctx.font = "50px Dokdo";
    // ctx.fillText("Click to Start ", 200, 200);
    
});

