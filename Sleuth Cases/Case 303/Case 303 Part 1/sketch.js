/*

Officer: 3185280
CaseNum: 303-0-35844929-3185280

Case 303 - The Case of the Crooked Attorney
Stage 1 - Torvalds' Office

District Attorney Torvalds is well respected in Console City as an upstanding citizen and
enforcer of the law. Of course he’s as crooked as they come. I’ve had enough of having our
hard work at Sleuth and Co undermined by his bribes and back-payments. Let’s take take this
sucker down. I happen to know that Torvalds keeps his incriminating documents spread amongst
several safes in town. I’ll need you to bend the rules a little by breaking into them and
retrieving the incriminating evidence.

The first safe is in Torvald’s office. Crack it by doing the following:

	When any key is released:
	- Make secret_storage_combination0 equal to 5

	When any key is pressed:
	- Make secret_storage_combination0 equal to 3

	When the mouse button is pressed: done
	- Make secret_storage_combination0 equal to 46

	Whilst the mouse is being dragged: done
	- Make secret_storage_combination0 equal to 19

	When the mouse button is released: done
	- Make secret_storage_combination1 equal to 80

	When the mouse button is pressed: done
	- Make secret_storage_combination1 equal to 42

	Whilst the mouse is moving: done
	- Make secret_storage_combination1 equal to 83

	Whilst the mouse is being dragged: done
	- Make secret_storage_combination1 equal to 9



There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !

*/

//declare the variables

var secret_storage_combination0;
var secret_storage_combination1;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	secret_storage_combination0 = 0;
	secret_storage_combination1 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Add your code to these events to open the safe ...

function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
    secret_storage_combination1 = 83;
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
    secret_storage_combination0 = 19;
    secret_storage_combination1 = 9;
}

function mousePressed()
{
	console.log("mousePressed");
    secret_storage_combination0 = 46;
    secret_storage_combination1 = 42;
}

function mouseReleased()
{
	console.log("mouseReleased");
    secret_storage_combination1 = 80;
}

function keyPressed()
{
	console.log("keyPressed", key);
    secret_storage_combination0 = 3;
}

function keyReleased()
{
	console.log("keyReleased", key);
    secret_storage_combination0 = 5;
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{


	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(200,height/2);
	drawDial(200, secret_storage_combination0, 48);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(secret_storage_combination1);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
