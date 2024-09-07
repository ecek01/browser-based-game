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
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const messageBox = document.getElementById('message-box');
    const choiceRuins = localStorage.getItem('choiceRuins');
    const choiceStream = localStorage.getItem('choiceStream');

    if (choiceRuins === 'avoid-ruins') {
        messageBox.innerHTML = `<h1 class="custom-font">You Escaped Safely!</h1>`;
    } else if (choiceStream === 'refuse-water') {
        messageBox.innerHTML = `<h1 class="custom-font">You Refused the Water!</h1>`;
    } else {
        messageBox.innerHTML = `<h1 class="custom-font">You Escaped!</h1>`;
    }

    document.getElementById("dialogue-box").addEventListener("click", advanceText);
});
