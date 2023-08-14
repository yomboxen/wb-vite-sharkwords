import './style.css';
import getRandomWord from './src/randomWord.js'
import setSharkImage from './src/sharkImage.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

element.innerHTML = `<img src="${images[imageIdx]}"/>`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
