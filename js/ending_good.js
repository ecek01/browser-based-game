let textIndex = 0;
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
        document.getElementById("dialogue-box").removeEventListener("click", advanceText);
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('message-box');
    const choiceLight = localStorage.getItem('choiceLight');
    const choiceTree = localStorage.getItem('choiceTree');

    if (choiceLight === 'follow-light' && (choiceTree === 'take-fruit' || localStorage.getItem('choiceStream') === 'drink-stream')) {
        // Player followed the light and took the fruit or drank from the stream
        messageBox.innerHTML = `<h1 class="custom-font">You Won!</h1>`;
    } else {
        // Default good ending
        messageBox.innerHTML = `<h1 class="custom-font">You Won!</h1>`;
    }
})

