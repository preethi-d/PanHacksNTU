let bg;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;

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

  createCanvas(1430,690);
  bg = loadImage('assets/drum.jpg');
}
  // use the next line to link what happens when u press the button
  // button.mousePressed();

function draw() {
  background(bg);

  fill('white');
  ellipse(50, 200, 80, 80);

  fill('white');
  ellipse(360, 160, 80, 80);

  fill('white');
  ellipse(715, 120, 80, 80);

  fill('white');
  ellipse(1065, 160, 80, 80);

  fill('white');
  ellipse(1380, 200, 80, 80);

  fill('white');
  ellipse(185, 440, 80, 80);

  fill('white');
  ellipse(536, 400, 80, 80);

  fill('white');
  ellipse(880, 400, 80, 80);

  fill('white');
  ellipse(1220, 440, 80, 80);
}
