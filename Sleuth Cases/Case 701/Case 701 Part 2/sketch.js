/*

Officer: 3185280
CaseNum: 701-1-80990833-3185280

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I'll never forget their black eyes. Their expression seemed sad. I'm pretty sure they were above the age of 62. I'm not quite sure. It's hard to say. They had long white hair. The person I saw was female. They definately weigh less than 83 Kg. That's all I can remember about them. 

*/

var lineupLog = [
	{ 
		"name": "MALINDA WILLMAR",
		"gender": "female",
		"expression": "nerveous",
		"hair": "no",
		"age": 63,
		"weight": 62
	},
	{ 
		"name": "LOUISE PEGORD",
		"gender": "female",
		"expression": "empty",
		"hair": "ginger",
		"age": 58,
		"weight": 71
	},
	{ 
		"name": "DEEDEE MOHWAWK",
		"gender": "male",
		"expression": "nerveous",
		"hair": "dark brown",
		"age": 38,
		"weight": 64
	},
	{ 
		"name": "NELSON NIEMELA",
		"gender": "female",
		"expression": "sad",
		"hair": "long white",
		"age": 72,
		"weight": 73
	},
	{ 
		"name": "SUMMER DAVISWOOD",
		"gender": "male",
		"expression": "blank",
		"hair": "thin blond",
		"age": 45,
		"weight": 80
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function checkSuspect(suspectObj)
{
    if (suspectObj.gender == "female" &&
       suspectObj.expression == "sad" &&
       suspectObj.hair == "long white" &&
       suspectObj.age > 62 &&
       suspectObj.weight < 83)
    {
        return true;
    }
    return false;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(checkSuspect(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
