// BUBBLE OPTIONS

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let xVals = [200];
let yVals = [300];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bubble
    ctx.strokeStyle = 'green';
    ctx.strokeCircle(xVals[0], yVals[0], 20)

    // Request another Animation Frame
    requestAnimationFrame(draw);
}