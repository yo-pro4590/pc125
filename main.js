noseX="";
noseY="";
function preload(){
mustage= loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup(){
    canvas = createCanvas(300, 300);

    canvas.center();

    video=createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet=ml5.poseNet(video, modelLoded);
   poseNet.on('pose', gotPoses);
}

function modelLoded(){
    console.log('Posenet Is Initoalized');
}

function gotPoses(results){
    
    if(results.length > 0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        
    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustage,noseX-15, noseY, 30, 30)
}

function take_snapshot(){
    save('mustage.png')
}