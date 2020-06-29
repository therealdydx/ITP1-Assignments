/*

Officer: 3185280
CaseNum: 403-3-80970394-3185280

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Adele Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 257 meters from Courthouse then alert local police by drawing a CornflowerBlue circle around it with a radius of 257 pixels.
- if Shiffman is in Central Station then the neighbourhood watch must be notified by drawing a SlateBlue rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Cyan rectangle covering the area between Ada Avenue, Turing Place, Adele Street and Huffman Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

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

    if (dist(mouseX, mouseY, 1373, 591) < 257)
    {
        fill(100, 149, 237);
        ellipse(1373, 591, 257*2, 257*2);
    }

    else if ((mouseX > 457 && mouseX < 609) && (mouseY > 707 && mouseY < 819))
    {
        fill(106, 90, 205);
        rect(457, 707, 150, 110);
    }
    
    else
    {
        fill(0, 255, 255);
        rect(1343, 422, 364, 723)
    }
        

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
