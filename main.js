

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    classifying = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KeoD6Vc-m/model.json", modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifying.classify(video, gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("No errors found.");
        console.log(result);
        document.getElementById("object_result").innerHTML = result[0].label;
        document.getElementById("accuracy_result").innerHTML = result[0].confidence.toFixed(4);
    }
}

function modelLoaded() {
    console.log("Teachable Machine model has loaded.");
}
