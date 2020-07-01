/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/
var cloudx
var cloudscale
var treex
var treey

function setup()
{
	createCanvas(1024, 576);
    cloudx = 300;
    cloudscale = 1.25;
    treex = 900;
    treey = 324;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
    noStroke();
    fill(255);
    ellipse(cloudx, 125, 50 * cloudscale, 50 * cloudscale);
    ellipse(cloudx + 30 * cloudscale, 125, 30 * cloudscale, 30 * cloudscale);
    ellipse(cloudx + 50 * cloudscale, 125, 20 * cloudscale, 20 * cloudscale);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	noStroke();
    fill(128, 128, 128);
    triangle(550, 435, 700, 100, 850, 435)

    // add snow caps to the mountain
    noStroke();
    fill(220, 220, 220);
    beginShape();
    vertex(700, 100);
    vertex(650, 210);
    vertex(700, 175);
    vertex(750, 210);
    vertex(700, 100);
    endShape();

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
    stroke(0);
    fill(180, 80, 0);
    ellipse(treex, treey + 60, 40, 100);
    fill(0, 150, 0);
    ellipse(treex, treey, 120, 120);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here
    noStroke();
		fill(135, 206, 250);
		rect(0, 430, 200, 370)


		fill(222, 184, 135);
		beginShape();
    vertex(0, 430);
    vertex(60, 430);
    vertex(40, 470);
    vertex(70, 490);
    vertex(40, 560)
    vertex(50, 800);
    vertex(0, 800)
    endShape();

    beginShape();
    vertex(200, 430);
    vertex(120, 430);
    vertex(100, 470);
    vertex(120, 490);
    vertex(100, 560);
    vertex(120, 800);
    vertex(200, 800);
    endShape();

    noStroke();
    fill(222, 184, 135)
	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    stroke(0);
    fill(255, 0 , 0);
    ellipse(250, 420, 30, 30);
    line(250, 410, 250, 400);

    noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
