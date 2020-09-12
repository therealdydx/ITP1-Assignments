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

var canyon;
var collectable;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/1.25;
	gameChar_y = floorPos_y;

    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;

    canyon = {
        x_pos: 300,
        width: 100
    }

    collectable = {
        x_pos: 100,
        y_pos: 100,
        size: 1,
        isFound: false
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


    // DRAW THE COLLECTABLE ----------

    if (dist(gameChar_x, gameChar_y, collectable.x_pos + 150, collectable.y_pos + 320) < 20)
    {
        collectable.isFound = true;
    }

    if (collectable.isFound == false)
    {
        stroke(0);
        fill(255, 0 , 0); // THE BODY OF THE BASKETBALL
        ellipse(collectable.x_pos + 150 * collectable.size,
                collectable.y_pos + 320,
                35 * collectable.size);
        ellipse(collectable.x_pos + 140 * collectable.size,
                collectable.y_pos + 320,
                15 * collectable.size,
                22 * collectable.size);
        ellipse(collectable.x_pos + 160 * collectable.size,
                collectable.y_pos + 320,
                15 * collectable.size,
                22 * collectable.size);
    }


		//the game character
		if(isLeft && isFalling)
		{
		// ADD YOUR JUMPING-LEFT CODE
        fill(222, 184, 135); // THE HEAD
        ellipse(gameChar_x, gameChar_y - 58, 15, 25);

        fill(0, 255, 0); // THE BODY
        rect(gameChar_x - 5, gameChar_y - 44, 10, 15);
        // THE ARMS OF THE BODY
        rect(gameChar_x - 1, gameChar_y - 42, 10, 4);
        rect(gameChar_x + 7, gameChar_y - 42, 4, 10);
        rect(gameChar_x - 10, gameChar_y - 38, 6, 5);
        fill(0); // THE LEGS OF THE BODY
        rect(gameChar_x - 2, gameChar_y - 28, 5, 12);

        fill(0); // THE WHEELS
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

		}
		else if(isRight && isFalling)
		{
		// ADD YOUR JUMPING RIGHT CODE
        fill(222, 184, 135); // THE HEAD
        ellipse(gameChar_x, gameChar_y - 58, 15, 25);

        fill(0, 255, 0); // THE BODY
        rect(gameChar_x - 5, gameChar_y - 44, 10, 15);
        // THE ARMS OF THE BODY
        rect(gameChar_x + 5, gameChar_y - 38, 6, 5);
        rect(gameChar_x - 12, gameChar_y - 42, 10, 4);
        rect(gameChar_x - 12, gameChar_y - 42, 4, 10);
        fill(0); // THE LEGS OF THE BODY
        rect(gameChar_x - 2, gameChar_y - 28, 5, 12);

        fill(0); // THE WHEELS
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

		}
		else if(isLeft)
		{
		// ADD YOUR WALKING LEFT CODE
        fill(222, 184, 135); // THE HEAD
        ellipse(gameChar_x, gameChar_y - 50, 15, 25);

        fill(0, 255, 0); // THE BODY
        rect(gameChar_x - 5, gameChar_y - 36, 10, 15);

        // THE ARMS OF THE BODY
        rect(gameChar_x - 1, gameChar_y - 34, 10, 4);
        rect(gameChar_x + 7, gameChar_y - 34, 4, 10);
        rect(gameChar_x - 10, gameChar_y - 30, 6, 5);
        fill(0); // THE LEGS OF THE BODY
        rect(gameChar_x - 2, gameChar_y - 20, 5, 12);

        fill(0); // THE WHEELS
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

		}
		else if(isRight)
		{
		// ADD YOUR WALKING RIGHT CODE
        fill(222, 184, 135); // THE HEAD
        ellipse(gameChar_x, gameChar_y - 50, 15, 25);

        fill(0, 255, 0); // THE BODY
        rect(gameChar_x - 5, gameChar_y - 36, 10, 15);
        // THE ARMS OF THE BODY
        rect(gameChar_x + 5, gameChar_y - 30, 6, 5);
        rect(gameChar_x - 12, gameChar_y - 34, 10, 4);
        rect(gameChar_x - 12, gameChar_y - 34, 4, 10);
        fill(0); // THE LEGS OF THE BODY
        rect(gameChar_x - 2, gameChar_y - 20, 5, 12);

        fill(0); // THE WHEELS
        ellipse(gameChar_x, gameChar_y - 6, 15, 15);

		}
		else if(isFalling || isPlummeting)
		{
		// ADD YOUR JUMPING FACING FORWARD CODE
        fill(222, 184, 135); // THE HEAD
        ellipse(gameChar_x, gameChar_y - 60, 25);

        fill(0, 255, 0); // THE BODY AND ARMS
        rect(gameChar_x - 10, gameChar_y - 46, 20, 15);
        rect(gameChar_x - 15, gameChar_y - 46, 30, 5);
        fill(0); // THE LEGS OF THE BODY
        rect(gameChar_x + 2, gameChar_y - 30, 3, 12);
        rect(gameChar_x - 5, gameChar_y - 30, 3, 12);

        fill(0, 0, 255); // THE BOARD
        rect(gameChar_x - 15, gameChar_y - 14, 30, 8);
        fill(0); // THE WHEELS OF THE BOARD
        ellipse(gameChar_x - 15, gameChar_y - 10, 5, 15);
        ellipse(gameChar_x + 15, gameChar_y - 10, 5, 15);
		}
		else
		{
		// ADD YOUR STANDING FRONT FACING CODE
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
		}


	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    // IF THE CHARACTER IS MOVING LEFT
    if (isLeft == true)
    {
        gameChar_x -= 3;
    }
    // IF THE CHARACTER IS MOVING RIGHT
    if (isRight == true)
    {
        gameChar_x += 3;
    }
    // IF THE CHARACTER IS FALLING AFTER JUMPING
    if (gameChar_y < floorPos_y)
    {
        gameChar_y += 2;
        isFalling = true;
    }
    // RESET THE ISFALLING VARIABLE AFTER CHARACTER LANDS ON FLOOR
    else
    {
        isFalling = false;
    }
    // IF CHARACTER HAS STILL NOT JUMPED AFTER REACHING THE VALLEY
    if((gameChar_x > canyon.x_pos + 25 && gameChar_x < canyon.x_pos + 175) && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
    if (isPlummeting == true)
    {
        gameChar_y += 5;
    }
    // IF CHARACTER HAS FALLEN DOWN THE VALLEY
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
        console.log("left arrow")
        isLeft = true;
    }
    if (keyCode == 39)
    {
        console.log("right arrow")
        isRight = true;
    }
    if (keyCode == 32 && gameChar_y == floorPos_y)
    {
        console.log("jump")
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
        console.log("left arrow")
        isLeft = false;
    }
    else if (keyCode == 39)
    {
        console.log("right arrow")
        isRight = false;
    }
}
