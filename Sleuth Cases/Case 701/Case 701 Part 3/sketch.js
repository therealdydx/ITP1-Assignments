/*

Officer: 3185280
CaseNum: 701-2-11018928-3185280

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from juliana myrle. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. Their expression seemed empty. It was very dark and I could barely see, They were fairly tall, I think between a height of 168 and 185 cm. They brobably weigh between 68 and 88 kg. They wore cheap plastic glasses. They seemed to be between the age of 38 and 48 years old. It was very dark and I could barely see, I'll never forget their grey eyes. They had red hair. They were carrying a orange plasic bag. Can I go home now Sir? 

*/

var usualSuspects = [
	{ 
		"name": "PIERRE PEGORD",
		"eyes": "black",
		"accessory": "plastic box",
		"hair": "shaved",
		"glasses": "red",
		"height": 173,
		"age": 25,
		"weight": 81
	},
	{ 
		"name": "BRAD WILLMAR",
		"eyes": "grey",
		"accessory": "orange plasic bag",
		"hair": "red",
		"glasses": "cheap plastic",
		"height": 173,
		"age": 47,
		"weight": 71
	},
	{ 
		"name": "LAVERNE JOYER",
		"eyes": "pale",
		"accessory": "orange tote bag",
		"hair": "thin blond",
		"glasses": "very thin",
		"height": 177,
		"age": 29,
		"weight": 71
	},
	{ 
		"name": "JACQUELINE ZETLAND",
		"eyes": "blue",
		"accessory": "glass bottle",
		"hair": "dark brown",
		"glasses": "thin metallic",
		"height": 181,
		"age": 56,
		"weight": 55
	},
	{ 
		"name": "SUMMER COURTWOOD",
		"eyes": "brown",
		"accessory": "metal briefcase",
		"hair": "short black",
		"glasses": "white",
		"height": 201,
		"age": 41,
		"weight": 80
	},
	{ 
		"name": "JENIFFER DORCEY",
		"eyes": "blue",
		"accessory": "red backpack",
		"hair": "thick black",
		"glasses": "light tan",
		"height": 174,
		"age": 36,
		"weight": 93
	},
	{ 
		"name": "LOUISE THAXTER",
		"eyes": "pale",
		"accessory": "brown paper bag",
		"hair": "long white",
		"glasses": "black",
		"height": 189,
		"age": 40,
		"weight": 75
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
    var counter = 1; // bug here in the provided code
    
    if (suspectObj.eyes == "grey")
    {
        counter++;
    }
    if (suspectObj.accessory ==  "orange plastic bag")
    {
        counter++;
    }
    if (suspectObj.hair == "red")
    {
        counter++;
    }
    if (suspectObj.glasses == "cheap plastic")
    {
        counter++;
    }
    if (suspectObj.height > 168 &&
        suspectObj.height < 185)
    {
        counter++;
    }
    if (suspectObj.age > 38 &&
        suspectObj.age < 48)
    {
        counter++;
    }
    if (suspectObj.weight > 68 &&
        suspectObj.weight < 88)
    {
        counter++;
    }
    return counter
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    let matchingProperties = checkSuspect(usualSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + usualSuspects[i].name, 60, 60 + i * 20);
  }
}
