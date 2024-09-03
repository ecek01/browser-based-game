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
        document.getElementById("dialogue-box").removeEventListener("click", advanceText);
        document.getElementById("options").classList.remove("hidden");
    }
}
