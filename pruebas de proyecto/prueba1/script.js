const canvas = document.getElementById("mathCanvas");
const ctx = canvas.getContext("2d");
const equationInput = document.getElementById("equationInput");

let t = 0;
let equation = "sin(t)";

function updateEquation() {
    equation = equationInput.value;
    clearCanvas();
    animate();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    clearCanvas();
    
    // Update the equation and plot points
    for (let i = 0; i < canvas.width; i++) {
        const x = i;
        const y = eval(equation);
        
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(x, canvas.height / 2 - y * 50, 2, 2);
    }
    
    t += 0.1; // Increment time for animation
    
    requestAnimationFrame(animate);
}

animate(); // Start the animation