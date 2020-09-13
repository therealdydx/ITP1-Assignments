/*

Officer: 3185280
CaseNum: 701-3-80681449-3185280

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from pierre niemela.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A locateGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - function locateGuilty(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They were carrying a glass bottle. They were fairly tall, I think between a height of 160 and 180 cm. They brobably weigh between 58 and 83 kg. They had shaved hair. I'm not quite sure. They seemed to be between the age of 36 and 56 years old. I remember they had a dark black tattoo. The person I saw was male. I'll never forget their brown eyes. It's hard to say. Their expression seemed menacing. It was so scary! That's all I know officer. 

*/

var suspectsArray = [
	{ 
		"name": "LIANNE WILLMAR",
		"tattoo": "jellyfish",
		"expression": "nerveous",
		"gender": "male",
		"accessory": "metal briefcase",
		"age": 30,
		"height": 188,
		"weight": 78
	},
	{ 
		"name": "LARRAINE ASHELY",
		"tattoo": "sword",
		"expression": "empty",
		"gender": "male",
		"accessory": "laptop bag",
		"age": 38,
		"height": 198,
		"weight": 75
	},
	{ 
		"name": "JACQUELINE NIEMELA",
		"tattoo": "facial",
		"expression": "confused",
		"gender": "female",
		"accessory": "red backpack",
		"age": 35,
		"height": 192,
		"weight": 70
	},
	{ 
		"name": "LAVERNE CASIMERE",
		"tattoo": "neck",
		"expression": "angry",
		"gender": "female",
		"accessory": "brown paper bag",
		"age": 47,
		"height": 197,
		"weight": 66
	},
	{ 
		"name": "GAYLA SYMMES",
		"tattoo": "anchor",
		"expression": "menacing",
		"gender": "male",
		"accessory": "black duffle bag",
		"age": 36,
		"height": 163,
		"weight": 85
	},
	{ 
		"name": "TU COURTWOOD",
		"tattoo": "dark black",
		"expression": "menacing",
		"gender": "male",
		"accessory": "glass bottle",
		"age": 42,
		"height": 163,
		"weight": 71
	},
	{ 
		"name": "DARBY FORSLIN",
		"tattoo": "ox",
		"expression": "nerveous",
		"gender": "female",
		"accessory": "orange tote bag",
		"age": 41,
		"height": 183,
		"weight": 78
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

// Declare both your functions here
function testSuspect(suspectObj)
{
    var counter = 0;
    
    if (suspectObj.accessory == "glass bottle")
    {
        counter++;
    }
    if (suspectObj.gender ==  "male")
    {
        counter++;
    }
    if (suspectObj.expression == "menacing")
    {
        counter++;
    }
    if (suspectObj.tattoo == "dark black")
    {
        counter++;
    }
    if (suspectObj.height > 160 &&
        suspectObj.height < 180)
    {
        counter++;
    }
    if (suspectObj.age > 36 &&
        suspectObj.age < 56)
    {
        counter++;
    }
    if (suspectObj.weight > 58 &&
        suspectObj.weight < 83)
    {
        counter++;
    }
    return counter;
}

function locateGuilty()
{
    var properties = 0;
    var suspect = {};
    
    for (var i = 0; i < suspectsArray.length; i++)
    {
        var number = testSuspect(suspectsArray[i]);
        if (number > properties)
        {
            properties = number;
            suspect = suspectsArray[i];
        }
    }
    return suspect;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(locateGuilty().name + " is guilty!", 60, 80);
}
