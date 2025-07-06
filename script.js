//NEED TO PARSE
// function isMobile() {
//     const device = /Mobi|Iphone|webOS/i;
//     return device.test(navigator.userAgent);
// }
// if(isMobile()) {
//     Resize(window.innerWidth, window.innerHeight);
// } else {
//     console.log("Likely desktop");
// }
// function Resize(width, height) {
//     let ratio = { x:0, y:0 };  
//      ratio.x = width / 1920;
//      ratio.y = height / 1080
//      if(ratio.x && ratio.y < 1) {
//         heading.style.width / ratio.x;
//         heading.style.height / ratio.y;

//         //Need to shrink flex box
//      }
// }
const test = document.getElementById('sprite');
test.addEventListener("keydown", (event) => {
    console.log("1");
});
//freeze may not be necessary here
const viewport = Object.freeze ({
    x: window.innerWidth,
    y: window.innerHeight
});
const h = document.querySelectorAll('h1,h2,h3,h4,h5,h6,h7');
for(i = 0; i < h.length; i++) {
    console.log("Working.");
    h.item(i).classList.add('fadeIn');
}
const heading = document.getElementsByClassName('heading');
//Check for viewport resize event
const resizeObserver = new ResizeObserver((entries) => {
    for(const entry of entries) {
        if(entry.target.innerWidth != viewport.x) {
            console.log("At initialization: " + viewport.x);
            console.log("Current: " + window.innerWidth);
            var percentage = (viewport.x - window.innerWidth) / viewport.x * 100;
            if(percentage > 10) //magic number!
            {
                //make animation? come clean up later it's a mess.
                //I think the solution is to make a two layer background because it doesn't know how to incremenet the degrees
            } else {
                console.log("Changes were made to the header..");
                //document.getElementsByClassName('heading')[0].style.background="linear-gradient(-45deg, rgba(0, 0, 0, 1) 50%, rgba(154, 189, 223, 1) 0%)";
                // const header = document.getElementById('graphic');
                // header.classList.add('heading-background');
            }
            /*
                I had problems with my heading, I could have probably went the CSS route but I wanted to play around with
                Javascript a bit, instead I'm going to scale my heading using the viewport size. I didn't know how to do 
                this at first. Creating this showed me in realtime the size change, for me it always helps to have a visual.
            */
        }   
    }
});
resizeObserver.observe(document.body);



















/*
const section = document.querySelectorAll('p');
section.forEach(heading => {heading.textContent = 
    "blah blah bababa awdna awdoianwdoinawdoawd awidonawdonaw doaw daow daow doawd aowd qwoad "});
*/ 