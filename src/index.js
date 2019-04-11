import Environment from './environment';
import Hero from './villain';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    

    const environment = new Environment(canvas, ctx);
    const hero = new Hero(150, 350, ctx);
    ctx.fillStyle = 'white';
    const gameLoop = () => {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        environment.update();
        environment.render();
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
