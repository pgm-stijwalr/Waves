const words = ["Dance", "Listen", "Groove"];

// An array of colors to cycle through
const colors = ["#d3907a", "#2fa19b", " #f3d459"];

var currentIndex = 0;
var spanElement = document.getElementById("wordToChange");

function changeWord() {
    // Apply the transition animation to the current word
    spanElement.style.animation = "transitionWords 1s";

    setTimeout(function () {
        // Update the text content and color of the <span> with the next word
        spanElement.textContent = words[currentIndex];
        spanElement.style.color = colors[currentIndex];

        // Reset the animation
        spanElement.style.animation = "";

        // Increment the index to get the next word in the array
        currentIndex = (currentIndex + 1) % words.length;
    }, 500); // Adjust the timing based on your preference
}

// Call the changeWord function every 4 seconds
setInterval(changeWord, 4000);
