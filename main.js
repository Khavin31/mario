function preload() {
	world_start = loadSound("world_start.wav");
	jump=loadSound("jump.wav");
	coin1=loadSound("coin.wav");
	kick=loadSound("kick.wav");
	dead=loadSound("mariodie.wav");
	game_over=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(600,400);
	video.parent('game_console');

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("Model Loaded");
}

function gotPoses(results){
	if (results.length>0) {
		console.log(results);
		noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
	}
}



