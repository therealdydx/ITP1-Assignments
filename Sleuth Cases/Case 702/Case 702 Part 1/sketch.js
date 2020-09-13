/*

Officer: 3185280
CaseNum: 702-0-70744087-3185280

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of ChaseVehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	/*
	This function should do the following: 
	 - increment ChaseVehicleObject's DistanceDriven property by its SpeedValue property 
	 - add a random amount between -0.03 and 0.03 to ChaseVehicleObject's VibrateVal property
	 - use the constrain function to constrain ChaseVehicleObject's VibrateVal property to values between 0.05 and 0.8
	 - call the turnoverCar_motor function passing ChaseVehicleObject as an argument
	*/
    
    ChaseVehicleObject.DistanceDriven += ChaseVehicleObject.SpeedValue;
    
    ChaseVehicleObject.VibrateVal += random(-0.03, 0.03);
    ChaseVehicleObject.VibrateVal = constrain(ChaseVehicleObject.VibrateVal, 0.05, 0.8)
    
    turnoverCar_motor(ChaseVehicleObject);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var ChaseVehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	ChaseVehicleObject = 
	{
		XCoordinate: roadLeftEdge + roadWidth/4,
		YCoordinate: 300,
		DistanceDriven: 0,
		SpeedValue: 3,
		VibrateVal: 0,
		CarClassification: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}
}


function draw()
{
	background(0);


	moveCar();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (ChaseVehicleObject.DistanceDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (ChaseVehicleObject.DistanceDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(ChaseVehicleObject);
	image
	(
		carImages["detective"],
		ChaseVehicleObject.XCoordinate - carImages["detective"].width/2 + random(-ChaseVehicleObject.VibrateVal, ChaseVehicleObject.VibrateVal),
		ChaseVehicleObject.YCoordinate + random(-ChaseVehicleObject.VibrateVal, ChaseVehicleObject.VibrateVal)
	);

}

function turnoverCar_motor(car)
{

	car.exhaust.push({size: 2, x: car.XCoordinate, y: car.YCoordinate + carImages[car.CarClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.SpeedValue/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
