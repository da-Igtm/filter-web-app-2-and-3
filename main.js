noseX=0;
noseY=0;

function preload(){
mustache=loadImage("https://i.postimg.cc/ncDMw40n/m.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
     
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",got_poses)
}
function draw(){
image(video,0,0,300,300);
image(mustache,noseX-20,noseY-15,50,50);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function got_poses(results){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}
function send(){
    save("filter.png");
}