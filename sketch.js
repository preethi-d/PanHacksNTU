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
var buttonPos = {};
var buttons = {};
var instrumentNames = [
    "hihat", "boom", "clap", "kick", "openhat", "ride", "snare", "tink", "tom"
];
var instruments = {};
var keyMaps = {
    "d": "hihat",
    "f": "boom",
    "g": "clap",
    "h": "kick",
    "j": "openhat",
    "c": "ride",
    "v": "snare",
    "b": "tink",
    "n": "tom"
}
var premadeSeq = {
    seq1: {
        "hihat": [0, 1, 0, 1],
        "kick": [1, 0, 0, 1],
        "snare": [0, 0, 1, 0]
    }
}

function preload() {
  soundFormats('mp3', 'wav');
  for (var i in instrumentNames) {
      instruments[instrumentNames[i]] = loadSound("/sounds/" + instrumentNames[i] + ".wav");
  }
}

var savedPattern = [];
var isRecording = false;
var recStartTime = 0;

function toggleRecord() {
    if (isRecording) {
    } else {
        savedPattern = [];
        recStartTime = Date.now();
    }
    isRecording = !isRecording;
}

function playbackPattern() {
    for(var i in savedPattern) {
        instruments[savedPattern[i].instr].play(savedPattern[i].time);
    }
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

function test() {
    var p = playFromSequence(generateSequence(16));
    p.setBPM(30);
    p.start();
}

function generateSequence(length) {
    var instrName = instrumentNames;
    var seq = {

    };
    for (var i in instrName) {
        var pattern = [];
        for (var j = 0; j < length; j++) {
            pattern.push(0);
            if (Math.random() < 0.2) {
                pattern[j] = 1;
            }
        }

        seq[instrName[i]] = pattern;
    }
    return seq;
}

function playFromSequence(seq) {
    var part = new p5.Part();

    for (var item in seq) {
        var instr = instruments[item];
        var pattern = seq[item];
        var phrase = new p5.Phrase(item,
            callbackMaker(instr), pattern);
        part.addPhrase(phrase);
    }
    return part;
}

function callbackMaker(instrument) {
    return (time, playbackRate) => {
        instrument.rate(playbackRate)
        instrument.play(time)
    }
}

function keyPressed() {
    if (key == "R") {
        toggleRecord();
    }

    if (key == "P") {
        playbackPattern();
    }
    var instrName = keyMaps[key.toLowerCase()];
    var instr = instruments[keyMaps[key.toLowerCase()]];


    if (instr) {
        instr.play();
        if (isRecording) {
            savedPattern.push({
                time: (Date.now() - recStartTime)/1000,
                instr: instrName
            });
        }
    }
}
