/*

Officer: 3185280
CaseNum: 401-0-52906113-3185280

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When ricin goes above 0.47, decrement insulin by 0.05
	- When Spider_Venom goes above 0.28, try increasing insulin by 0.05
	- When Spider_Venom dips below 0.28, try decreasing protamine by 0.05
	- When botulinium goes above 0.44, raise protamine by 0.01
	- If Spider_Venom dips below 0.35, decrease Beta_Blocker by 0.05
	- When ricin dips below 0.4, raise Beta_Blocker by 0.03


Your conditional statements should:

consider the following poisons:

	- botulinium
	- ricin
	- Spider_Venom


and modify the following antidotes:

	- insulin
	- protamine
	- Beta_Blocker


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var ricin;
var Spider_Venom;


//Declare the antidote variables
var insulin;
var protamine;
var Beta_Blocker;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	botulinium = 0.5;
	ricin = 0.5;
	Spider_Venom = 0.5;
	insulin = 0.5;
	protamine = 0.5;
	Beta_Blocker = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
    
    if (ricin > 0.47)
    {
        insulin -= 0.05;
    }
    
    if (Spider_Venom > 0.28)
    {
            insulin += 0.05
    }
    
    else if (Spider_Venom < 0.28)
    {
            protamine -= 0.05
    }

    if (botulinium > 0.44)
    {
        protamine += 0.01
    }
    
    if (Spider_Venom < 0.35)
    {
        Beta_Blocker -= 0.05
    }
    
    if (ricin < 0.4)
    {
        Beta_Blocker += 0.03
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	botulinium = nextValue(graphs[0],botulinium);
	ricin = nextValue(graphs[1],ricin);
	Spider_Venom = nextValue(graphs[2],Spider_Venom);


	insulin = constrain(insulin, 0, 1);
	protamine = constrain(protamine, 0, 1);
	Beta_Blocker = constrain(Beta_Blocker, 0, 1);


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
	text('botulinium: ' + nf(botulinium,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(protamine,200,'protamine');
	drawBar(Beta_Blocker,350,'Beta_Blocker');


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
