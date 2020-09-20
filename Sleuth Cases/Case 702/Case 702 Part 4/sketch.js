/*

Officer: 3185280
CaseNum: 702-3-44180956-3185280

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a green car with a numberPlate of U5TN8T.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigatorVehicleObject and the cars in
Car_List to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle()
{
	/*
	This function should do the following: 
	 - increment investigatorVehicleObject's milesTravelled property by its gasValue property 
	 - add a random amount between -0.06 and 0.06 to investigatorVehicleObject's engineVibrateAmt property
	 - use the constrain function to constrain investigatorVehicleObject's engineVibrateAmt property to values between 0.02 and 1.04
	 - call the Turn_Motor function passing investigatorVehicleObject as an argument
	*/
    investigatorVehicleObject.milesTravelled += investigatorVehicleObject.gasValue
    investigatorVehicleObject.engineVibrateAmt += random(-0.06, 0.06)
    investigatorVehicleObject.engineVibrateAmt = constrain(investigatorVehicleObject.engineVibrateAmt, 0.02, 1.04)
}


function Switch_Lanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosition_A and LanePosition_B to effect the change.
	 - finally you should return car at the end of the function.
	 hint: You will need to modify the xPosition property of car.
	*/
    if (car.xPosition == LanePosition_A)
    {
        car.xPosition = LanePosition_B;
    }
    else if (car.xPosition == LanePosition_B)
    {
        car.xPosition = LanePosition_A;
    }
    return car;
}


function CheckCar_IsInfront( Vehicle_A, Vehicle_B )
{
	/*
	This function should do the following: 
	 - determine if Vehicle_A is in the same lane and less than 200px behind Vehicle_B.
	 - do this by comparing the two cars' milesTravelled properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
    var distance = abs(Vehicle_A.milesTravelled - Vehicle_B.milesTravelled);
    
    if (distance < 200 &&
       Vehicle_A.xPosition == Vehicle_B.xPosition &&
       Vehicle_A.milesTravelled < Vehicle_B.milesTravelled)
    {
        return true;
    }
    return false;
}


function CheckCar_IsParallel()
{
	/*
	This function should do the following: 
	 - traverse Car_List and determine if any of the cars are parallel with investigatorVehicleObject.
	 - if a car is found to be parallel to investigatorVehicleObject then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their milesTravelled properties is less than 25 px and they have non-matching xPosition properties	*/
    for (var i = 0; i < Car_List[i]; i++)
    {
        if (abs(Car_List[i].milesTravelled - investigatorVehicleObject.milesTravelled) < 25 &&
           Car_List[i].xPosition != investigatorVehicleObject.xPosition)
        {
            return i
        }
    }
    return false;
}


function Find_Suspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to investigatorVehicleObject to see if they match the numberPlate property in the suspect description.
	 - it does this by calling CheckCar_IsParallel.
	 - if a positive result is returned then the numberPlate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
    var i = CheckCar_IsParallel();
    
    if (Car_List[i].numberPlate == "U5TN8T")
    {
        suspect = Car_List[i];
    }
}


function Following_Suspect()
{
	/*
	This function should do the following: 
	 - only operate if the global variable suspect is assigned to an object.
	 - scale the gasValue property of investigatorVehicleObject by a factor of 1.001.
	 - use the min function to make sure that investigatorVehicleObject's gasValue property does not exceed 6.
	 - it should traverse Car_List calling CheckCar_IsInfront for each car to detect any cars in front of investigatorVehicleObject.
	 - if a positive result is returned it should check to see if the numberPlate property of that car matches that of suspect.
	 - for a match, Stop_Suspect should be called, otherwise call Switch_Lanes.
	*/
    
}


