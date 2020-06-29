/*

Officer: 3185280
CaseNum: 101-2-52280853-3185280

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a Green Yellow filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Cyan filled
rectangle around him.

Identify the man in the striped top by drawing a Olive filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
    noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    fill(173, 255, 47) // this is for the lady
    rect(1626, 29, 110, 230)
    
    fill(0, 255, 255) // this is for the big man
    rect(878, 221, 470, 500)
    
    fill(128, 128, 0) // this is for the striped man
    rect(510, 210, 190, 505)

}
