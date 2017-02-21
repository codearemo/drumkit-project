window.addEventListener('keydown', function(e) {
    var audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    var key = document.querySelector(`.myClass[data-key='${e.keyCode}']`);
    
    if(!audio) return;  //stops function once pressed key doesn't have an element of audio
    audio.play();   // plays sound
    audio.currentTime = 0;  //resets time of start.
    key.classList.add("playing");
});


var keys = document.querySelectorAll(".myClass");
keys.forEach(key => key.addEventListener("transitionend", function(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}));


