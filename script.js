function moveRandomEl(elm) {
    elm.style.position = "absolute"; // Ensure the element is positioned absolutely
    elm.style.top = Math.floor(Math.random() * 90) + 5 + "%"; // Random top position between 5% and 95%
    elm.style.left = Math.floor(Math.random() * 90) + 5 + "%"; // Random left position between 5% and 95%
}

// Get the element with the ID 'move-random'
const moveRandom = document.querySelector("#move-random");

// Ensure that the element exists before adding the event listener
if (moveRandom) {
    moveRandom.addEventListener("mouseenter", function(e) {
        moveRandomEl(e.target);
    });
} else {
    console.error("#move-random element not found");
}
