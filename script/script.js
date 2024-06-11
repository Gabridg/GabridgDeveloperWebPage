document.addEventListener("DOMContentLoaded", function() {
  const ics = document.getElementById('close-menu');
  const list = document.getElementById('burger-list');
  const burgerIcon = document.getElementById('burger-icon');
  const main = document.getElementById('main');


burgerIcon.addEventListener('click', function() {
  list.classList.remove('hidden');
  list.classList.add('visible');
  ics.classList.remove('hidden');
  ics.classList.add('visible');
  burgerIcon.classList.add('hidden');
  burgerIcon.classList.remove('visible');
  main.classList.remove('visible');
  main.classList.add('hidden');
});

ics.addEventListener('click', function() {
  list.classList.remove('visible');
  list.classList.add('hidden');
  ics.classList.remove('visible');
  ics.classList.add('hidden');
  burgerIcon.classList.remove('hidden');
  burgerIcon.classList.add('visible');
  main.classList.remove('hidden');
  main.classList.add('visible');
});

const phrases = ["Full Stack Developer.", "UX Designer.", "Videogame Enthusiast.", "MotorSport Enthusiast.", "Father."];
const typingText = document.getElementById('typing-text');
let currentPhraseIndex = 0;

function typePhrase(phrase) {
  typingText.style.width = '0'; // Reset the width to start typing animation
  typingText.textContent = phrase;
  typingText.classList.remove('typing-effect');
  
  // Force reflow to restart animation
  void typingText.offsetWidth;
  
  typingText.classList.add('typing-effect');
}
function nextPhrase() {
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  typePhrase(phrases[currentPhraseIndex]);
}

typingText.addEventListener('animationend', function() {
  // Delay before starting to type the next phrase
  setTimeout(nextPhrase, 1500);
});

// Start the first phrase
typePhrase(phrases[currentPhraseIndex]);
});
