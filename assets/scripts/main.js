// main.js


var volumeNumber = document.getElementById('volume-number');
var volumeSlider = document.getElementById('volume-slider');
var volumeImg = document.getElementById('volume-image');
var soundImg = document.getElementById('sound-image');
var airHorn = document.getElementById('radio-air-horn');
var carHorn = document.getElementById('radio-car-horn');
var partyHorn = document.getElementById('radio-party-horn');
var audioSound = document.getElementById('horn-sound');
var honkButton = document.getElementById('honk-btn');
var form = document.getElementById('party-horn-form');

volumeNumber.addEventListener("input", changeSliderVolume);
volumeSlider.addEventListener("input", changeNumVolume);

function changeSliderVolume() {
    volumeSlider.value = volumeNumber.value; 
    changeVolIcon();
}

function changeNumVolume() {
    volumeNumber.value = volumeSlider.value;
    changeVolIcon();
}

function changeVolIcon() {
    var volume = volumeNumber.value;
    audioSound.volume = volume/100;
    honkButton.disabled = false;

    if(volume >= 67 && volume <= 100) {
        volumeImg.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (volume >= 34 && volume < 67) {
        volumeImg.src = "./assets/media/icons/volume-level-2.svg";
    } 
    else if (volume >= 1 && volume < 34) {
        volumeImg.src = "./assets/media/icons/volume-level-1.svg";
    } 
    else if (volume == 0) {
        volumeImg.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    } 
}

airHorn.addEventListener("change", changeRadio);
carHorn.addEventListener("change", changeRadio);
partyHorn.addEventListener("change", changeRadio);

function changeRadio() {
    if(airHorn.checked) {
        soundImg.src = "./assets/media/images/air-horn.svg";
        audioSound.src = "./assets/media/audio/air-horn.mp3";
    } 
    else if(carHorn.checked) {
        soundImg.src = "./assets/media/images/car.svg";
        audioSound.src = "./assets/media/audio/car-horn.mp3";
    }
    else if(partyHorn.checked) {
        soundImg.src = "./assets/media/images/party-horn.svg";
        audioSound.src = "./assets/media/audio/party-horn.mp3";
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    audioSound.play();
});