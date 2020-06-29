/*

Officer: 3185280
CaseNum: 401-3-94427311-3185280

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If botulinium goes above 0.28 and mercury dips below 0.34, or on the other hand, warfarin goes above 0.73 and polonium goes above 0.35, reduce calciumGluconate by 0.05
	- If formaldehyde dips below 0.36, NerveGas goes above 0.63, and also ricin goes above 0.52, increment calciumGluconate by 0.05
	- If either NerveGas goes above 0.31, polonium goes above 0.65, or perhaps ricin goes above 0.41, try decreasing glucagon by 0.03
	- When cyanide dips below 0.63 or mercury dips below 0.58, whilst at the same time, botulinium goes above 0.72 or formaldehyde dips below 0.51, try increasing glucagon by 0.03
	- If cyanide dips below 0.27 and NerveGas dips below 0.27, whilst at the same time, ricin dips below 0.6 or mercury goes above 0.66, reduce insulin by 0.02
	- When formaldehyde goes above 0.42 and botulinium goes above 0.34, or on the other hand, polonium dips below 0.4 and warfarin dips below 0.35, try increasing insulin by 0.03
	- If mercury goes above 0.33, polonium goes above 0.62, and also NerveGas dips below 0.62, decrement chalk by 0.03
	- When botulinium dips below 0.28, formaldehyde dips below 0.46, and also ricin goes above 0.3, raise chalk by 0.01
	- If warfarin dips below 0.39 and formaldehyde dips below 0.39, or on the other hand, cyanide dips below 0.25, decrement paracetamol by 0.03
	- When botulinium goes above 0.62, ricin goes above 0.28, and also NerveGas dips below 0.41, raise paracetamol by 0.03


Your conditional statements should:

consider the following poisons:

	- botulinium
	- warfarin
	- formaldehyde
	- polonium
	- NerveGas
	- mercury
	- ricin
	- cyanide


and modify the following antidotes:

	- calciumGluconate
	- glucagon
	- insulin
	- chalk
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var warfarin;
var formaldehyde;
var polonium;
var NerveGas;
var mercury;
var ricin;
var cyanide;


//Declare the antidote variables
var calciumGluconate;
var glucagon;
var insulin;
var chalk;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	botulinium = 0.5;
	warfarin = 0.5;
	formaldehyde = 0.5;
	polonium = 0.5;
	NerveGas = 0.5;
	mercury = 0.5;
	ricin = 0.5;
	cyanide = 0.5;
	calciumGluconate = 0.5;
	glucagon = 0.5;
	insulin = 0.5;
	chalk = 0.5;
	paracetamol = 0.5;


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
    
    if ((botulinium > 0.28 && mercury < 0.34) || (warfarin > 0.73 && polonium > 0.35))
    {
        calciumGluconate -= 0.05
    }
    
    if (formaldehyde < 0.36 && NerveGas > 0.63 && ricin > 0.52)
    {
        calciumGluconate += 0.05
    }
    
    if ((NerveGas > 0.31 && polonium > 0.65) || (ricin > 0.41))
    {
        glucagon -= 0.03
    }
    
    if ((cyanide < 0.63 || mercury < 0.58) || (botulinium > 0.72 || formaldehyde < 0.51))
    {
        glucagon += 0.03
    }
    
    if ((cyanide < 0.27 && NerveGas < 0.27) && (ricin < 0.6 || mercury > 0.66))
    {
        insulin -= 0.02
    }

    if ((formaldehyde > 0.42 && botulinium > 0.34) || (polonium < 0.4 && warfarin < 0.35))
    {
        insulin += 0.03
    }
        
    if (mercury > 0.33 && polonium > 0.62 && NerveGas < 0.62)
    {
        chalk -= 0.03
    }
    
    if (botulinium < 0.28 && formaldehyde < 0.46 && ricin > 0.3)
    {
        chalk += 0.01
    }
	
    if ((warfarin < 0.39) && (formaldehyde < 0.39) || (cyanide < 0.25))
    {
        paracetamol -= 0.03
    }
    
    if (botulinium > 0.62 && ricin > 0.28 && NerveGas < 0.41)
    {
        paracetamol += 0.03
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	botulinium = nextValue(graphs[0],botulinium);
	warfarin = nextValue(graphs[1],warfarin);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	polonium = nextValue(graphs[3],polonium);
	NerveGas = nextValue(graphs[4],NerveGas);
	mercury = nextValue(graphs[5],mercury);
	ricin = nextValue(graphs[6],ricin);
	cyanide = nextValue(graphs[7],cyanide);


	calciumGluconate = constrain(calciumGluconate, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	insulin = constrain(insulin, 0, 1);
	chalk = constrain(chalk, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


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
	text('botulinium: ' + nf(botulinium,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('polonium: ' + nf(polonium,1,2), 20,80);
	fill(colors[4]);
	text('NerveGas: ' + nf(NerveGas,1,2), 20,100);
	fill(colors[5]);
	text('mercury: ' + nf(mercury,1,2), 20,120);
	fill(colors[6]);
	text('ricin: ' + nf(ricin,1,2), 20,140);
	fill(colors[7]);
	text('cyanide: ' + nf(cyanide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(calciumGluconate,50,'calciumGluconate');
	drawBar(glucagon,200,'glucagon');
	drawBar(insulin,350,'insulin');
	drawBar(chalk,500,'chalk');
	drawBar(paracetamol,650,'paracetamol');


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
