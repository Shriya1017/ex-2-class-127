song="";

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("posenet is Initialized");
}

function draw(){
    image(video,0,0,600,500);
     fill("#4287f5");
     stroke("#f5427b");
}

function preload(){
    song=loadSound("music.mp3");
}

function Play(){
    song.play();
    
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    
}