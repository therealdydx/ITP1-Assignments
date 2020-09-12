/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyon;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    trees_x = [-300, 100, 500, 700, 850, 1300];
    clouds = [
        {pos_x: -100, pos_y: 300},
        {pos_x: 100, pos_y: 200},
        {pos_x: 600, pos_y: 100},
        {pos_x: 800, pos_y: 200}
    ];
    mountains = [-550, 100, 500, 1024];
    canyon = [-200, 900];
    collectable = [50, 650];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    push();
    translate(scrollPos, 0);
	// DRAW CLOUDS. ----------------------------------------------------------------
    for (var i = 0; i < clouds.length; i++)
    {
        fill(255);
        ellipse(clouds[i].pos_x, clouds[i].pos_y, 50, 50);
        ellipse(clouds[i].pos_x + 30, clouds[i].pos_y, 30, 30);
        ellipse(clouds[i].pos_x + 50, clouds[i].pos_y, 20, 20);
    }
    // DRAW CANYONS ----------------------------------------------------------------
    for (var i = 0; i < canyon.length; i++)
    {
        noStroke();
        fill(100,155,255); // THE VALLEY
        rect(canyon[i] , 430, 200, 370);
        
        // LEFT END OF CANYON
        fill(154, 205, 50);
        rect(canyon[i], floorPos_y, 20, 300)
        triangle(canyon[i] + 20, floorPos_y, canyon[i] + 20, height, canyon[i] + 80, height);
        fill(0,155,0);
        triangle(canyon[i], floorPos_y, canyon[i], height, canyon[i] + 60, height);

        // RIGHT END OF CANYON
        fill(154, 205, 50);
        rect(canyon[i] + 180, floorPos_y, 20, 300)
        triangle(canyon[i] + 180, floorPos_y, canyon[i] + 180, height, canyon[i] +120, height);
        fill(0,155,0);
        triangle(canyon[i] + 200, floorPos_y, canyon[i] + 140, height, canyon[i] + 200, height);
    }
	// DRAW MOUNTAINS. -------------------------------------------------------------
    for (var i = 0; i < mountains.length; i++)
    {
        noStroke();
        fill(128, 128, 128);
        triangle(mountains[i] + 50, 435, mountains[i] + 200, 100, mountains[i] + 350, 435)

        // ADD SNOW CAPS TO THE MOUNTAIN
        noStroke();
        fill(220, 220, 220);
        beginShape();
        vertex(mountains[i] + 200, 100);
        vertex(mountains[i] + 150, 210);
        vertex(mountains[i] + 200, 175);
        vertex(mountains[i] + 250, 210);
        vertex(mountains[i] + 200, 100);
        endShape();
    }
	// DRAW TREES. -----------------------------------------------------------------
    for (var i = 0; i < trees_x.length; i++)
    {
        stroke(0);
        strokeWeight(1);
        fill(180, 80, 0); // THE LEAVES
        ellipse(trees_x[i], floorPos_y - 35, 40, 100);
        fill(0, 150, 0); // THE TRUNK
        ellipse(trees_x[i], floorPos_y - 95, 120, 120);
    }
	// DRAW COLLECTABLE ITEMS ------------------------------------------------------
    for (var i = 0; i < collectable.length; i++)
    {
        stroke(0);
        fill(255, 0 , 0); // THE BODY OF THE BASKETBALL
        ellipse(collectable[i], floorPos_y, 35);
        ellipse(collectable[i] - 10, floorPos_y, 15, 22);
        ellipse(collectable[i] + 10, floorPos_y, 15, 22); 
    }
    pop();
    
	// Draw the game character - this must be last ---------------------------------
    // THE GAME CHARACTER
    fill(222, 184, 135); // THE HEAD
    ellipse(gameChar_x, gameChar_y - 50, 25);

    fill(0, 255, 0); // THE BODY AND ARMS
    rect(gameChar_x - 10, gameChar_y - 36, 20, 15);
    fill(0); // THE LEGS OF THE BODY
    rect(gameChar_x + 2, gameChar_y - 20, 3, 12);
    rect(gameChar_x - 5, gameChar_y - 20, 3, 12);

    fill(0, 0, 255); // THE BOARD
    rect(gameChar_x - 15, gameChar_y - 10, 30, 8);
    fill(0); // THE WHEELS OF THE BOARD
    ellipse(gameChar_x - 15, gameChar_y - 6, 5, 15);
    ellipse(gameChar_x + 15, gameChar_y - 6, 5, 15);

    
	//////// Game character logic /////// ------------------------------------------
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}
// ---------------------------------------------------------------------------------
function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
