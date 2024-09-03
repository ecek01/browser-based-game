let textIndex = 0;
const textArray = [
    "This artifact allows you to safely leave the forest, with the knowledge and power of the forest now at your disposal.",
    "You achieved the good ending!"
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
