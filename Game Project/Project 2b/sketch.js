/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    // object canyon
    canyon = {
        x_pos: 0,
        width: 100
	}
    
    collectable = {
        x_pos: 100,
        y_pos: 100,
        size: 1
    }
    
    mountain = {
        x: 200,
        size: 1
    }
    
    cloud = {
        x: 300,
        scale: 1.25
    }
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
	// GAME CHARACTER BELOW ----------
    fill(222, 184, 135); // THE HEAD
    ellipse(gameChar_x, gameChar_y - 50, 25);
    
    fill(0, 255, 0); // THE BODY
    rect(gameChar_x - 10, gameChar_y - 36, 20, 15);
    
    fill(0); // THE LEGS
    rect(gameChar_x + 2, gameChar_y - 20, 3, 12);
    rect(gameChar_x - 5, gameChar_y - 20, 3, 12);
    
    fill(0, 0, 255); // THE BOARD
    rect(gameChar_x - 15, gameChar_y - 10, 30, 8);
    
    fill(0); // THE WHEELS
    ellipse(gameChar_x - 15, gameChar_y - 6, 5, 15);
    ellipse(gameChar_x + 15, gameChar_y - 6, 5, 15);
    
    // DRAW THE MOUNTAIN -------------
    noStroke();
    fill(128, 128, 128);
    triangle(mountain.x + 50, 435, mountain.x + 200, 100, mountain.x + 350, 435)

    // add snow caps to the mountain
    noStroke();
    fill(220, 220, 220);
    beginShape();
    vertex(mountain.x + 200, 100);
    vertex(mountain.x + 150, 210);
    vertex(mountain.x + 200, 175);
    vertex(mountain.x + 250, 210);
    vertex(mountain.x + 200, 100);
    endShape();
    
    
    // DRAW THE TREE ----------------
    stroke(0);
    strokeWeight(1);
    fill(180, 80, 0); // THE LEAVES
    ellipse(treePos_x, treePos_y + 95, 40, 100);
    fill(0, 150, 0); // THE TRUNK
    ellipse(treePos_x, treePos_y + 35, 120, 120);
    
    // DRAW THE CANYON ---------------
    noStroke();
    fill(255, 248, 220); // THE VALLEY
    rect(canyon.x_pos , 430, 200, 370);
    
    fill(222, 184, 135);
    beginShape(); // LEFT END OF CANYON
    vertex(canyon.x_pos, 430);
    vertex(canyon.x_pos + 60, 430);
    vertex(canyon.x_pos + 40, 470);
    vertex(canyon.x_pos + 70, 490);
    vertex(canyon.x_pos + 40, 560)
    vertex(canyon.x_pos + 50, 800);
    vertex(canyon.x_pos, 800)
    endShape();
    
    beginShape(); // RIGHT END OF CANYON
    vertex(canyon.x_pos + 200, 430);
    vertex(canyon.x_pos + 120, 430);
    vertex(canyon.x_pos + 100, 470);
    vertex(canyon.x_pos + 120, 490);
    vertex(canyon.x_pos + 100, 560);
    vertex(canyon.x_pos + 120, 800);
    vertex(canyon.x_pos + 200, 800);
    endShape();
    
    // DRAW THE COLLECTABLE ----------
    stroke(0);
    strokeWeight(2);
    fill(255, 0 , 0); // THE BODY OF THE BASKETBALL
    ellipse(collectable.x_pos + 150 * collectable.size, collectable.y_pos + 320, 35 * collectable.size);
    ellipse(collectable.x_pos + 140 * collectable.size, collectable.y_pos + 320, 
            15 * collectable.size, 22 * collectable.size);
    ellipse(collectable.x_pos + 160 * collectable.size, collectable.y_pos + 320, 
            15 * collectable.size, 22 * collectable.size);
    
    // DRAW THE CLOUD ----------------
    noStroke(); 
    fill(255);
    ellipse(cloud.x, 125, 50 * cloud.scale, 50 * cloud.scale);
    ellipse(cloud.x + 30 * cloud.scale, 125, 30 * cloud.scale, 30 * cloud.scale);
    ellipse(cloud.x + 50 * cloud.scale, 125, 20 * cloud.scale, 20 * cloud.scale);
}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;
}
