const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

//ctx.fillStyle = "white";
//ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
//ctx.strokeStyle = INITIAL_COLOR;
//ctx.fillStyle = INITIAL_COLOR;
//ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event) {
    //console.log(event.offsetX, event.offsetY);
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function startPainting() {
    painting = true;

}

function stopPainting() {
    painting = false;
    
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);

}