let textIndex = 1;  // Start from 1 since the first text is already displayed
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
        document.getElementById("dialogue-box").removeEventListener("click", advanceText);
        document.getElementById("options").classList.remove("hidden");
    }
}