function Stop_Suspect(targetVehicle)
{
	/*
	This function should do the following: 
	 - set the detained property of targetVehicle to true.
	 - set the isApprehendingSuspect property of investigatorVehicleObject to true.
	 - set the gasValue properties of both vehicles to zero.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorVehicleObject;

var roadWidth;
var roadLeftEdge;
var LanePosition_A;
var LanePosition_B;
var carImages = {};
var suspect;

var Car_List = [
{ xPosition: 300, yPosition: 0, milesTravelled: -200, carClassification: 'blueCar', numberPlate: 'M11JB5', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 200, carClassification: 'blueCar', numberPlate: '1O7I74', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 600, carClassification: 'blueCar', numberPlate: 'BIKYBG', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 1000, carClassification: 'redCar', numberPlate: 'A86FX8', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 1400, carClassification: 'greenCar', numberPlate: 'R1EYXF', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 1800, carClassification: 'redCar', numberPlate: 'D0V7E6', gasValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, milesTravelled: 2200, carClassification: 'redCar', numberPlate: 'WKNRFH', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 2600, carClassification: 'greenCar', numberPlate: 'XW0R4Q', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 3000, carClassification: 'greenCar', numberPlate: 'U5TN8T', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 3400, carClassification: 'blueCar', numberPlate: 'GER958', gasValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, milesTravelled: 3800, carClassification: 'blueCar', numberPlate: '2KGLLE', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 4200, carClassification: 'whiteCar', numberPlate: 'WRU0FI', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 4600, carClassification: 'redCar', numberPlate: '20RF2P', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 5000, carClassification: 'blueCar', numberPlate: 'FSQ486', gasValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, milesTravelled: 5400, carClassification: 'blueCar', numberPlate: 'ZWNYK6', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 5800, carClassification: 'greenCar', numberPlate: 'SYXHHY', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 6200, carClassification: 'redCar', numberPlate: 'JDIXYW', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 6600, carClassification: 'whiteCar', numberPlate: 'AVJFBM', gasValue: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, milesTravelled: 7000, carClassification: 'redCar', numberPlate: 'VOP7CH', gasValue: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, milesTravelled: 7400, carClassification: 'blueCar', numberPlate: '4I009P', gasValue: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePosition_A = 300;
	LanePosition_B = 500;

	investigatorVehicleObject = 
	{
		xPosition: roadLeftEdge + roadWidth/4,
		yPosition: 550,
		milesTravelled: 0,
		gasValue: 3,
		engineVibrateAmt: 0,
		carClassification: 'detective',
		numberPlate: '5L3UTH',
		isApprehendingSuspect: false,
		chasingSuspect: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(suspect)
	{
		if(suspect.detained)
		{
			fill(255);

			text("suspect detained!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!investigatorVehicleObject.chasingSuspect&& !investigatorVehicleObject.isApprehendingSuspect)
	{
		Move_Vehicle();
		for(var i = 0; i < Car_List.length; i++)
		{
var b2b = CheckCar_IsInfront(investigatorVehicleObject, Car_List[i]);
			if(b2b)Switch_Lanes(investigatorVehicleObject);
		}
		Find_Suspect();
		if(suspect)investigatorVehicleObject.chasingSuspect = true;
	}
	else if(!investigatorVehicleObject.isApprehendingSuspect)
	{
		Following_Suspect();
		Move_Vehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(suspect)
	{
		if(!suspect.detained)
		{
			suspect.gasValue = 5;
			for(var i = 0; i < Car_List.length; i++)
			{
				var b2b = CheckCar_IsInfront(suspect, Car_List[i]);
				if(b2b)
				{
					if(b2b.numberPlate != suspect.numberPlate)
					{
						Switch_Lanes(suspect);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < Car_List.length; i++)
	{
		Car_List[i].milesTravelled += Car_List[i].gasValue;
		Car_List[i].yPosition = investigatorVehicleObject.yPosition - Car_List[i].milesTravelled + investigatorVehicleObject.milesTravelled;

		if(suspect)
		{
			if(suspect.detained)
			{
				if(Car_List[i].xPosition==investigatorVehicleObject.xPosition)
				{
					if(Car_List[i].milesTravelled<investigatorVehicleObject.milesTravelled)
					{
						if(Car_List[i].milesTravelled-investigatorVehicleObject.milesTravelled < 200)
						{
							Switch_Lanes(Car_List[i]);
						}
					}
				}
			}
		}

	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigatorVehicleObject.milesTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigatorVehicleObject.milesTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(investigatorVehicleObject);
	image
	(
		carImages["detective"],
		investigatorVehicleObject.xPosition - carImages["detective"].width/2 + random(-investigatorVehicleObject.engineVibrateAmt, investigatorVehicleObject.engineVibrateAmt),
		investigatorVehicleObject.yPosition + random(-investigatorVehicleObject.engineVibrateAmt, investigatorVehicleObject.engineVibrateAmt)
	);

	//draw all other cars

	for(var i = 0; i < Car_List.length; i ++)
	{
		if(Car_List[i].yPosition < height && Car_List[i].yPosition > -height/2)
		{
			image(
			carImages[Car_List[i].carClassification],
			Car_List[i].xPosition - carImages[Car_List[i].carClassification].width/2,
			Car_List[i].yPosition
			);
			Turn_Motor(Car_List[i]);

			drawExhaust(Car_List[i]);
		}
	}

}

function Turn_Motor(car)
{

	car.exhaust.push({size: 2, x: car.xPosition, y: car.yPosition + carImages[car.carClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasValue/3);
		if(car.carClassification != "detective")car.exhaust[i].y += (investigatorVehicleObject.gasValue - car.gasValue);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
