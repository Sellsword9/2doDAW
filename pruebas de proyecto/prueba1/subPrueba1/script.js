// script.js
const circle = document.querySelector(".circle");
const equationInput = document.getElementById("equationInput");

let t = 0;
let equation = "Math.PI * Math.sin(t * 0.5) + (Math.PI / 2)";
const trailLength = 400; // Number of trail elements
const trail = [];

function updateEquation() {
    equation = equationInput.value;
}

function animate() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 100;

    const x = centerX + radius * Math.cos(eval(equation));
    const y = centerY + radius * Math.sin(eval(equation));

    circle.style.left = x + "px";
    circle.style.top = y + "px";

    trail.push({ x, y });

    // Remove the oldest trail elements to maintain the specified trail length
    if (trail.length > trailLength) {
        const removed = trail.shift();
        const elementToRemove = document.querySelector(".trail");
        if (elementToRemove) {
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
    }

    // Create a new trail element for the current position
    const trailElement = document.createElement("div");
    trailElement.className = "trail";
    trailElement.style.left = x + "px";
    trailElement.style.top = y + "px";
    document.body.appendChild(trailElement);

    t += 0.01; // Increment time for animation

    requestAnimationFrame(animate);
}

animate();


