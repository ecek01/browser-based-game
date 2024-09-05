let textIndex = 0;  // Start from 1 since the first text is already displayed
const textArray = [
    "The stones emanate a powerful magic, and you feel drawn to investigate further."
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

document.querySelector('.option-button.explore-ruins').addEventListener('click', () => {
    localStorage.setItem('choiceRuins', 'explore-ruins');
    location.href = 'ending_bad.html'; // Leads to the bad ending
});

document.querySelector('.option-button.avoid-ruins').addEventListener('click', () => {
    localStorage.setItem('choiceRuins', 'avoid-ruins');
    location.href = 'ending_neutral.html'; // Leads to the neutral ending
});
