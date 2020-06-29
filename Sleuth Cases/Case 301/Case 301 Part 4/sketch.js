/*
The case of the Python Syndicate
Stage 4

Officer: 3185280
CaseNum: 301-3-62371032-3185280

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bonesKarpinskiImg;
var annaKarpinskiImg;
var cecilKarpinskiImg;
var pawelKarpinskiImg;
var countessHamiltonImg;
var rockyKrayImg;

var annaKarpinskiObject;

//declare your new objects below
var cecilKarpinskiObject;
var bonesKarpinskiObject;
var pawelKarpinskiObject;
var countessHamiltonObject;
var rockyKrayObject;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	rockyKrayImg = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObject = {
		x: 408,
		y: 40,
		image: annaKarpinskiImg
	};

	//define your new objects below
    createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObject = {
		x: 701,
		y: 40,
		image: cecilKarpinskiImg
	};
    
    createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObject = {
		x: 115,
		y: 40,
		image: bonesKarpinskiImg
	};
    
    createCanvas(photoBoard.width, photoBoard.height);
	pawelKarpinskiObject = {
		x: 115,
		y: 309,
		image: pawelKarpinskiImg
	};
    
    createCanvas(photoBoard.width, photoBoard.height);
	countessHamiltonObject = {
		x: 408,
		y: 309,
		image: countessHamiltonImg
	};
    
    createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObject = {
		x: 701,
		y: 309,
		image: rockyKrayImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	image(countessHamiltonObject.image, countessHamiltonObject.x, countessHamiltonObject.y);
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);


}