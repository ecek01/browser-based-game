let textIndex = 0;  // Start from 1 since the first text is already displayed
const textArray = [
    "Malevolent spirits or cursed creatures ensnare you, and you become lost, trapped forever in the enchanted forest.",
    "You achieved the bad ending."
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
