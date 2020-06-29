/*

Officer: 3185280
CaseNum: 401-1-15728342-3185280

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If strychnine dips below 0.52 or warfarin goes above 0.35, try decreasing calcium_chloride by 0.04
	- If botulinium dips below 0.32, raise calcium_chloride by 0.05
	- If formaldehyde goes above 0.64 or warfarin dips below 0.73, decrease plasma by 0.04
	- When strychnine goes above 0.61, increase plasma by 0.01
	- If formaldehyde dips below 0.39, try decreasing aspirin by 0.05
	- If botulinium dips below 0.69, increase aspirin by 0.02
	- If warfarin dips below 0.28, decrement beta_blocker by 0.04
	- When formaldehyde goes above 0.28 and strychnine dips below 0.54, try increasing beta_blocker by 0.05


Your conditional statements should:

consider the following poisons:

	- strychnine
	- botulinium
	- formaldehyde
	- warfarin


and modify the following antidotes:

	- calcium_chloride
	- plasma
	- aspirin
	- beta_blocker


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var botulinium;
var formaldehyde;
var warfarin;


//Declare the antidote variables
var calcium_chloride;
var plasma;
var aspirin;
var beta_blocker;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	botulinium = 0.5;
	formaldehyde = 0.5;
	warfarin = 0.5;
	calcium_chloride = 0.5;
	plasma = 0.5;
	aspirin = 0.5;
	beta_blocker = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

    if (strychnine < 0.52 || warfarin > 0.35)
    {
        calcium_chloride -= 0.04
    }
    
    if (botulinium < 0.32)
    {
        calcium_chloride += 0.05
    }
    
    if (formaldehyde > 0.64 || warfarin < 0.73)
	{
        plasma -= 0.04
    }
	
    if (strychnine > 0.61)
    {
        plasma += 0.01
    }
    
    if (formaldehyde < 0.39)
    {
        aspirin -= 0.05
    }

    if (botulinium < 0.69)
    {
        aspirin += 0.02
    }
    
    if (warfarin < 0.28)
    {
        beta_blocker -= 0.04
    }
    
    if (formaldehyde > 0.28 && strychnine < 0.54)
    {
        beta_blocker += 0.05
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	botulinium = nextValue(graphs[1],botulinium);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	warfarin = nextValue(graphs[3],warfarin);


	calcium_chloride = constrain(calcium_chloride, 0, 1);
	plasma = constrain(plasma, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	beta_blocker = constrain(beta_blocker, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('botulinium: ' + nf(botulinium,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('warfarin: ' + nf(warfarin,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(calcium_chloride,50,'calcium_chloride');
	drawBar(plasma,200,'plasma');
	drawBar(aspirin,350,'aspirin');
	drawBar(beta_blocker,500,'beta_blocker');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
