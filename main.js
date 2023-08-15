import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord } from './src/word.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

let sharkImgEl = document.querySelector('#shark-img')

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(sharkImgEl, numWrong);
  setupWord(document.querySelector('#word-container'), word);
  
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
