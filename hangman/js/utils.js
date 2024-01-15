export function formatWord(currentWord) {
  return currentWord.split("").reduce((acc, item) => {
    acc.push({ letter: item, hidden: true });
    return acc;
  }, []);
}

export function addBodyPartToHangMan() {}


export function createKeyBoard() {
  const div = document.createElement("div");
  div.classList.add("buttons");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  alphabet.forEach((item) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.dataset.key = item;
    button.textContent = item;
    button.addEventListener("click", onButtonClick);
    div.appendChild(button);
  });

  return div;
}

export function onButtonClick(e) {
  // console.log(e.target.value)
}
export const generateRandomWord = (words) => {
  return words[Math.floor(Math.random() * words.length)];
};