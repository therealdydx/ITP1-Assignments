/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3185280
CaseNum: 201-3-21766388-3185280

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(319, 290);
    vertex(419, 285);
    vertex(561, 275);
    vertex(544, 203);
    vertex(542, 116);
    vertex(585, 112);
    vertex(580, 183);
    vertex(602, 227);
    vertex(648, 261);
    vertex(663, 314);
    vertex(658, 351);
    vertex(626, 391);
    vertex(591, 427);
    vertex(652, 435);
    vertex(641, 472);
    vertex(566, 467);
    vertex(386, 438);
    vertex(288, 415);
    vertex(250, 310);
    vertex(319, 290);
    endShape();

}
