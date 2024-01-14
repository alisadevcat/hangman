// import handleEvents from './virtualEvents';
import words from "../words.json";

let count = 0;
let correctWord = words[count];
let inCorrectCount = 0;
let correctAnswers = 0;

console.log(words);

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
  divSecondHalf.appendChild(createGuessTopPart(correctWord));
  divSecondHalf.appendChild(createKeyBoard());

  main.appendChild(container);
  container.appendChild(divFlexContainer);
  divFlexContainer.appendChild(divFirstHalf);
  divFlexContainer.appendChild(divSecondHalf);
  document.body.appendChild(main);

  handleEvents(correctWord.word, inCorrectCount);
}

function createKeyBoard() {
  const div = document.createElement("div");
  div.classList.add("buttons");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  alphabet.forEach((item) => {
    const key = document.createElement("div");
    key.classList.add("btn");
    key.dataset.key = item;
    key.innerHTML = item;
    div.appendChild(key);
  });

  return div;
}

function createGuessTopPart({ word, hint: hintSentence }) {
  const arr = word.split("");
  console.log(arr);

  const guesses = document.createElement("div");
  guesses.classList.add("guesses");

  const hashes = document.createElement("div");
  hashes.classList.add("hashes");

  arr.forEach((item) => {
    let hash = document.createElement("div");
    let hashUnderline = document.createElement("div");
    hashUnderline.classList.add("hash__item-underline");

    hash.classList.add("hash__item");
    hash.classList.add("hide");
    hash.dataset.letter = `${item}`;
    hash.innerHTML = item;
    hashes.appendChild(hash);
    hashes.appendChild(hashUnderline);
  });

  const hint = document.createElement("div");
  hint.classList.add("hint");

  const hintDiv = document.createElement("div");
  hintDiv.innerHTML = `Hint:<b> ${hintSentence} </b>`;
  hintDiv.classList.add("hint__text");

  const incorrectGuesses = document.createElement("div");
  incorrectGuesses.classList.add("incorrect-guesses");

  const text = document.createElement("h3");
  text.innerHTML = "Incorrect answers:";

  const guessesLeft = document.createElement("span");
  guessesLeft.classList.add("incorrect-guesses__left");
  guessesLeft.innerHTML = inCorrectCount;

  const guessesTotal = document.createElement("span");
  guessesTotal.classList.add("incorrect-guesses__total");
  guessesTotal.innerHTML = " 6";

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

function handleEvents(word, inCorrectCount) {
  const buttons = document.querySelector(".buttons");
  const hashes = document.querySelectorAll(".hash__item");
  const incorrectCountSpan = document.querySelector(".incorrect-guesses__left");

  console.log(inCorrectCount);
  buttons.addEventListener("click", function (event) {
    const letter = event.target.dataset.key;
    // let letterIndex = false;
    // console.log(event.target.dataset.key);

    // if (word.includes(letter)) {
    //     letterIndex = word.indexOf(letter);
    // }
    console.log(correctAnswers);
    if (correctAnswers <= word.length) {
      if (word.includes(letter)) {
        hashes.forEach((item) => {
          if (
            item.dataset.letter === letter &&
            item.classList.contains("hide")
          ) {
            item.classList.remove("hide");
            correctAnswers += 1;
          }
        });
      } else {
        if (inCorrectCount <= 6) {
          inCorrectCount += 1;
          incorrectCountSpan.innerHTML = inCorrectCount;
          addBodyPartToHangMan(inCorrectCount);
        } else {
          alert("Game is lost");
        }
      }
    } else {
      alert("You're the winner");
      count += 1;
    }
  });
}

function addBodyPartToHangMan(inCorrectCount) { }
