/******************************
* RESPONSIVE WARNING BEHAVIOR *
******************************/

const responsiveWarning = document.getElementById("responsive-warning");
// Enable/disable responsive warning.
const responsiveDesign = false;
// Mobile width limit.
const threshold = 768;

// Show or hide modal based on screen size.
function checkResponsiveState() {
  const small = window.innerWidth <= threshold;

  if (!responsiveDesign && small) {
    if (!responsiveWarning.open) {
      responsiveWarning.showModal();
      document.body.classList.add("overflow-hidden");
    }
  } else {
    if (responsiveWarning.open) {
      responsiveWarning.close();
      document.body.classList.remove("overflow-hidden");
    }
  }
}

// Initial check.
checkResponsiveState();

// Real-time resize detection.
window.addEventListener("resize", checkResponsiveState);


/*****************
* LETTER CASCADE *
*****************/

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