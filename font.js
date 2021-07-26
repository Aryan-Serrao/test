var leftWristX = 0;

var rightWristX = 0;

var difference = 0;

function preload () {
    
}

function setup () {
    
    canvas = createCanvas(550, 550);
    
    canvas.position(700, 150);
    
    video = createCapture(VIDEO);
    
    video.size(550, 500);
    
    video.position(100, 175);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    
    poseNet.on('pose', gotPoses);
    
}

function draw () {
    
    background("goldenrod");

    document.getElementById("answer").innerHTML = "The Size Of The Text Is : " + difference;

    textSize(difference);
    fill("black");
    text("You're Awesome!", 20, 275);
    
}

function modelLoaded () {
    
    console.log("PoseNet Initialized!!!");
    
}

function gotPoses (results) {
    
    if (results.length > 0) {
        
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;

        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = " + leftWristX + "<br><br>" + "Right Wrist X = " + rightWristX + "<br><br>" + "The Font Size Is : " + difference);
        
    }
    
}