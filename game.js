const canvas = document.getElementById('canvas');
const player = document.getElementById('player');
const sprite = document.getElementById('ship');
const img = new Image();
const laser = new Image();
function animate(image, rows, columns, cellx, celly, speed) {
}

const imageTargets = [
    'imgs/laser.png',
    'imgs/ship.png'
];
let images = [];
for(i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = imageTargets[0];
    images.push(img);
}
img.src = 'imgs/ship.png';



//needs polishing if more images are to be loaded consider a loop
img.onerror = function() {
    console.log("No Image found..");
};
laser.src = 'imgs/laser.png';
img.onerror = function() {
    console.log("Failed to load laser.png")
};

//Global variables
let x = 0;
let y = 150;
let speed = 500;
let time = 0;
let elapsedTime = performance.now();
let framerate = 0;
let delta = 0;
let direction = 0;

function draw() {
    if(canvas.getContext) {
    const context = canvas.getContext("2d");
    //draw
    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    context.drawImage(img,x,y,50,50);
    context.font = '10px serif';
    context.fillStyle = 'white';
    context.textBaseline = 'top';
    context.fillText(`${framerate}`,10,10);
    Update(performance.now());
    requestAnimationFrame(draw);
    }
}
function Update(current) {
    delta = (current - elapsedTime) / 1000;
    framerate = 1 / delta;
    framerate = Math.round(framerate);
    elapsedTime = current;
    x += direction * speed * delta;
    //console.log(`${x}`);
}
img.onload = function() {
    draw();
};
//####### MOVEMENT
var keyState = {};
const keys = {
    A: "a",
    D: "d",
    Space: ""
};
//Need to make enum list of keys for associated key codes. because you need to search for them but no magic numbers
let offsetX = 0;
document.body.addEventListener("keydown", (event) => 
{
    switch(event.key) {
        case "a":
             keyState = keys.A;
                direction = -1;
                    break;
        case "d":
            keyState = keys.D;
                direction = 1;
                    break;
        case "Space":
            keyState = keys.Space;
                console.log("Fire laser");
                    break;
        default:
            break;
    }
});
document.body.addEventListener("keyup", (event) => {
    const last = keyState.length - 1;
    if(event.key == keyState[last]) {
        direction = 0;
    }
});