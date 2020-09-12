/*

Officer: 3185280
CaseNum: 502-3-40898828-3185280

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var documentA = [
{
	part0: ["stuff", "start", "consider", "charge"], 
	part1: ["Edsger", "succeed", "tug", "charge"], 
	part2: ["ALGOL fish wholesalers", "ALGOL", "stuff", "radiate"]
},
{
	part0: ["meddle", "play", "bake", "clip"], 
	part1: ["mend", "bake", "play", "plug"], 
	part2: ["hurry", "meddle", "consider", "protect"]
},
{
	part0: ["consider", "rejoice", "plug", "plug"], 
	part1: ["fence", "succeed", "radiate", "syndicate"], 
	part2: ["stuff", "play", "play", "consider"]
},
{
	part0: ["meddle", "bake", "bake", "sneeze"], 
	part1: ["bake", "charge", "mend", "protect"], 
	part2: ["sneeze", "mend", "sail", "mend"]
},
{
	part0: ["Governor Zuckerberg", "play", "meddle", "fence"], 
	part1: ["fence", "$200,000", "sail", "tug"], 
	part2: ["succeed", "meddle", "meddle", "plug"]
}];

var documentB = [
{
	part0: ["you", "sneeze", "fence", "plug"], 
	part1: ["succeed", "play", "succeed", "consider"], 
	part2: ["consider", "stuff", "tug", "hurry"]
},
{
	part0: ["sail", "rejoice", "radiate", "fence"], 
	part1: ["clip", "protect", "sneeze", "meddle"], 
	part2: ["protect", "smile", "charge", "sail"]
},
{
	part0: ["radiate", "clip", "consider", "start"], 
	part1: ["donation", "consider", "meddle", "mend"], 
	part2: ["development", "bake", "tug", "consider"]
},
{
	part0: ["bake", "meddle", "succeed", "sail"], 
	part1: ["tug", "COBOL", "bake", "start"], 
	part2: ["play", "sail", "start", "sail"]
},
{
	part0: ["protect", "tug", "succeed", "radiate"], 
	part1: ["fence", "clip", "clip", "sail"], 
	part2: ["consider", "charge", "succeed", "meddle"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest " + documentA[0].part1[0] + ", I have just received your very generous " + documentB[2].part1[0] + " of " + documentA[4].part1[1] + ". Thank you. This will be invaluable to our campaign. " + documentA[0].part2[1] + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + documentB[0].part0[0] + " or " + documentA[0].part2[0] + " to the " + documentA[2].part1[3] + ". Your new " + documentB[2].part2[0] + " at the " + documentB[3].part1[1] + " can now proceed without impediment. Yours sincerely, " + documentA[4].part0[0];

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
