// script.js
const equationInput = document.getElementById("equationInput");
const drawButton = document.getElementById("drawButton");
const displayedEquation = document.getElementById("displayedEquation");
const equationCanvas = document.getElementById("equationCanvas");
const ctx = equationCanvas.getContext("2d");

drawButton.addEventListener("click", drawEquation);

function drawEquation() {
    const equationText = equationInput.value;

    // Clear canvas
    ctx.clearRect(0, 0, equationCanvas.width, equationCanvas.height);

    try {
        // Parse and evaluate the entered equation using Math.js
        const parsedExpression = math.parse(equationText);
        const compiledExpression = parsedExpression.compile();

        // Set the number of points for a smoother curve
        const numPoints = equationCanvas.width;

        // Define the x-axis and y-axis scale
        const xScale = 1; // Adjust as needed for horizontal scaling
        const yScale = 800; // Adjust as needed for vertical scaling

        // Draw the equation plot with lines
        ctx.beginPath();
        for (let i = 0; i < numPoints; i++) {
            const x = (i - equationCanvas.width / 2) * xScale / equationCanvas.width;
            const y = compiledExpression.evaluate({ x: x });
            const canvasX = i;
            const canvasY = equationCanvas.height / 2 - y * yScale;
            if (i === 0) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }
        ctx.stroke();

        // Display the entered equation
        displayedEquation.textContent = equationText;
    } catch (error) {
        alert("Invalid equation. Please enter a valid mathematical expression.");
    }
}

// Initialize canvas size
equationCanvas.width = 800;
equationCanvas.height = 800;
