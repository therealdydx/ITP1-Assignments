/*
The case of the Python Syndicate
Stage 2


Officer: 3185280
CaseNum: 301-1-34380754-3185280

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Bones karpinski

- The variables for Bones karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Bones karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var cecilKarpinskiImage;
var linaLovelaceImage;
var bonesKarpinskiImage;
var annaKarpinskiImage;
var robbieKrayImage;
var countessHamiltonImage;


var bonesKarpinskiXCoordinate = 701;
var bonesKarpinskiYCoordinate = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImage, bonesKarpinskiXCoordinate, bonesKarpinskiYCoordinate);
    image(cecilKarpinskiImage, bonesKarpinskiXCoordinate - 586, bonesKarpinskiYCoordinate);
	image(linaLovelaceImage, bonesKarpinskiXCoordinate - 293, bonesKarpinskiYCoordinate);
	image(annaKarpinskiImage, bonesKarpinskiXCoordinate - 586, bonesKarpinskiYCoordinate + 269);
	image(robbieKrayImage, bonesKarpinskiXCoordinate - 293, bonesKarpinskiYCoordinate + 269); 
	image(countessHamiltonImage, bonesKarpinskiXCoordinate, bonesKarpinskiYCoordinate + 269);

    

}