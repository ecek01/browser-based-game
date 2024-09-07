let textIndex = 0;
const textArray = [
    "The water sparkles invitingly, but you remember the tales of enchanted waters that can either heal or harm."
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

    document.querySelector('.option-button.drink-stream').addEventListener('click', () => {
        localStorage.setItem('choiceStream', 'drink-stream');
        location.href = 'ending_good.html';
    });

    document.querySelector('.option-button.refuse-water').addEventListener('click', () => {
        localStorage.setItem('choiceStream', 'refuse-water');
        location.href = 'ending_neutral.html';
    });
});
