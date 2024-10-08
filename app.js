// Check for browser compatibility
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  console.log('Your browser support speech recognitioin.');

// Create a new instance of SpeechRecognition
const recognition = new SpeechRecognition();

// Set recognition properties
recognition.continous = true;
recognition.interimResults = false;
recognition.lang = 'en-US';

// Start recognition when the button is clicked
const startBtn = document.getElementById('startBtn');
const output = document.getElementById('output');

startBtn.addEventListener('click', () => {
  recognition.start();
  console.log('Voice recognition started. Speak into the microphone.');
});

// Handle the result event
recognition.addEvenetListener('result', (event) => {
  const transcript = event.results[event.resultIndex][0].transcript;
  output.textContent = transcript;) 

if (transcript/tolowerCase().includes('hello')) {
  output.textContent += ' -You said hello!';
  }
});

// Handle errors
recognition.addEventListener('error', (event) => {
  console.error('Speech recognition error"', event.error);
});
} else {
  console.log('Speech recognition is not supported in this browser.');
}
