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
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('message-box');
    const choiceLight = localStorage.getItem('choiceLight');
    const choiceTree = localStorage.getItem('choiceTree');

    if (choiceLight === 'follow-light' && (choiceTree === 'take-fruit' || localStorage.getItem('choiceStream') === 'drink-stream')) {
        messageBox.innerHTML = `<h1 class="custom-font">You Won!</h1>`;
    } else {
        messageBox.innerHTML = `<h1 class="custom-font">You Won!</h1>`;
    }

    document.getElementById("next-button").addEventListener("click", advanceText);
});
