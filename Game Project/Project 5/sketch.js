/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var trees_x;
var clouds;
var mountains;
var canyons;
var collectable;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    trees_x = [-300, 100, 500, 700, 850, 1300];
    
    collectable = [
        {x_pos: 50, y_pos: floorPos_y, isFound: false},
        {x_pos: 650, y_pos: floorPos_y, isFound: false},
        {x_pos: 1400, y_pos: floorPos_y, isFound: false}
    ]; 
    
    canyons = [-200, 900, 1400];
    
    mountains = [
        {x_pos: -550}, 
        {x_pos: 100}, 
        {x_pos: 500}, 
        {x_pos: 1050}];
    
    clouds = [
        {pos_x: -100, pos_y: 300},
        {pos_x: 100, pos_y: 200},
        {pos_x: 600, pos_y: 100},
        {pos_x: 800, pos_y: 200}
    ];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    push();
    translate(scrollPos,0);

	// Draw clouds.
    drawClouds();

	// Draw mountains.
    drawMountains();
    
	// Draw trees.
    drawTrees();
    
	// Draw canyons.
    for (var i = 0; i < canyons.length; i++)
    {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
    }
    
	// Draw collectable items.
    for (var i = 0; i < collectable.length; i++)
    {   
        if (collectable[i].isFound == false)
        {
            drawCollectable(collectable[i]);
            checkCollectable(collectable[i]);
        }
    } 

    pop();
    
	// Draw game character.
	
	drawGameChar();

	// Logic to make the game character move or the background scroll.
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
    
    if (isPlummeting == true)
    {
        gameChar_y += 5;
    }

	// Logic to make the game character rise and fall.
    if (gameChar_y < floorPos_y)
    {
        gameChar_y += 2;
        isFalling = true;
    }
    else
    {
        isFalling = false;
    }
    
	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

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
    if (keyCode == 32 && gameChar_y == floorPos_y)
    {
        gameChar_y -= 100;
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


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
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
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    for (var i = 0; i < clouds.length; i++)
    {
        fill(255);
        ellipse(clouds[i].pos_x, clouds[i].pos_y, 50, 50);
        ellipse(clouds[i].pos_x + 30, clouds[i].pos_y, 30, 30);
        ellipse(clouds[i].pos_x + 50, clouds[i].pos_y, 20, 20);
    }
}

// Function to draw mountains objects.
function drawMountains()
{
    for (var i = 0; i < mountains.length; i++)
    {
        noStroke();
        fill(128, 128, 128);
        triangle(mountains[i].x_pos + 50, 435, mountains[i].x_pos + 200, 100, mountains[i].x_pos + 350, 435)

        // ADD SNOW CAPS TO THE MOUNTAIN
        noStroke();
        fill(220, 220, 220);
        beginShape();
        vertex(mountains[i].x_pos + 200, 100);
        vertex(mountains[i].x_pos + 150, 210);
        vertex(mountains[i].x_pos + 200, 175);
        vertex(mountains[i].x_pos + 250, 210);
        vertex(mountains[i].x_pos + 200, 100);
        endShape();
    }
}

// Function to draw trees objects.
function drawTrees()
{
    for (var i = 0; i < trees_x.length; i++)
    {
        stroke(0);
        strokeWeight(1);
        fill(180, 80, 0); // THE LEAVES
        ellipse(trees_x[i], floorPos_y - 35, 40, 100);
        fill(0, 150, 0); // THE TRUNK
        ellipse(trees_x[i], floorPos_y - 95, 120, 120);
    }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    noStroke();
    fill(100,155,255); // THE VALLEY
    rect(t_canyon , 430, 200, 370);
        
    // LEFT END OF CANYON ----------       
    fill(154, 205, 50);
    rect(t_canyon, floorPos_y, 20, 300)
    triangle(t_canyon + 20, floorPos_y, 
             t_canyon + 20, height, 
             t_canyon + 80, height);  
    
    fill(0,155,0);
    triangle(t_canyon, floorPos_y, 
             t_canyon, height, 
             t_canyon + 60, height);

    // RIGHT END OF CANYON ---------
    fill(154, 205, 50);
    rect(t_canyon + 180, floorPos_y, 20, 300)
    triangle(t_canyon + 180, floorPos_y, 
             t_canyon + 180, height, 
             t_canyon +120, height);
    
    fill(0,155,0);
    triangle(t_canyon + 200, floorPos_y, 
             t_canyon + 140, height, 
             t_canyon + 200, height);
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon)
{
    if((gameChar_world_x > t_canyon + 25 
        && gameChar_world_x < t_canyon + 175) 
       && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }    
}


// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    stroke(0);
    fill(255, 0 , 0); // THE BODY OF THE BASKETBALL
    ellipse(t_collectable.x_pos, t_collectable.y_pos, 35);
    ellipse(t_collectable.x_pos - 10, t_collectable.y_pos, 15, 22);
    ellipse(t_collectable.x_pos + 10, t_collectable.y_pos, 15, 22); 
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    if (dist(gameChar_world_x, gameChar_y, 
             t_collectable.x_pos, t_collectable.y_pos) < 20)
    {
        t_collectable.isFound = true;
    }
}
