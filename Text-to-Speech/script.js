var convert = document.getElementById('convert'),
  voiceIco = document.getElementById('voiceIco'),
  speech = document.getElementById('inputText'),
  count = 1;
speech.addEventListener('change', function() {
  speechText = this.value;
  speechSynthesis.cancel();
  convert.innerHTML = "Play";
});
convert.addEventListener('click', function() {
  if (!speechSynthesis.speaking || speechSynthesis.pause()) {
    speechText = speech.value;
    var speechVoice = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    speechVoice.voice = voices[2];
    speechVoice.text = speechText;
    speechVoice.lang = 'en-IN';
    speechSynthesis.speak(speechVoice);
  }
  if (count == 1) {
    convert.innerHTML = "Pause";
    speechSynthesis.resume()
    setTimeout(() => {
      count = 2;
    }, 300);
  } else {
    speechSynthesis.paused
    convert.innerHTML = "Play";
    count = 1;
  }
  setInterval(() => {
    if (!speechSynthesis.speaking && count == 2) {
      convert.innerHTML = "Play";
      count = 1;
      console.log(count)
    }
  }, 100);
})