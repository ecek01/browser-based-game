// Text progression logic
let textIndex = 0;
const textArray = [
    "You leave with a sense of relief, but also with the knowledge that you missed out on the forest’s deeper mysteries.",
    "You achieved the neutral ending."
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
    
    // Retrieve player's choices from localStorage
    const choiceRuins = localStorage.getItem('choiceRuins');
    const choiceStream = localStorage.getItem('choiceStream');
    
    // Check the conditions for the neutral ending based on player's choices
    if (choiceRuins === 'avoid-ruins') {
        // Player avoided the ruins
        messageBox.innerHTML = `<h1 class="custom-font">You Escaped Safely!</h1>`;
    } else if (choiceStream === 'refuse-water') {
        // Player refused to drink from the stream
        messageBox.innerHTML = `<h1 class="custom-font">You Refused the Water!</h1>`;
    } else {
        // Default neutral ending message
        messageBox.innerHTML = `<h1 class="custom-font">You Escaped!</h1>`;
    }
    
    // Set up the click event for advancing the text in dialogue-box
    document.getElementById("dialogue-box").addEventListener("click", advanceText);
});
