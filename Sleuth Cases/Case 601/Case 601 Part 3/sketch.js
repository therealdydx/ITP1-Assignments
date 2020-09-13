/*
Officer: 3185280
CaseNum: 601-2-21645265-3185280

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Crimson fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Peru fill ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 38 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- fill
- triangle() NB. Draw each triangle with the point roughly at its center.

- fill
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Absconder_Sightings = [ 
  { CoordinateX : 639, CoordinateY : 288},
  { CoordinateX : 681, CoordinateY : 286},
  { CoordinateX : 712, CoordinateY : 293},
  { CoordinateX : 756, CoordinateY : 310},
  { CoordinateX : 715, CoordinateY : 368},
  { CoordinateX : 701, CoordinateY : 425},
  { CoordinateX : 753, CoordinateY : 436},
  { CoordinateX : 815, CoordinateY : 468},
  { CoordinateX : 795, CoordinateY : 506},
  { CoordinateX : 788, CoordinateY : 497},
  { CoordinateX : 781, CoordinateY : 486},
  { CoordinateX : 768, CoordinateY : 489},
  { CoordinateX : 750, CoordinateY : 500},
  { CoordinateX : 732, CoordinateY : 506},
  { CoordinateX : 714, CoordinateY : 514},
  { CoordinateX : 695, CoordinateY : 531},
  { CoordinateX : 693, CoordinateY : 552},
  { CoordinateX : 654, CoordinateY : 523},
  { CoordinateX : 624, CoordinateY : 500},
  { CoordinateX : 594, CoordinateY : 484},
  { CoordinateX : 555, CoordinateY : 474} 
];


//Recent crime records.

var Incident_Logbook = {
	coord_x: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	coord_y: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	murdered_name: ['DRUSILLA WARMAN', 'DEEDEE PHINNEY', 'JAUNITA JOYER', 'GAYLA WILLMAR', 'LARRAINE PEGORD', 'BRAD SILVEIRA', 'PIERRE DORCEY', 'HANG NIEMELA', 'TAMICA MAUBERT', 'LAVERNE JACQUELIN', 'JESUS FORSLIN', 'NELSON TINTLE', 'RANDEE CROME', 'JESSIA PORTOS'],
};

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
    fill(220, 20, 60);
    
    for (var i = 0; i < 21; i++)
    {
        triangle(Absconder_Sightings[i].CoordinateX - 5,               
                 Absconder_Sightings[i].CoordinateY + 5,
                 Absconder_Sightings[i].CoordinateX + 5,
                 Absconder_Sightings[i].CoordinateY + 5,
                 Absconder_Sightings[i].CoordinateX,
                 Absconder_Sightings[i].CoordinateY - 5);
    }
    
    noStroke();
    fill(205, 133, 63);
    
    for (var j = 0; j < 14; j++)
    {
        ellipse(Incident_Logbook.coord_x[j], Incident_Logbook.coord_y[j]);
    }

    for (var i = 0; i < 14; i++)
    {
        for (var j = 0; j < 21; j++)
        {
            if(dist(Incident_Logbook.coord_x[i],
                    Incident_Logbook.coord_y[i],
                    Absconder_Sightings[j].CoordinateX,
                    Absconder_Sightings[j].CoordinateY) < 38)
            {
                possibleMatches.push({ 
                    suspect_x: Absconder_Sightings[j].CoordinateX, 
                    suspect_y: Absconder_Sightings[j].CoordinateY,
                    crime_x: Incident_Logbook.coord_x[i], 
                    crime_y: Incident_Logbook.coord_y[i], 
                    victimName: Incident_Logbook.murdered_name[i] });
            }
                
        }
    }
    
	// code to draw the matches (if any)
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
