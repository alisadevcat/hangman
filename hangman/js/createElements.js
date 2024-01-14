function createElements() {
  const main = document.createElement("main");
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = "Container";

  const divFlexContainer = document.createElement("div");
  divFlexContainer.classList.add("row");
  divFlexContainer.classList.add("justify-center");
  
  const divFirstHalf = document.createElement("div");
  divFirstHalf.classList.add("flex-30");
  const divSecondHalf = document.createElement("div");
  divSecondHalf.classList.add("flex-70");

  const lines = document.createElement("div");
  lines.classList.add("lines");

  const topLine = document.createElement("div");
 topLine.classList.add("top-line");
 topLine.classList.add("line");
  const horizontalLine = document.createElement("div");
  horizontalLine.classList.add("horizontal-line");
  horizontalLine.classList.add("line");
// const diagnolLine = document.createElement("div");
// diagnolLine.classList.add("diagnol-line");
// diagnolLine.classList.add("line");
const smallLine = document.createElement("div");
smallLine.classList.add("small-line");
smallLine.classList.add("line");
const bottomLine = document.createElement("div");
bottomLine.classList.add("bottom-line");

divFirstHalf.appendChild(lines);

  lines.appendChild(topLine);
  lines.appendChild(horizontalLine);
  lines.appendChild(bottomLine);
  // lines.appendChild(diagnolLine);
  lines.appendChild(smallLine);
 
  const gameTitle = document.createElement("div");
  gameTitle.classList.add("game-title");
  gameTitle.innerHTML = "Hangman Game";

  divFirstHalf.appendChild(gameTitle);
  document.body.appendChild(main);
  main.appendChild(container);
  container.appendChild(divFlexContainer);
  divFlexContainer.appendChild(divFirstHalf);
  divFlexContainer.appendChild(divSecondHalf);


}

document.addEventListener("DOMContentLoaded", createElements);
console.log("fffff")