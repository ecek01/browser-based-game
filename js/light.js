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
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("next-button").addEventListener("click", advanceText);

    document.querySelector('.option-button.follow-light').addEventListener('click', () => {
        localStorage.setItem('choiceLight', 'follow-light');
        location.href = 'tree.html';
    });

    document.querySelector('.option-button.stay-path').addEventListener('click', () => {
        localStorage.setItem('choiceLight', 'stay-path');
        location.href = 'ruins.html';
    });
});
