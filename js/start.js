function showInstructions() {
    document.getElementById('instructions-overlay').classList.remove('hidden');
}

function hideInstructions() {
    document.getElementById('instructions-overlay').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Start page loaded");
});
