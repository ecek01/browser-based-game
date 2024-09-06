let textIndex = 0;
const textArray = [
    "You walk through the dense forest.",
    "You notice a faint, glowing light flickering through the trees.",
    "It seems to be leading you somewhere, but you're not sure if it's a safe path."
];

function advanceText() {
    const introText = document.getElementById("intro-text");
    if (textIndex < textArray.length) {
        introText.textContent = textArray[textIndex];
        textIndex++;
    } else {
        // Hide the next button and show the options after the last text
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the next button for advancing text
    document.getElementById("next-button").addEventListener("click", advanceText);
    
    // Other button event listeners
    document.querySelector('.option-button.follow-light').addEventListener('click', () => {
        localStorage.setItem('choiceLight', 'follow-light');
        location.href = 'tree.html';
    });

    document.querySelector('.option-button.stay-path').addEventListener('click', () => {
        localStorage.setItem('choiceLight', 'stay-path');
        location.href = 'ruins.html';
    });
});
