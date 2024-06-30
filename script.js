let speech = new SpeechSynthesisUtterance();
let voices=[];
let voiceSelect =  document.querySelector("select");

window.speechSynthesis.onvoiceschanged=() => {
    voices=window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = voice.name;
        voiceSelect.appendChild(option);
    });
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});



document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});