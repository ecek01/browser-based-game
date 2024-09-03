let textIndex = 0;
const textArray = [
    "You walk through the dense forest.",
    "You notice a faint, glowing light flickering through the trees.",
    "It seems to be leading you somewhere, but you're not sure if it's a safe path."
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
