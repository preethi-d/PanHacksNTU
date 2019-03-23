var song;
var button;
var hihat = '/sounds/hihat.wav';
var boom = '/sounds/boom.wav';
var clap = '/sounds/clap.wav';
var kick = '/sounds/kick.wav';
var openhat = '/sounds/openhat.wav';
var ride = '/sounds/ride.wav';
var snare = '/sounds/snare.wav';
var tink = '/sounds/tink.wav';
var tom = '/sounds/tom.wav';

function preload() {
  soundFormats('mp3', 'wav');
  song = loadSound(snare);

}

function setup() {
  // put setup code here
  createCanvas(200,200);
  song.setVolume(10);
  song.play();
  //button = createButton("play");
  //button.mousePressed(togglePlay);
  //background(51);
}

function draw() {
  // put drawing code here
  background('red');

}
