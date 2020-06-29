/*

Officer: 3185280
CaseNum: 403-2-83729714-3185280

Case 403 - Cornered - stage 3


We have Shiffman cornered at Gates Department Store and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Gates Department Store

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Gates Department Store.
Draw a MediumVioletRed rectangle covering Gates Department Store for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    if ((mouseX > 2064 && mouseX < 2227) && (mouseY > 306 && mouseY < 386))
    {
        fill(199, 21, 133);
        rect(2064, 306, 163, 80);
    }
    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
