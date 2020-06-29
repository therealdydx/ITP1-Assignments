/*

Officer: 3185280
CaseNum: 401-2-24789241-3185280

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When lead dips below 0.37 or spider_venom dips below 0.45, reduce paracetamol by 0.02
	- If DeadlyNightshade goes above 0.41 or AmanitaMushrooms goes above 0.35, increment paracetamol by 0.04
	- When spider_venom dips below 0.67 or polonium goes above 0.43, decrease plasma by 0.02
	- When AmanitaMushrooms goes above 0.49, or on the other hand, DeadlyNightshade goes above 0.29 and lead goes above 0.26, raise plasma by 0.05
	- If polonium dips below 0.74 or lead goes above 0.61, whilst at the same time, spider_venom dips below 0.55, decrease calcium_chloride by 0.04
	- If DeadlyNightshade goes above 0.61 and AmanitaMushrooms dips below 0.62, or on the other hand, formaldehyde goes above 0.75, increase calcium_chloride by 0.05
	- When AmanitaMushrooms goes above 0.4, formaldehyde dips below 0.55, and also polonium dips below 0.48, try decreasing aspirin by 0.03
	- When lead dips below 0.74 or DeadlyNightshade goes above 0.36, raise aspirin by 0.01


Your conditional statements should:

consider the following poisons:

	- AmanitaMushrooms
	- lead
	- polonium
	- formaldehyde
	- DeadlyNightshade
	- spider_venom


and modify the following antidotes:

	- paracetamol
	- plasma
	- calcium_chloride
	- aspirin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var AmanitaMushrooms;
var lead;
var polonium;
var formaldehyde;
var DeadlyNightshade;
var spider_venom;


//Declare the antidote variables
var paracetamol;
var plasma;
var calcium_chloride;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	AmanitaMushrooms = 0.5;
	lead = 0.5;
	polonium = 0.5;
	formaldehyde = 0.5;
	DeadlyNightshade = 0.5;
	spider_venom = 0.5;
	paracetamol = 0.5;
	plasma = 0.5;
	calcium_chloride = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

    if (lead < 0.37 || spider_venom < 0.45)
    {
        paracetamol -= 0.02
    }
    
    if (DeadlyNightshade > 0.41 || AmanitaMushrooms > 0.35)
    {
        paracetamol += 0.04
    }
    
    if (spider_venom < 0.67 || polonium > 0.43)
    {
        plasma -= 0.02
    }
    
    if ((AmanitaMushrooms > 0.49) || (DeadlyNightshade > 0.29 && lead > 0.26))
    {
        plasma += 0.05
    }
	
    if ((polonium < 0.74 || lead > 0.61) && (spider_venom < 0.55))
    {
        calcium_chloride -= 0.04
    }
    
    if ((DeadlyNightshade > 0.61 && AmanitaMushrooms < 0.62) || (formaldehyde > 0.75))
    {
        calcium_chloride += 0.05
    }
    
    if (AmanitaMushrooms > 0.4 && formaldehyde < 0.55 && polonium < 0.48)
    {
        aspirin -= 0.03
    }
    
    if (lead < 0.74 || DeadlyNightshade > 0.36)
    {
        aspirin += 0.01
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	AmanitaMushrooms = nextValue(graphs[0],AmanitaMushrooms);
	lead = nextValue(graphs[1],lead);
	polonium = nextValue(graphs[2],polonium);
	formaldehyde = nextValue(graphs[3],formaldehyde);
	DeadlyNightshade = nextValue(graphs[4],DeadlyNightshade);
	spider_venom = nextValue(graphs[5],spider_venom);


	paracetamol = constrain(paracetamol, 0, 1);
	plasma = constrain(plasma, 0, 1);
	calcium_chloride = constrain(calcium_chloride, 0, 1);
	aspirin = constrain(aspirin, 0, 1);


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
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,20);
	fill(colors[1]);
	text('lead: ' + nf(lead,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);
	fill(colors[3]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,80);
	fill(colors[4]);
	text('DeadlyNightshade: ' + nf(DeadlyNightshade,1,2), 20,100);
	fill(colors[5]);
	text('spider_venom: ' + nf(spider_venom,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(paracetamol,50,'paracetamol');
	drawBar(plasma,200,'plasma');
	drawBar(calcium_chloride,350,'calcium_chloride');
	drawBar(aspirin,500,'aspirin');


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
