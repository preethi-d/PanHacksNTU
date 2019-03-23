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
    createCanvas(1430,690);
  bg = loadImage('assets/drum.jpg');
  
  // put setup code here
  song.setVolume(10);
  song.play();
  //button = createButton("play");
  //button.mousePressed(togglePlay);
  //background(51);
  
  // space out the buttons along the window
  button1 = createButton('sound');
  button1.position(10, 200);

  button2 = createButton('sound');
  button2.position(360, 160);

  button3 = createButton('sound');
  button3.position(715, 120);

  button4 = createButton('sound');
  button4.position(1065, 160);

  button5 = createButton('sound');
  button5.position(1380, 200);

  button6 = createButton('sound');
  button6.position(185, 440);

  button7 = createButton('sound');
  button7.position(536, 400);

  button8 = createButton('sound');
  button8.position(880, 400);

  button9 = createButton('sound');
  button9.position(1220, 440);

  // use the next line to link what happens when u press the button
  // button.mousePressed();
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
  
function draw() {
  background(bg);
  // display all the buttons
}
