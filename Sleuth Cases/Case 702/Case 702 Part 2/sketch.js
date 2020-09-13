/*

Officer: 3185280
CaseNum: 702-1-57848161-3185280

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

HINT: make sure you take a look at the initialisation of sleuthPI_carObject and the cars in
Car_List to understand their properties.

*/
///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveVehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPI_carObject's dist_amnt property by its accel_amount property 
	 - add a random amount between -0.04 and 0.04 to sleuthPI_carObject's engineVibrate_amt property
	 - use the constrain function to constrain sleuthPI_carObject's engineVibrate_amt property to values between 0.07 and 0.94
	 - call the TurnCarMotor function passing sleuthPI_carObject as an argument
	*/
    sleuthPI_carObject.dist_amnt += sleuthPI_carObject.accel_amount;
    sleuthPI_carObject.engineVibrate_amt += random(-0.04, 0.04);
    
    sleuthPI_carObject.engineVibrate_amt = constrain(sleuthPI_carObject.engineVibrate_amt, 0.07, 0.94);
    
    TurnCarMotor(sleuthPI_carObject);
}


function SwapLanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoord_A and LaneCoord_B to effect the change.
	 hint: You will need to modify the x property of car.
	*/
    if (sleuthPI_carObject.x == LaneCoord_A)
    {
        sleuthPI_carObject.x = LaneCoord_B;
    }
    else if (sleuthPI_carObject.x == LaneCoord_B)
    {
        sleuthPI_carObject.x = LaneCoord_A;
    }
    return car;
}


function SearchVehicleInfront( Target_car_A, Target_car_B )
{
	/*
	This function should do the following: 
	 - determine if Target_car_A is in the same lane and less than 200px behind Target_car_B.
	 - do this by comparing the two cars' dist_amnt properties
	 - if these requirements are met then return the number_plate property for Target_car_B. Otherwise return false.
	*/
    var distance = abs(Target_car_B.dist_amnt - Target_car_A.dist_amnt);
    
    if (distance < 200 && Target_car_A.x == Target_car_B.x &&
       Target_car_A.dist_amnt < Target_car_B.dist_amnt)
    {
        return Target_car_B.number_plate;
    }
    else
    {
        return false;
    }
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_carObject;

var roadWidth;
var roadLeftEdge;
var LaneCoord_A;
var LaneCoord_B;
var carImages = {};

var Car_List = [
{ x: 300, y: 0, dist_amnt: -200, car_category: 'greenCar', number_plate: 'AI3XU9', accel_amount: 2, exhaust: [  ]} , { x: 500, y: 0, dist_amnt: 200, car_category: 'blueCar', number_plate: 'VKVQN0', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 600, car_category: 'blueCar', number_plate: 'NB8U7B', accel_amount: 2, exhaust: [  ]} , { x: 500, y: 0, dist_amnt: 1000, car_category: 'redCar', number_plate: '4QTG42', accel_amount: 2, exhaust: [  ]} , { x: 500, y: 0, dist_amnt: 1400, car_category: 'whiteCar', number_plate: 'WB0YGC', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 1800, car_category: 'redCar', number_plate: '3V47Y5', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 2200, car_category: 'blueCar', number_plate: 'LUMDV0', accel_amount: 2, exhaust: [  ]} , { x: 500, y: 0, dist_amnt: 2600, car_category: 'blueCar', number_plate: '6OB860', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 3000, car_category: 'blueCar', number_plate: 'YQT72V', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 3400, car_category: 'redCar', number_plate: '5E7GYA', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 3800, car_category: 'blueCar', number_plate: '72UDBW', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 4200, car_category: 'greenCar', number_plate: 'ULE51R', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 4600, car_category: 'redCar', number_plate: '7YZJJ8', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 5000, car_category: 'redCar', number_plate: 'LCOYVI', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 5400, car_category: 'greenCar', number_plate: 'IO54U4', accel_amount: 2, exhaust: [  ]} , { x: 500, y: 0, dist_amnt: 5800, car_category: 'redCar', number_plate: '00AI4E', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 6200, car_category: 'blueCar', number_plate: '2F5VZG', accel_amount: 2, exhaust: [  ]} , { x: 300, y: 0, dist_amnt: 6600, car_category: 'blueCar', number_plate: 'XQ1FGB', accel_amount: 2, exhaust: [  ]} , { x: 500, y: 0, dist_amnt: 7000, car_category: 'whiteCar', number_plate: 'LWQE74', accel_amount: 2, exhaust: [  ]} , { x: 500, y: 0, dist_amnt: 7400, car_category: 'whiteCar', number_plate: '95FQZA', accel_amount: 2, exhaust: [  ]} 
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
	LaneCoord_A = 300;
	LaneCoord_B = 500;

	sleuthPI_carObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		dist_amnt: 0,
		accel_amount: 3,
		engineVibrate_amt: 0,
		car_category: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	MoveVehicle();
	for(var i = 0; i < Car_List.length; i++)
	{
var b2b = SearchVehicleInfront(sleuthPI_carObject, Car_List[i]);
		if(b2b)SwapLanes(sleuthPI_carObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < Car_List.length; i++)
	{
		Car_List[i].dist_amnt += Car_List[i].accel_amount;
		Car_List[i].y = sleuthPI_carObject.y - Car_List[i].dist_amnt + sleuthPI_carObject.dist_amnt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPI_carObject.dist_amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPI_carObject.dist_amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPI_carObject);
	image
	(
		carImages["detective"],
		sleuthPI_carObject.x - carImages["detective"].width/2 + random(-sleuthPI_carObject.engineVibrate_amt, sleuthPI_carObject.engineVibrate_amt),
		sleuthPI_carObject.y + random(-sleuthPI_carObject.engineVibrate_amt, sleuthPI_carObject.engineVibrate_amt)
	);

	//draw all other cars

	for(var i = 0; i < Car_List.length; i ++)
	{
		if(Car_List[i].y < height && Car_List[i].y > -height/2)
		{
			image(
			carImages[Car_List[i].car_category],
			Car_List[i].x - carImages[Car_List[i].car_category].width/2,
			Car_List[i].y
			);
			TurnCarMotor(Car_List[i]);

			drawExhaust(Car_List[i]);
		}
	}

}

function TurnCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.car_category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accel_amount/3);
		if(car.car_category != "detective")car.exhaust[i].y += (sleuthPI_carObject.accel_amount - car.accel_amount);
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
