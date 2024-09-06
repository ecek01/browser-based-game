// start.js

// Function to show the instructions overlay
function showInstructions() {
    document.getElementById('instructions-overlay').classList.remove('hidden');
}

// Function to hide the instructions overlay
function hideInstructions() {
    document.getElementById('instructions-overlay').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Start page loaded");
    // You can add other event listeners or game start logic here
});
