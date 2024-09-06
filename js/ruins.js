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
        // Hide the next button and show the options after the last text
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the next button for advancing text
    document.getElementById("next-button").addEventListener("click", advanceText);
    
    // Event listeners for options
    document.querySelector('.option-button.explore-ruins').addEventListener('click', () => {
        localStorage.setItem('choiceRuins', 'explore-ruins');
        location.href = 'ending_bad.html'; // Leads to the bad ending
    });

    document.querySelector('.option-button.avoid-ruins').addEventListener('click', () => {
        localStorage.setItem('choiceRuins', 'avoid-ruins');
        location.href = 'ending_neutral.html'; // Leads to the neutral ending
    });
});
