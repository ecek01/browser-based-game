let textIndex = 0;  // Start from 1 since the first text is already displayed
const textArray = [
    "The water sparkles invitingly, but you remember the tales of enchanted waters that can either heal or harm."
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
    document.querySelector('.option-button.drink-stream').addEventListener('click', () => {
        localStorage.setItem('choiceStream', 'drink-stream');
        location.href = 'ending_good.html'; // Leads to the good ending
    });

    document.querySelector('.option-button.refuse-water').addEventListener('click', () => {
        localStorage.setItem('choiceStream', 'refuse-water');
        location.href = 'ending_neutral.html'; // Leads to the neutral ending
    });
});
