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
        //vardump
        console.log(parsedExpression);
        console.log(compiledExpression);
        // Set the number of points for a smoother curve
        const numPoints = 8000;

        // Define the x-axis and y-axis scale
        let xScale = 1; // Adjust as needed for horizontal scaling
        const yScale = 800; // Adjust as needed for vertical scaling
        
        // Wait this works
        
        // Draw the equation plot with lines
        ctx.beginPath();
        // increase x scale depending on the potency of the equation
        if(parsedExpression.fn == "pow"){
            xScale = 2.5 * parsedExpression.args[1].value;
        }
        for (let i = 0; i < numPoints; i++) {
            const x = (i - equationCanvas.width / 2) * xScale / equationCanvas.width;
            const y = compiledExpression.evaluate({ x: x});
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
        alert("Error. Trying a different equation may work. Error info: " + error.message);
    }
}

// Initialize canvas size
equationCanvas.width = 800;
equationCanvas.height = 800;
