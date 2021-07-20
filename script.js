// Author: Myles Wilkerson

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;

// Global ML Variables
let mobilenet;
let img;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 400);
  canvas.parent(canvasDiv);

  textDiv = createDiv();
  textP = createP("Model loading, please wait....");

  textP.parent(textDiv);

  img = loadImage("images/man.jpg", imageLoaded);
}

function draw() {

}

function imageLoaded() { 
  // draw image to canvas
  image(img, 0, 0, width, height);
  // initialize the model 
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

function modelReady() {
  mobilenet.classify(canvas, gotResults);
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].label;
    let confidence = round(results[0].confidence, 2);
    textP.html("Label: " + label + " - Confidence " + confidence);



  }
}
