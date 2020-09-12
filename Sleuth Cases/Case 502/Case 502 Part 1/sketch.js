/*

Officer: 3185280
CaseNum: 502-0-88810699-3185280

Case 502 - Old friends - stage 1

Corruption is everywhere in Console City, and the cops are no exception.
I’ve managed to lay my hands on some government censored documents,
and I think they lead to a trail of corruption that goes all the way to the top. However, the key parts have been redacted.
Luckily a source of mine has sent me redacted words in the very order that they appear in the document.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Document = ["Lovelace", "Torvalds", "Algol Fish Wholesalers", "affair", "Governor Zuckerberg"];

var B_Document = ["supply of fish", "Cobol Theatre", "Judge Hopper", "Edsger", "clean up"];

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

  missingWords = "Governor Zuckerberg, Algol Fish Wholesalers, supply of fish, Cobol Theatre, Judge Hopper, clean up, Torvalds, affair, Lovelace, Edsger";

  redactedText = "Dear " + A_Document[4] +", I am writing to you with much confusion and distress. As you know my company " + A_Document[2] + "has been a bastion of the community. Over the years we have provided many jobs for the people of Console City. We’ve kept the city in a good " + B_Document[0] + ". We even paid some tax once. Now I find that our efforts to open a new plant opposite the " + B_Document[1] + " is being blocked by your very own " + B_Document[2] + ". Did I not help you" + B_Document[4] + " the mess after " + A_Document[1] + "? Did I not keep quiet about your " + A_Document[3] + " with " + A_Document[0] + "? Contact me discreetly and with haste. Some arrangement must be found. Your old friend, " + B_Document[3];

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
