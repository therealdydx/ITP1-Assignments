/*

Officer: 3185280
CaseNum: 702-2-94123743-3185280

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a numberPlate of 9YH6NU. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthVehicle and the cars in
CarObjectsData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveCar()
{
	/*
	This function should do the following: 
	 - increment sleuthVehicle's distanceTravelled property by its gasAmount property 
	 - add a random amount between -0.05 and 0.05 to sleuthVehicle's engineVibrateValue property
	 - use the constrain function to constrain sleuthVehicle's engineVibrateValue property to values between 0.05 and 1.12
	 - call the TurnoverMotor function passing sleuthVehicle as an argument
	*/
    sleuthVehicle.distanceTravelled += sleuthVehicle.gasAmount;
    sleuthVehicle.engineVibrateValue += random(-0.05, 0.05);
    sleuthVehicle.engineVibrateValue = constrain(sleuthVehicle.engineVibrateValue, 0.05, 1.12);
    
    TurnoverMotor(sleuthVehicle);
}

function CrossLanes(targetCar)
{
	/*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordA and LaneCoordB to effect the change.
	 - finally you should return targetCar at the end of the function.
	 hint: You will need to modify the xCoord property of targetCar.
	*/
    if (targetCar.xCoord == LaneCoordA)
    {
        targetCar.xCoord = LaneCoordB;
    }
    else if (targetCar.xCoord == LaneCoordB)
    {
        targetCar.xCoord = LaneCoordA;
    }
    return targetCar;
}


function CarAhead( CarObjA, CarObjB )
{
	/*
	This function should do the following: 
	 - determine if CarObjA is in the same lane and less than 200px behind CarObjB.
	 - do this by comparing the two cars' distanceTravelled properties
	 - if these requirements are met then return the numberPlate property for CarObjB. Otherwise return false.
	*/
    var distance = abs(CarObjB.distanceTravelled - CarObjA.distanceTravelled);
    
    if (distance < 200 && 
        CarObjA.xCoord == CarObjB.xCoord && 
        CarObjA.distanceTravelled < CarObjB.distanceTravelled)
    {
        return CarObjB.numberPlate;
    }
    else
    {
        return false;
    }
}


function CheckVehicleIsBySide( car )
{
	/*
	This function should do the following: 
	 - traverse CarObjectsData and determine if any of the cars are parallel with car.
	 - if a car is found to be parallel to car then return that car object.
	 - cars are considered parallel if the absolute difference between their distanceTravelled properties is less than 25 px and they have non-matching xCoord properties	*/
    for (var i = 0; i < CarObjectsData.length; i++)
    {
        if (abs(CarObjectsData[i].distanceTravelled - car.distanceTravelled) < 25 &&
           car.xCoord != CarObjectsData[i].xCoord)
        {
            return CarObjectsData[i];
        }
    }
    return false;
}


function SpotAssailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuthVehicle to see if they match the numberPlate property in the assailant description.
	 - it does this by calling CheckVehicleIsBySide.
	 - if a positive result is returned then the numberPlate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
    var car1 = CheckVehicleIsBySide(sleuthVehicle);
    
    if (car1.numberPlate == "9YH6NU")
    {
            assailant = car1;
    }
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthVehicle;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};
var assailant;

var CarObjectsData = [
{ xCoord: 300, yCoord: 0, distanceTravelled: -200, vehicleClassification: 'blueCar', numberPlate: 'NQ4MT9', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 200, vehicleClassification: 'blueCar', numberPlate: '1DND3H', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 600, vehicleClassification: 'blueCar', numberPlate: 'H6J5SG', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 1000, vehicleClassification: 'redCar', numberPlate: 'RTI6MP', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 1400, vehicleClassification: 'greenCar', numberPlate: 'E12Y4D', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 1800, vehicleClassification: 'redCar', numberPlate: 'LKPR1E', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 2200, vehicleClassification: 'blueCar', numberPlate: 'VDABYT', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 2600, vehicleClassification: 'blueCar', numberPlate: '9YH6NU', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 3000, vehicleClassification: 'redCar', numberPlate: 'P6OLCU', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 3400, vehicleClassification: 'blueCar', numberPlate: 'KATXJZ', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 3800, vehicleClassification: 'whiteCar', numberPlate: 'LX15KN', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 4200, vehicleClassification: 'greenCar', numberPlate: 'RBFLUW', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 4600, vehicleClassification: 'redCar', numberPlate: 'JUCF05', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 5000, vehicleClassification: 'greenCar', numberPlate: 'UGUQ7Q', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 5400, vehicleClassification: 'redCar', numberPlate: '24K4H8', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 5800, vehicleClassification: 'blueCar', numberPlate: 'ZQ9JQ8', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 6200, vehicleClassification: 'redCar', numberPlate: 'QVPZCA', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 6600, vehicleClassification: 'blueCar', numberPlate: 'Y6A28T', gasAmount: 2, exhaust: [  ]} , { xCoord: 500, yCoord: 0, distanceTravelled: 7000, vehicleClassification: 'greenCar', numberPlate: '9R4QQI', gasAmount: 2, exhaust: [  ]} , { xCoord: 300, yCoord: 0, distanceTravelled: 7400, vehicleClassification: 'greenCar', numberPlate: 'BJ2YCN', gasAmount: 2, exhaust: [  ]} 
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
	LaneCoordA = 300;
	LaneCoordB = 500;

	sleuthVehicle = 
	{
		xCoord: roadLeftEdge + roadWidth/4,
		yCoord: 550,
		distanceTravelled: 0,
		gasAmount: 3,
		engineVibrateValue: 0,
		vehicleClassification: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(assailant)
	{
		fill(255);

		text("assailant found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	DriveCar();
	for(var i = 0; i < CarObjectsData.length; i++)
	{
var b2b = CarAhead(sleuthVehicle, CarObjectsData[i]);
		if(b2b)CrossLanes(sleuthVehicle);
	}
	SpotAssailant();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarObjectsData.length; i++)
	{
		CarObjectsData[i].distanceTravelled += CarObjectsData[i].gasAmount;
		CarObjectsData[i].yCoord = sleuthVehicle.yCoord - CarObjectsData[i].distanceTravelled + sleuthVehicle.distanceTravelled;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthVehicle.distanceTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthVehicle.distanceTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthVehicle);
	image
	(
		carImages["detective"],
		sleuthVehicle.xCoord - carImages["detective"].width/2 + random(-sleuthVehicle.engineVibrateValue, sleuthVehicle.engineVibrateValue),
		sleuthVehicle.yCoord + random(-sleuthVehicle.engineVibrateValue, sleuthVehicle.engineVibrateValue)
	);

	//draw all other cars

	for(var i = 0; i < CarObjectsData.length; i ++)
	{
		if(CarObjectsData[i].yCoord < height && CarObjectsData[i].yCoord > -height/2)
		{
			image(
			carImages[CarObjectsData[i].vehicleClassification],
			CarObjectsData[i].xCoord - carImages[CarObjectsData[i].vehicleClassification].width/2,
			CarObjectsData[i].yCoord
			);
			TurnoverMotor(CarObjectsData[i]);

			drawExhaust(CarObjectsData[i]);
		}
	}

}

function TurnoverMotor(car)
{

	car.exhaust.push({size: 2, x: car.xCoord, y: car.yCoord + carImages[car.vehicleClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasAmount/3);
		if(car.vehicleClassification != "detective")car.exhaust[i].y += (sleuthVehicle.gasAmount - car.gasAmount);
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
