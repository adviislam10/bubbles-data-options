// BUBBLE OPTIONS

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600);

// Global Variables
// Parallel Arrays to store Bubble Data
let colorNames = ['red', 'green', 'blue', 'orange', 'magenta', 'purple']

let xVals = [];
let yVals = [];
let rVals = [];
let colorVals = [];
for (let n = 0; n < 150; n++) {
    xVals.push(Math.randomDec(0, cnv.width));
    yVals.push(Math.randomDec(0, cnv.height));
    rVals.push(Math.randomDec(10, 40));
    colorVals.push(Math.randomElement(colorNames));
}


// Main Program Loop
requestAnimationFrame(draw);

function draw() {

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bubble

    for (let i = 0; i < xVals.length; i++) {
        // Move Bubbles
        xVals[i] += Math.randomDec(-5, 5);
        yVals[i] += Math.randomDec(-5, 5);

        // Draw Bubbles
        ctx.strokeStyle = colorVals[i];
        ctx.strokeCircle(xVals[i], yVals[i], rVals[i]);
        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}