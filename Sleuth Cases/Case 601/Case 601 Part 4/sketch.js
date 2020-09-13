/*
Officer: 3185280
CaseNum: 601-3-92081478-3185280

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Sienna fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SaddleBrown fill ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 87 pixels of any of the crimes within no more than 2 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- fill
- triangle() NB. Draw each triangle with the point roughly at its center.

- fill
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var killer_log = [ 
  { position_x : 518, position_y : 471, recordedDay : 12},
  { position_x : 486, position_y : 508, recordedDay : 12},
  { position_x : 475, position_y : 566, recordedDay : 13},
  { position_x : 376, position_y : 554, recordedDay : 13},
  { position_x : 316, position_y : 559, recordedDay : 13},
  { position_x : 265, position_y : 614, recordedDay : 14},
  { position_x : 253, position_y : 609, recordedDay : 14},
  { position_x : 240, position_y : 604, recordedDay : 14},
  { position_x : 220, position_y : 597, recordedDay : 15},
  { position_x : 178, position_y : 600, recordedDay : 15},
  { position_x : 199, position_y : 604, recordedDay : 17},
  { position_x : 146, position_y : 582, recordedDay : 18},
  { position_x : 115, position_y : 551, recordedDay : 20},
  { position_x : 67, position_y : 495, recordedDay : 21},
  { position_x : 39, position_y : 493, recordedDay : 22},
  { position_x : 68, position_y : 461, recordedDay : 24} 
];


//Recent crime records.

var attack_data_pos_x = [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817];
var attack_data_pos_y = [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474];
var attack_data_day = [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18];
var attack_data_fatality_name = ['PIERRE DORCEY', 'NELSON TINTLE', 'MALINDA GOODBURY', 'ERMELINDA OORIN', 'JESSIA PORTOS', 'JAUNITA JOYER', 'DRUSILLA WARMAN', 'LIANNE COURTWOOD', 'LESLEY MONKSFORD', 'LARRAINE PEGORD', 'LAVERNE JACQUELIN', 'RANDEE CROME', 'HANG NIEMELA', 'LOUISE ZETLAND', 'TU DAVISWOOD'];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    noStroke();
    fill(160, 82, 45);
    for (var i = 0; i < 16; i++)
    {
        triangle(killer_log[i].position_x - 5, killer_log[i].position_y + 5,
                killer_log[i].position_x + 5, killer_log[i].position_y + 5,
                killer_log[i].position_x, killer_log[i].position_y - 5);
    }

    noStroke();
    fill(139, 69, 19);
    for (var j = 0; j < 15; j++)
    {
        ellipse(attack_data_pos_x[j], attack_data_pos_y[j], 5);
    }

    for (var i = 0; i < 15; i++)
    {
        for (var j = 0; j < 16; j++)
        {
            if(dist(killer_log[j].position_x,
                   killer_log[j].position_y,
                   attack_data_pos_x[i],
                   attack_data_pos_y[i]) < 87)
            {
                if(abs(killer_log[j].recordedDay - attack_data_day[i]) <= 2)
                {
                    possibleMatches.push({ 
                        suspect_x: killer_log[j].position_x, 
                        suspect_y: killer_log[j].position_y,
                        crime_x: attack_data_pos_x[i], 
                        crime_y: attack_data_pos_y[i], 
                        victimName: attack_data_fatality_name[i] })
                }
            }
        }
    }
	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
