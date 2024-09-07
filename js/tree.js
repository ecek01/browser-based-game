let textIndex = 0;
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
        document.getElementById("next-button").classList.add("hidden");
        document.getElementById("options").classList.remove("hidden");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("next-button").addEventListener("click", advanceText);

    document.querySelector('.option-button.take-fruit').addEventListener('click', () => {
        localStorage.setItem('choiceTree', 'take-fruit');
        location.href = 'ending_good.html';
    });

    document.querySelector('.option-button.leave-fruit').addEventListener('click', () => {
        localStorage.setItem('choiceTree', 'leave-fruit');
        location.href = 'stream.html';
    });
});
