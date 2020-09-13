/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    
    canyon = {
        x_pos: 0,
        width: 100
    }
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    noStroke();
    fill(100,155,255); // THE VALLEY
    rect(canyon.x_pos , 430, 200, 370);

    // LEFT END OF CANYON
    fill(154, 205, 50);
    rect(canyon.x_pos, floorPos_y, 20, 300)
    triangle(canyon.x_pos + 20, floorPos_y, canyon.x_pos + 20, height, canyon.x_pos + 80, height);
    fill(0,155,0);
    triangle(canyon.x_pos, floorPos_y, canyon.x_pos, height, canyon.x_pos + 60, height);
    
    // RIGHT END OF CANYON
    fill(154, 205, 50);
    rect(canyon.x_pos + 180, floorPos_y, 20, 300)
    triangle(canyon.x_pos + 180, floorPos_y, canyon.x_pos + 180, height, canyon.x_pos +120, height);
    fill(0,155,0);
    triangle(canyon.x_pos + 200, floorPos_y, canyon.x_pos + 140, height, canyon.x_pos + 200, height);

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        fill(222, 184, 135); // the head
        ellipse(gameChar_x, gameChar_y - 58, 15, 25);

        fill(0, 255, 0); // the body
        rect(gameChar_x - 5, gameChar_y - 44, 10, 15);

        // the arms
        rect(gameChar_x - 1, gameChar_y - 42, 10, 4);
        rect(gameChar_x + 7, gameChar_y - 42, 4, 10);
        rect(gameChar_x - 10, gameChar_y - 38, 6, 5);

        fill(0); // the legs
        rect(gameChar_x - 2, gameChar_y - 28, 5, 12);

        fill(0); // the wheels
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        fill(222, 184, 135); // the head
        ellipse(gameChar_x, gameChar_y - 58, 15, 25);

        fill(0, 255, 0); // the body
        rect(gameChar_x - 5, gameChar_y - 44, 10, 15);

        // the arms
        rect(gameChar_x + 5, gameChar_y - 38, 6, 5);
        rect(gameChar_x - 12, gameChar_y - 42, 10, 4);
        rect(gameChar_x - 12, gameChar_y - 42, 4, 10);

        fill(0); // the legs
        rect(gameChar_x - 2, gameChar_y - 28, 5, 12);

        fill(0); // the wheels
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

	}
	else if(isLeft)
	{
		// add your walking left code
        fill(222, 184, 135); // the head
        ellipse(gameChar_x, gameChar_y - 50, 15, 25);

        fill(0, 255, 0); // the body
        rect(gameChar_x - 5, gameChar_y - 36, 10, 15);

        // the arms
        rect(gameChar_x - 1, gameChar_y - 34, 10, 4);
        rect(gameChar_x + 7, gameChar_y - 34, 4, 10);
        rect(gameChar_x - 10, gameChar_y - 30, 6, 5);

        fill(0); // the legs
        rect(gameChar_x - 2, gameChar_y - 20, 5, 12);

        fill(0); // the wheels
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

	}
	else if(isRight)
	{
		// add your walking right code
        fill(222, 184, 135); // the head
        ellipse(gameChar_x, gameChar_y - 50, 15, 25);

        fill(0, 255, 0); // the body
        rect(gameChar_x - 5, gameChar_y - 36, 10, 15);

        // the arms
        rect(gameChar_x + 5, gameChar_y - 30, 6, 5);
        rect(gameChar_x - 12, gameChar_y - 34, 10, 4);
        rect(gameChar_x - 12, gameChar_y - 34, 4, 10);

        fill(0); // the legs
        rect(gameChar_x - 2, gameChar_y - 20, 5, 12);

        fill(0); // the wheels
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        fill(222, 184, 135); // the head
        ellipse(gameChar_x, gameChar_y - 60, 25);

        fill(0, 255, 0); // the body and arms
        rect(gameChar_x - 10, gameChar_y - 46, 20, 15);
        rect(gameChar_x - 15, gameChar_y - 46, 30, 5);

        fill(0); // the legs
        rect(gameChar_x + 2, gameChar_y - 30, 3, 12);
        rect(gameChar_x - 5, gameChar_y - 30, 3, 12);

        fill(0, 0, 255); // the board
        rect(gameChar_x - 15, gameChar_y - 14, 30, 8);

        fill(0); // the wheels
        ellipse(gameChar_x - 15, gameChar_y - 10, 5, 15);
        ellipse(gameChar_x + 15, gameChar_y - 10, 5, 15);
	}
	else
	{
		// add your standing front facing code
        fill(222, 184, 135); // the head
        ellipse(gameChar_x, gameChar_y - 50, 25);
        
        fill(0, 255, 0); // the body
        rect(gameChar_x - 10, gameChar_y - 36, 20, 15);
        
        fill(0); // the legs
        rect(gameChar_x + 2, gameChar_y - 20, 3, 12);
        rect(gameChar_x - 5, gameChar_y - 20, 3, 12);
        
        fill(0, 0, 255); // the board
        rect(gameChar_x - 15, gameChar_y - 10, 30, 8);
        
        fill(0); // the wheels
        ellipse(gameChar_x - 15, gameChar_y - 6, 5, 15);
        ellipse(gameChar_x + 15, gameChar_y - 6, 5, 15);
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if (isLeft == true)
    {
        gameChar_x -= 1;
    }
    if (isRight == true)
    {
        gameChar_x += 1;
    }
    if (gameChar_y < floorPos_y)
    {
        gameChar_y += 2;
        isFalling = true;
    }
    else
    {
        isFalling = false;
    }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if (keyCode == 37)
    {
        isLeft = true;
    }
    if (keyCode == 39)
    {
        isRight = true;
    }
    if (keyCode == 32 && gameChar_y == floorPos_y)
    {
        gameChar_y -= 100;
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    if (keyCode == 37)
    {
        isLeft = false;
    }
    else if (keyCode == 39)
    {
        isRight = false;
    }
}
