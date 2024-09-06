let textIndex = 0; // Start at 1 since the first text is already displayed
const textArray = [
    "This artifact allows you to safely leave the forest, with the knowledge and power of the forest now at your disposal.",
    "You achieved the good ending!"
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
    const messageBox = document.getElementById('message-box');
    const choiceLight = localStorage.getItem('choiceLight');
    const choiceTree = localStorage.getItem('choiceTree');

    // Display a custom win message based on the player's choices
    if (choiceLight === 'follow-light' && (choiceTree === 'take-fruit' || localStorage.getItem('choiceStream') === 'drink-stream')) {
        messageBox.innerHTML = `<h1 class="custom-font">You Won!</h1>`;
    } else {
        messageBox.innerHTML = `<h1 class="custom-font">You Won!</h1>`;
    }

    // Add event listener to the next button for advancing text
    document.getElementById("next-button").addEventListener("click", advanceText);
});
