/*

Officer: 3185280
CaseNum: 702-1-96546002-3185280

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigatorCarObject and the cars in
VehicleObject_List to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_car()
{
	/*
	This function should do the following: 
	 - increment investigatorCarObject's distanceAmnt property by its gasVal property 
	 - add a random amount between -0.06 and 0.06 to investigatorCarObject's vibrateAmt property
	 - use the constrain function to constrain investigatorCarObject's vibrateAmt property to values between 0.02 and 1.22
	 - call the cycle_carEngine function passing investigatorCarObject as an argument
	*/
    investigatorCarObject.distanceAmnt += investigatorCarObject.gasVal;
    investigatorCarObject.vibrateAmt += random(-0.06, 0.06);
    
    investigatorCarObject.vibrateAmt = constrain(investigatorCarObject.vibrateAmt, 0.02, 1.22);
    
    cycle_carEngine(investigatorCarObject);
}


function switch_lanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Pos_A and Lane_Pos_B to effect the change.
	 hint: You will need to modify the x property of car.
	*/
    
    if (car.x == Lane_Pos_A)
    {
        car.x = Lane_Pos_B;
    }
    else if (car.x == Lane_Pos_B)
    {
        car.x = Lane_Pos_A;
    }
    return car;
}


function car_isAhead( Target_car_A, Target_car_B )
{
	/*
	This function should do the following: 
	 - determine if Target_car_A is in the same lane and less than 200px behind Target_car_B.
	 - do this by comparing the two cars' distanceAmnt properties
	 - if these requirements are met then return the licencePlate property for Target_car_B. Otherwise return false.
	*/
    var distance = abs(Target_car_B.distanceAmnt - Target_car_A.distanceAmnt);
    
    if (distance < 200 && Target_car_A.x == Target_car_B.x &&
       Target_car_A.distanceAmnt < Target_car_B.distanceAmnt)
    {
        return Target_car_B.licencePlate;
    }
    else
    {
        return false;
    }
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorCarObject;

var roadWidth;
var roadLeftEdge;
var Lane_Pos_A;
var Lane_Pos_B;
var carImages = {};

var VehicleObject_List = [
{ x: 500, y: 0, distanceAmnt: -200, vehicleCategory: 'redCar', licencePlate: 'EKLUOQ', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 200, vehicleCategory: 'blueCar', licencePlate: 'NRJ5I4', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 600, vehicleCategory: 'whiteCar', licencePlate: 'SCUGQ8', gasVal: 2, exhaust: [  ]} , { x: 500, y: 0, distanceAmnt: 1000, vehicleCategory: 'redCar', licencePlate: '0IZX7B', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 1400, vehicleCategory: 'whiteCar', licencePlate: 'VBCIXX', gasVal: 2, exhaust: [  ]} , { x: 500, y: 0, distanceAmnt: 1800, vehicleCategory: 'redCar', licencePlate: '9VWYGU', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 2200, vehicleCategory: 'redCar', licencePlate: 'X602WC', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 2600, vehicleCategory: 'redCar', licencePlate: 'LMDJBV', gasVal: 2, exhaust: [  ]} , { x: 500, y: 0, distanceAmnt: 3000, vehicleCategory: 'redCar', licencePlate: '761UY5', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 3400, vehicleCategory: 'blueCar', licencePlate: 'ZH16KT', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 3800, vehicleCategory: 'redCar', licencePlate: 'UB7EXK', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 4200, vehicleCategory: 'greenCar', licencePlate: 'D2R366', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 4600, vehicleCategory: 'redCar', licencePlate: 'G6L8C1', gasVal: 2, exhaust: [  ]} , { x: 500, y: 0, distanceAmnt: 5000, vehicleCategory: 'greenCar', licencePlate: 'J5IFML', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 5400, vehicleCategory: 'whiteCar', licencePlate: 'VANA9V', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 5800, vehicleCategory: 'blueCar', licencePlate: '7XQO5Y', gasVal: 2, exhaust: [  ]} , { x: 500, y: 0, distanceAmnt: 6200, vehicleCategory: 'redCar', licencePlate: 'G3QOWA', gasVal: 2, exhaust: [  ]} , { x: 500, y: 0, distanceAmnt: 6600, vehicleCategory: 'whiteCar', licencePlate: 'HCY3L5', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 7000, vehicleCategory: 'greenCar', licencePlate: 'W8651J', gasVal: 2, exhaust: [  ]} , { x: 300, y: 0, distanceAmnt: 7400, vehicleCategory: 'redCar', licencePlate: 'AB9K3W', gasVal: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_Pos_A = 300;
	Lane_Pos_B = 500;

	investigatorCarObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		distanceAmnt: 0,
		gasVal: 3,
		vibrateAmt: 0,
		vehicleCategory: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	drive_car();
	for(var i = 0; i < VehicleObject_List.length; i++)
	{
var b2b = car_isAhead(investigatorCarObject, VehicleObject_List[i]);
		if(b2b)switch_lanes(investigatorCarObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < VehicleObject_List.length; i++)
	{
		VehicleObject_List[i].distanceAmnt += VehicleObject_List[i].gasVal;
		VehicleObject_List[i].y = investigatorCarObject.y - VehicleObject_List[i].distanceAmnt + investigatorCarObject.distanceAmnt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigatorCarObject.distanceAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigatorCarObject.distanceAmnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigatorCarObject);
	image
	(
		carImages["detective"],
		investigatorCarObject.x - carImages["detective"].width/2 + random(-investigatorCarObject.vibrateAmt, investigatorCarObject.vibrateAmt),
		investigatorCarObject.y + random(-investigatorCarObject.vibrateAmt, investigatorCarObject.vibrateAmt)
	);

	//draw all other cars

	for(var i = 0; i < VehicleObject_List.length; i ++)
	{
		if(VehicleObject_List[i].y < height && VehicleObject_List[i].y > -height/2)
		{
			image(
			carImages[VehicleObject_List[i].vehicleCategory],
			VehicleObject_List[i].x - carImages[VehicleObject_List[i].vehicleCategory].width/2,
			VehicleObject_List[i].y
			);
			cycle_carEngine(VehicleObject_List[i]);

			drawExhaust(VehicleObject_List[i]);
		}
	}

}

function cycle_carEngine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.vehicleCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasVal/3);
		if(car.vehicleCategory != "detective")car.exhaust[i].y += (investigatorCarObject.gasVal - car.gasVal);
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
