let textIndex = 0;
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
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('message-box');
    const choiceLight = localStorage.getItem('choiceLight');
    const choiceRuins = localStorage.getItem('choiceRuins');

    if (choiceLight === 'stay-path' && choiceRuins === 'explore-ruins') {
        messageBox.innerHTML = `<h1 class="custom-font">You Got Lost!</h1>`;
    } else {
        messageBox.innerHTML = `<h1 class="custom-font">You Failed!</h1>`;
    }

    document.getElementById("next-button").addEventListener("click", advanceText);
});

