/*

Officer: 3185280
CaseNum: 502-1-61323330-3185280

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var DocumentA = [
	{Element0: "play", Element1: "syndicate", Element2: "tug"}, 
	{Element0: "consider", Element1: "rejoice", Element2: "bake"}, 
	{Element0: "start", Element1: "Hopper’s", Element2: "she has"}, 
	{Element0: "Governor Zuckerberg", Element1: "sneeze", Element2: "plug"}, 
	{Element0: "plug", Element1: "protect", Element2: "charge"}, 
	{Element0: "bake", Element1: "capital", Element2: "a donation"}, 
	{Element0: "sail", Element1: "plug", Element2: "smile"}, 
	{Element0: "bake", Element1: "mend", Element2: "sail"}, 
	{Element0: "sail", Element1: "stuff", Element2: "COBOL"}, 
	{Element0: "radiate", Element1: "protect", Element2: "play"}
];

var DocumentB = [
	{Element0: "start", Element1: "play", Element2: "consider"}, 
	{Element0: "fence", Element1: "stuff", Element2: "fence"}, 
	{Element0: "start", Element1: "charge", Element2: "delicate"}, 
	{Element0: "plug", Element1: "bake", Element2: "fence"}, 
	{Element0: "tug", Element1: "start", Element2: "Edsger"}, 
	{Element0: "radiate", Element1: "sneeze", Element2: "romantic"}, 
	{Element0: "smile", Element1: "hurry", Element2: "consider"}, 
	{Element0: "plug", Element1: "tug", Element2: "tug"}, 
	{Element0: "start", Element1: "tug", Element2: "rejoice"}, 
	{Element0: "radiate", Element1: "succeed", Element2: "mend"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest " + DocumentB[4].Element2 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + DocumentA[2].Element1 + " intervention. I suspect that " + DocumentA[2].Element2 + " a "+ DocumentB[5].Element2 +" interest at the " + DocumentA[8].Element2 + ". I and the " + DocumentA[0].Element1 + " appreciate your many contributions over the years. However, this is a most " + DocumentB[2].Element2 + " matter which would require significant " + DocumentA[5].Element1 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + DocumentA[5].Element2 + " to my forthcoming campaign would help. Yours sincerely, " + DocumentA[3].Element0;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
