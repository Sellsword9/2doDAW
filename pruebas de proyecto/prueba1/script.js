// script.js
const canvas = document.getElementById("mathCanvas");
const ctx = canvas.getContext("2d");
const equationInput = document.getElementById("equationInput");

let t = 0;
let equation = "3.1415 * Math.sin(t * 0.5)";
const trace = [];

function updateEquation() {
    equation = equationInput.value;
    clearCanvas();
    trace.length = 0; // Clear the trace when the equation changes
    animate();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    clearCanvas();
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    const x = centerX + radius * Math.cos(eval(equation));
    const y = centerY + radius * Math.sin(eval(equation));

    trace.push({ x, y });

    ctx.strokeStyle = "#FF0000";
    ctx.beginPath();

    for (let i = 0; i < trace.length; i++) {
        const point = trace[i];
        ctx.lineTo(point.x, point.y);
    }

    ctx.stroke();

    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();

    t += 0.01; // Increment time for animation

    if (trace.length > 2000) {
        trace.shift();
    }

    requestAnimationFrame(animate);
}

animate();