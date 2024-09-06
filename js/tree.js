let textIndex = 0;  // Start from 1 since the first text is already displayed
const textArray = [
    "This leads you to a clearing with a mystical tree at its center.",
    "The tree offers you a choice to take one of its magical fruits."
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
    document.querySelector('.option-button.take-fruit').addEventListener('click', () => {
        localStorage.setItem('choiceTree', 'take-fruit');
        location.href = 'ending_good.html'; // May lead to the good ending directly
    });

    document.querySelector('.option-button.leave-fruit').addEventListener('click', () => {
        localStorage.setItem('choiceTree', 'leave-fruit');
        location.href = 'stream.html'; // Leads to the next stage
    });
});
