/*

Officer: 3185280
CaseNum: 101-3-47748627-3185280

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Gold filled rectangle with a Red outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Green filled
rectangle with a Purple outline around him.

Identify the man reading the newspaper by drawing a Teal filled rectangle
with a Coral outline around him.

Identify the woman with the dog by drawing a Midnight Blue filled rectangle with a
Navy outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    stroke(255, 0, 0) // the woman
    fill(255, 215, 0)
    rect(420, 174, 140, 290)
    
    stroke(128, 0, 128) // monocle man
    fill(0, 128, 0)
    rect(74, 270, 103, 144)
    
    stroke(255, 127, 80) // newspaper man
    fill(0, 128, 128)
    rect(577, 241, 200, 400)
    
    stroke(0, 0, 128) // woman with dog
    fill(25, 25, 112)
    rect(1375, 189, 150, 340)
}
