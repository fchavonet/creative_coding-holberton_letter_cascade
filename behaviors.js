////////// HOLBERTON LETTER CASCADE BEHAVIOR \\\\\\\\\\
function randomHolbertonLetters() {
    const text = ("HOLBERTON");
    holbertonLetters = text[Math.floor(Math.random() * text.length)];
    return holbertonLetters;
}

function letterCascade() {
    const letterCascade = document.getElementById("letter-cascade");
    const letterElement = document.createElement("div");

    letterElement.classList.add("drop");
    letterCascade.appendChild(letterElement);

    const left = Math.floor(Math.random() * 290);
    const size = Math.random() * 1.5;
    const duration = Math.random() * 1;

    letterElement.innerText = randomHolbertonLetters();
    letterElement.style.left = left + "px";
    letterElement.style.fontSize = 0.5 + size + "rem";
    letterElement.style.animationDuration = 1 + duration + "s";

    setTimeout(function () {
        letterCascade.removeChild(letterElement);
    }, 2000)
}

setInterval(function () {
    letterCascade()
}, 20)