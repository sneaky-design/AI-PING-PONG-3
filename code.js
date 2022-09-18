function setup(){
    canvas =  createCanvas(700,600);
  
    video= createCapture(VIDEO);
    video.size(800,400);
  
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
    video.parent('canvas');
  }
  function modelLoaded(){
    console.log("model Loaded.");
  }
  function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightwristX=results[0].pose.right.wrist.X
        rightwristY=results[0].pose.right.wrist.Y
        console.log(results)
    }
  }