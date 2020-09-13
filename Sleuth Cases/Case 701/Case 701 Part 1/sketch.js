/*

Officer: 3185280
CaseNum: 701-0-78269749-3185280

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist brad courtwood and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I distinctly remember that they were wearing a fur vest, I remember thinking that was quite unusual. They had dark brown hair. They wore thin metallic glasses. I'm not quite sure. I'm not quite sure. I'm sorry, that's all I can recall right now

*/

var suspectsArray = [
	{ 
		"name": "SUMMER JENI",
		"glasses": "light tan",
		"hair": "white",
		"item": "orange socks"
	},
	{ 
		"name": "TU ADVERSANE",
		"glasses": "cheap plastic",
		"hair": "thick black",
		"item": "pink scarf"
	},
	{ 
		"name": "LOUISE WARMAN",
		"glasses": "thin metallic",
		"hair": "dark brown",
		"item": "fur vest"
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
function checkSuspectTraits(suspectObj)
{
    if (suspectObj.glasses == "thin metallic" &&
        suspectObj.hair == "dark brown" &&
        suspectObj.item == "fur vest")
    {
        return true;
    }
    return false;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(checkSuspectTraits(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
