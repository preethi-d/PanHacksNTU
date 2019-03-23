var song;
var hihatButton;
var hihat;
var boomButton;
var boom;
var clapButton;
var clap;
var kickButton;
var kick;
var openhatButton;
var openhat;
var rideButton;
var ride;
var snareButton;
var snare;
var tinkButton;
var tink;
var tomButton;
var tom;

function preload() {
  soundFormats('mp3', 'wav');
  snare = loadSound('/sounds/snare.wav');
  hihat = loadSound('/sounds/hihat.wav');
  boom = loadSound('/sounds/boom.wav');
  clap = loadSound('/sounds/clap.wav');
  kick = loadSound('/sounds/kick.wav');
  openhat = loadSound('/sounds/openhat.wav');
  ride = loadSound('/sounds/ride.wav');
  tink = loadSound('/sounds/tink.wav');
  tom = loadSound('/sounds/tom.wav');

}

function setup() {

}

function draw() {
  // put drawing code here
  background(0);
}

function keyPressed() {
  console.log(key.toLowerCase());
  switch (key.toLowerCase()) {
    case "d":
      hihat.play();
      break;
    case "f":
      boom.play();
      break;
    case "g":
      clap.play();
      break;
    case "h":
      kick.play();
      break;
    case "j":
      openhat.play();
      break;
    case "c":
      ride.play();
      break;
    case "v":
      snare.play();
      break;
    case "b":
      tink.play();
      break;
    case "n":
      tom.play();
      break;

  }
}
