let textIndex = 0;
const textArray = [
    "The stones emanate a powerful magic, and you feel drawn to investigate further."
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

    document.querySelector('.option-button.explore-ruins').addEventListener('click', () => {
        localStorage.setItem('choiceRuins', 'explore-ruins');
        location.href = 'ending_bad.html';
    });

    document.querySelector('.option-button.avoid-ruins').addEventListener('click', () => {
        localStorage.setItem('choiceRuins', 'avoid-ruins');
        location.href = 'ending_neutral.html';
    });
});

