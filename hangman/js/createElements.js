function createElements() {
  const main = document.createElement("main");
  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = "Container";

  const divFlexContainer = document.createElement("div");
  divFlexContainer.classList.add("row");
  divFlexContainer.classList.add("justify-space-between");

  const divFirstHalf = document.createElement("div");
  divFirstHalf.classList.add("flex-40");
  const divSecondHalf = document.createElement("div");
  divSecondHalf.classList.add("flex-60");
  divSecondHalf.classList.add("guesses-container");

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
  divSecondHalf.appendChild(createGuessTopPart());
  divSecondHalf.appendChild(createKeyBoard());
  document.body.appendChild(main);
  main.appendChild(container);
  container.appendChild(divFlexContainer);
  divFlexContainer.appendChild(divFirstHalf);
  divFlexContainer.appendChild(divSecondHalf);
}

function createKeyBoard() {
  const div = document.createElement("div");
  div.classList.add("buttons");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  alphabet.forEach((item) => {
    const key = document.createElement("div");
    key.classList.add("btn");
    key.innerHTML = item;
    div.appendChild(key);
  });

  return div;
}

function createGuessTopPart(
  word = "car",
  hintSentence = "A human-powered vehicle with 2 wheels"
) {
  const arr = word.split("");
  console.log(arr);

  const guesses = document.createElement("div");
  guesses.classList.add("guesses");

  const hashes = document.createElement("div");
  hashes.classList.add("hashes");

  arr.forEach((item) => {
    let hash = document.createElement("div");
    hash.classList.add("hash__item");
    hash.dataset.letter = `${item}`;
    hashes.appendChild(hash);
  });

  const hint = document.createElement("div");
  hint.classList.add("hint");

  const hintDiv = document.createElement("div");
  hintDiv.innerHTML = `Hint:<b> ${hintSentence} </b>`;
  hintDiv.classList.add("hint__text")

  const incorrectGuesses = document.createElement("div");
  incorrectGuesses.classList.add("incorrect-guesses");

  const text = document.createElement("h3");
  text.innerHTML = "Incorrect answers:";

  const guessesLeft = document.createElement("span");
  guessesLeft.classList.add("incorrect-guesses__left");
  guessesLeft.innerHTML = "1";

  const guessesTotal = document.createElement("span");
  guessesTotal.classList.add("incorrect-guesses__total");
  guessesTotal.innerHTML = "6";


  hint.appendChild(hintDiv);

  incorrectGuesses.appendChild(text);
  incorrectGuesses.appendChild(guessesLeft);
  incorrectGuesses.appendChild(guessesTotal);

  guesses.appendChild(hashes);
  guesses.appendChild(hint);
  guesses.appendChild(incorrectGuesses);

  return guesses;
}

document.addEventListener("DOMContentLoaded", createElements);
