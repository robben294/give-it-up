import Environment from './environment';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#ddd";
    ctx.fillRect(100, 100, 600, 400);
    
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(250,400,10,0,2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    const environment = new Environment(canvas, ctx);
    ctx.fillStyle = 'white';
    const gameLoop = () => {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        environment.update();
        environment.render();
        window.requestAnimationFrame(gameLoop);
    };
    gameLoop();
    
});
