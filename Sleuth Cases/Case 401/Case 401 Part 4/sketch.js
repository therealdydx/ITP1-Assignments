/*

Officer: 3185280
CaseNum: 401-3-78062282-3185280

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When novichok dips below 0.59 and methanol goes above 0.62, whilst at the same time, mercury dips below 0.53 or alcohol dips below 0.74, try decreasing opioids by 0.03
	- When sarin dips below 0.54, botulinium goes above 0.72, and also strychnine goes above 0.65, increment opioids by 0.02
	- When alcohol goes above 0.32 or botulinium dips below 0.75, whilst at the same time, mercury goes above 0.53, reduce insulin by 0.03
	- If either methanol goes above 0.65, strychnine goes above 0.38, Snake_Venom goes above 0.49, or perhaps novichok goes above 0.3, try increasing insulin by 0.02
	- When either mercury dips below 0.33, methanol goes above 0.69, or perhaps strychnine goes above 0.39, reduce plasma by 0.04
	- If botulinium dips below 0.56 and alcohol dips below 0.65, or on the other hand, Snake_Venom goes above 0.43, raise plasma by 0.03
	- If alcohol goes above 0.75 and strychnine dips below 0.63, or on the other hand, botulinium goes above 0.49 and novichok dips below 0.42, decrease beta_blocker by 0.01
	- When mercury goes above 0.71, sarin dips below 0.4, and also Snake_Venom goes above 0.5, increase beta_blocker by 0.02
	- If either botulinium dips below 0.69, novichok dips below 0.46, or perhaps Snake_Venom goes above 0.57, try decreasing antibodies by 0.02
	- If either alcohol dips below 0.59, mercury goes above 0.64, methanol goes above 0.56, or perhaps strychnine dips below 0.59, try increasing antibodies by 0.01


Your conditional statements should:

consider the following poisons:

	- Snake_Venom
	- novichok
	- alcohol
	- methanol
	- sarin
	- strychnine
	- mercury
	- botulinium


and modify the following antidotes:

	- opioids
	- insulin
	- plasma
	- beta_blocker
	- antibodies


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var Snake_Venom;
var novichok;
var alcohol;
var methanol;
var sarin;
var strychnine;
var mercury;
var botulinium;


//Declare the antidote variables
var opioids;
var insulin;
var plasma;
var beta_blocker;
var antibodies;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Snake_Venom = 0.5;
	novichok = 0.5;
	alcohol = 0.5;
	methanol = 0.5;
	sarin = 0.5;
	strychnine = 0.5;
	mercury = 0.5;
	botulinium = 0.5;
	opioids = 0.5;
	insulin = 0.5;
	plasma = 0.5;
	beta_blocker = 0.5;
	antibodies = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
    
    if ((novichok < 0.59 && methanol > 0.62) && (mercury < 0.53 || alcohol < 0.74))
    {
        opioids -= 0.03
    }
    
    if (sarin < 0.54 && botulinium > 0.72 && strychnine > 0.65)
    {
        opioids += 0.02
    }
    
    if ((alcohol > 0.32 || botulinium < 0.75) && (mercury > 0.53))
    {
        insulin -= 0.03
    }
    
    if (methanol > 0.65 || strychnine > 0.38 || Snake_Venom > 0.49 || novichok > 0.3)
    {
        insulin += 0.02
    }
    
    if (mercury < 0.33 || methanol > 0.69 || strychnine > 0.39)
    {
        plasma -= 0.04
    }
    
    if ((botulinium < 0.56 && alcohol < 0.65) || (Snake_Venom > 0.43))
    {
        plasma += 0.03
    }
    
    if ((alcohol > 0.75 && strychnine < 0.63) || (botulinium > 0.49 && novichok < 0.42))
    {
        beta_blocker -= 0.01
    }
    
    if (mercury > 0.71 && sarin < 0.4 && Snake_Venom > 0.5)
    {
        beta_blocker += 0.02
    }
	
    if (botulinium < 0.69 || novichok < 0.46 || Snake_Venom > 0.57)
    {
        antibodies -= 0.02
    }
    
    if (alcohol < 0.59 || mercury > 0.64 || methanol > 0.56 || strychnine < 0.59)
    {
        antibodies += 0.01
    }

    
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Snake_Venom = nextValue(graphs[0],Snake_Venom);
	novichok = nextValue(graphs[1],novichok);
	alcohol = nextValue(graphs[2],alcohol);
	methanol = nextValue(graphs[3],methanol);
	sarin = nextValue(graphs[4],sarin);
	strychnine = nextValue(graphs[5],strychnine);
	mercury = nextValue(graphs[6],mercury);
	botulinium = nextValue(graphs[7],botulinium);


	opioids = constrain(opioids, 0, 1);
	insulin = constrain(insulin, 0, 1);
	plasma = constrain(plasma, 0, 1);
	beta_blocker = constrain(beta_blocker, 0, 1);
	antibodies = constrain(antibodies, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,20);
	fill(colors[1]);
	text('novichok: ' + nf(novichok,1,2), 20,40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol,1,2), 20,60);
	fill(colors[3]);
	text('methanol: ' + nf(methanol,1,2), 20,80);
	fill(colors[4]);
	text('sarin: ' + nf(sarin,1,2), 20,100);
	fill(colors[5]);
	text('strychnine: ' + nf(strychnine,1,2), 20,120);
	fill(colors[6]);
	text('mercury: ' + nf(mercury,1,2), 20,140);
	fill(colors[7]);
	text('botulinium: ' + nf(botulinium,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(opioids,50,'opioids');
	drawBar(insulin,200,'insulin');
	drawBar(plasma,350,'plasma');
	drawBar(beta_blocker,500,'beta_blocker');
	drawBar(antibodies,650,'antibodies');


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
