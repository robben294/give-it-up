import Environment from './environment';
import Hero from './hero';
import Platform from './platform';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const environment = new Environment(canvas, ctx);
    const hero = new Hero(150, 350, ctx);
    const platform = new Platform(125, 350, 20, ctx);
    ctx.fillStyle = 'white';
    const gameLoop = () => {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        environment.update();
        environment.render();
        platform.update();
        platform.render();
        hero.update();
        hero.render();
        window.requestAnimationFrame(gameLoop);
    };
    gameLoop();

    // ctx.fillStyle = 'black';
    // ctx.beginPath();
    // ctx.arc(250, 400, 10, 0, 2 * Math.PI);
    // ctx.closePath();
    // ctx.fill();
});
