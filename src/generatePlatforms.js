import Platform from "./platform";

export const level1 = (ctx) => {
    const platforms = [];
    const startXPos = 250;
    const startYPos = 350 + 20 + 12;
    const gap = 60;
    const width1 = 50;
    const height1 = 23; 
    const speed = 2.85;
    const name1 = "platform1";
    const name2 = "platform2";
    const width2 = 50;
    const height2 = 76;
    for (let i = 0; i < 1000; ++i) {
        const platform1 = new Platform(startXPos + gap * i, 
            startYPos - height1,   
            width1, 
            height1, 
            speed, 
            name1,
            ctx);
        platforms.push(platform1);
        if (i > 3 && i % 4 == 0 ) {
            const platform2 = new Platform(startXPos + gap * (i + 1),
                startYPos - height2,
                width2,
                height2,
                speed,
                name2,
                ctx);
            platforms.push(platform2);
            ++i;
        }
    }
    return platforms;
};