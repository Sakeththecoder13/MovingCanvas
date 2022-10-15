function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500)
    canvas.position(530, 200)

     
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is loaded!');
}

function draw(){
    background('#AFE1AF');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
    
