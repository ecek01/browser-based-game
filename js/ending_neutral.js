let textIndex = 0;  // Start from 1 since the first text is already displayed
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
        document.getElementById("dialogue-box").removeEventListener("click", advanceText);
        document.getElementById("options").classList.remove("hidden");
    }
}
