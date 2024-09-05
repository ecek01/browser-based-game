let textIndex = 0;  // Start from 1 since the first text is already displayed
const textArray = [
    "Malevolent spirits or cursed creatures ensnare you, and you become lost, trapped forever in the enchanted forest.",
    "You achieved the bad ending."
];

function advanceText() {
    const introText = document.getElementById("intro-text");
    if (textIndex < textArray.length) {
        introText.textContent = textArray[textIndex];
        textIndex++;
    } else {
        document.getElementById("dialogue-box").removeEventListener("click", advanceText);
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('message-box');
    
    // Retrieve player's choices
    const choiceLight = localStorage.getItem('choiceLight');
    const choiceRuins = localStorage.getItem('choiceRuins');
    
    // Display only the "You Got Lost!" message based on the player's choices
    if (choiceLight === 'stay-path' && choiceRuins === 'explore-ruins') {
        // Player chose to explore the ruins, leading to the bad ending
        messageBox.innerHTML = `<h1 class="custom-font">You Got Lost!</h1>`;
    } else {
        // Default bad ending message
        messageBox.innerHTML = `<h1 class="custom-font">You Failed!</h1>`;
    }
    
    // Option to go back to start after ending is shown
    document.getElementById('options').classList.remove('hidden');
});
