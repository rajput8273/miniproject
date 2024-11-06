// Shuffle and display cards
document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-container");
    const cards = Array.from(document.querySelectorAll(".card"));

    // Shuffle cards and append to container
    shuffleArray(cards);
    cards.forEach(card => gameContainer.appendChild(card));

    // Add flip functionality
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("is-flipped");
            const image = document.createElement("img");
            image.src = card.getAttribute("data-image");
            card.innerHTML = ""; // Clear previous content
            card.appendChild(image);
        });
    });
});

// Shuffle function to randomize cards
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
