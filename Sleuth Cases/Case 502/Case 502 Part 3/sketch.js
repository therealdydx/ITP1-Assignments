/*

Officer: 3185280
CaseNum: 502-2-40265693-3185280

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var listing_A = {
	redacted_0: [ "hurry", "play", "consider"], 
	redacted_1: [ "ALGOL", "$200,000", "hit"], 
	redacted_2: [ "radiate", "play", "smile"], 
	redacted_3: [ "Hopper", "play", "consider"], 
	redacted_4: [ "campaign", "stuff", "meddle"], 
	redacted_5: [ "radiate", "syndicate", "stuff"], 
	redacted_6: [ "plug", "tug", "sneeze"], 
	redacted_7: [ "mend", "charge", "succeed"], 
	redacted_8: [ "start", "hurry", "smile"], 
	redacted_9: [ "a donation", "start", "bake"]
};

var listing_B = {
	redacted_0: [ "meddle", "start", "clip"], 
	redacted_1: [ "succeed", "fence", "rejoice"], 
	redacted_2: [ "sneeze", "play", "succeed"], 
	redacted_3: [ "mend", "Governor Zuckerberg", "radiate"], 
	redacted_4: [ "succeed", "radiate", "play"], 
	redacted_5: [ "bake", "stuff", "Edsger"], 
	redacted_6: [ "mend", "play", "fence"], 
	redacted_7: [ "rejoice", "rejoice", "sail"], 
	redacted_8: [ "fence", "smile", "stuff"], 
	redacted_9: [ "mend", "play", "consider"]
};

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

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear " + listing_B.redacted_3[1] + ", I am sure that something could be worked out in terms of " + listing_A.redacted_9[0] + " for your " + listing_A.redacted_4[0] + ". How does " + listing_A.redacted_1[1] + " sound? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + listing_A.redacted_3[0] + " needs to be out of the picture. She’s caused enough trouble. Get the " + listing_A.redacted_5[1] + " to organise the " + listing_A.redacted_1[2] + " but I’d prefer it you don’t mention me or " + listing_A.redacted_1[0] + ". I owe them enough favours already. Your old friend, " + listing_B.redacted_5[2] + ".";

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
