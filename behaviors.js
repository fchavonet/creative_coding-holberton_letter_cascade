////////// HOLBERTON LETTERS CASCADE BEHAVIOR \\\\\\\\\\
function randomHolbertonLetters() {
    const text = ("HOLBERTON");
    holbertonLetters = text[Math.floor(Math.random() * text.length)];
    return holbertonLetters;
}

function lettersCascade() {
    const lettersCascade = document.getElementById("letters-cascade");
    const letterElement = document.createElement("div");

    letterElement.classList.add("drop");
    lettersCascade.appendChild(letterElement);

    const left = Math.floor(Math.random() * 290);
    const size = Math.random() * 1.5;
    const duration = Math.random() * 1;

    letterElement.innerText = randomHolbertonLetters();
    letterElement.style.left = left + "px";
    letterElement.style.fontSize = 0.5 + size + "rem";
    letterElement.style.animationDuration = 1 + duration + "s";

    setTimeout(function () {
        lettersCascade.removeChild(letterElement);
    }, 2000)
}

setInterval(function () {
    lettersCascade()
}, 20)