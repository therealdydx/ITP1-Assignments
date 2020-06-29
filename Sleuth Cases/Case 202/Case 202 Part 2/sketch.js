/*

Officer: 3185280
CaseNum: 202-1-97722593-3185280

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Magenta filled text with a Indigo outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(692,630);
	textFont(letterFont);
	textSize(31);
}

function draw()
{
	background(255);

    fill(178,34,34);
	stroke(218,165,32);
//	text("return.", 13,404);
	fill(255,127,80);
	stroke(160,82,45);
//	text("longer", 382,234);
	fill(65,105,225);
	stroke(128,0,128);
//	text("How", 208,234);
	fill(153,50,204);
	stroke(139,0,0);
//	text("we", 473,129);
	fill(0,0,255);
	stroke(127,255,0);
//	text("do", 492,234);
	fill(186,85,211);
	stroke(0,206,209);
//	text("the", 369,299);
	fill(210,105,30);
	stroke(255,165,0);
//	text("u", 10,299);
    fill(255,0,255);
	stroke(75,0,130);
	text("town", 425,335);
	fill(220,20,60);
	stroke(0,0,128);
//	text("having", 187,93);
	fill(144,238,144);
	stroke(124,252,0);
//	text("is", 316,129);
	fill(255,0,255);
	stroke(0,139,139);
//	text("long", 166,161);
	fill(0,128,128);
	stroke(139,0,0);
//	text("small", 332,335);
	fill(255,105,180);
	stroke(255,140,0);
//	text("p", 551,93);
	fill(0,191,255);
	stroke(139,69,19);
//	text("will", 462,266);
	fill(32,178,170);
	stroke(255,165,0);
//	text("on", 361,372);
	fill(219,112,147);
	stroke(34,139,34);
//	text("sky,", 345,200);
	fill(0,255,255);
	stroke(128,0,0);
//	text("be", 578,266);
	fill(128,128,0);
	stroke(255,255,0);
//	text("How", 15,129);
	fill(218,165,32);
	stroke(128,0,0);
//	text("store", 54,266);
	fill(50,205,50);
	stroke(255,165,0);
//	text("?", 217,299);
	fill(153,50,204);
	stroke(0,0,128);
//	text("darling", 62,31);
	fill(244,164,96);
	stroke(154,205,50);
//	text("night", 254,200);
	fill(75,0,130);
	stroke(107,142,35);
//	text("lace.", 571,93);
	fill(210,105,30);
	stroke(0,0,139);
//	text("we", 524,266);
	fill(107,142,35);
	stroke(160,82,45);
//	text("I", 624,161);
	fill(255,215,0);
	stroke(255,255,0);
//	text("orever", 28,466);
	fill(138,43,226);
	stroke(46,139,87);
//	text("to", 244,161);
	fill(218,112,214);
	stroke(165,42,42);
//	text("at", 82,335);
	fill(165,42,42);
	stroke(139,69,19);
//	text("x", 106,528);
	fill(238,130,238);
	stroke(139,0,0);
//	text("can", 504,200);
	fill(138,43,226);
	stroke(139,69,19);
//	text("of", 91,234);
	fill(240,128,128);
	stroke(0,0,205);
//	text("I", 147,161);
	fill(128,0,0);
	stroke(210,105,30);
//	text("the", 193,200);
	fill(255,0,255);
	stroke(128,128,0);
//	text("my", 123,335);
	fill(255,140,0);
	stroke(0,255,255);
//	text("in", 430,161);
	fill(178,34,34);
	stroke(199,21,133);
//	text("ide,", 197,335);
	fill(0,255,255);
	stroke(165,42,42);
//	text("only", 15,234);
	fill(128,0,128);
	stroke(255,140,0);
//	text("w", 538,299);
	fill(128,128,0);
	stroke(128,0,0);
//	text("?", 121,161);
	fill(50,205,50);
	stroke(128,0,128);
//	text("gain", 139,299);
	fill(218,165,32);
	stroke(0,128,0);
//	text("kissed", 13,161);
	fill(139,69,19);
	stroke(128,0,128);
//	text("My", 7,31);
	fill(0,191,255);
	stroke(255,215,0);
//	text("longi", 209,266);
	fill(218,165,32);
	stroke(124,252,0);
//	text("you", 363,161);
	fill(255,127,80);
	stroke(255,140,0);
//	text("How", 10,93);
	fill(222,184,135);
	stroke(0,128,0);
//	text("F", 10,466);
	fill(0,0,128);
	stroke(139,0,139);
//	text("When", 362,266);
    fill(255,0,255);
	stroke(75,0,130);
	text("bank", 225,372);
	fill(173,255,47);
	stroke(255,0,255);
//	text("you", 15,335);
	fill(255,255,0);
	stroke(0,255,255);
//	text("nited", 30,299);
	fill(238,130,238);
	stroke(0,0,205);
//	text("miss", 106,93);
	fill(0,0,255);
	stroke(34,139,34);
//	text("arms.", 527,161);
	fill(0,255,127);
	stroke(255,140,0);
//	text("this", 265,335);
	fill(199,21,133);
	stroke(0,255,255);
//	text("a", 120,299);
	fill(255,0,0);
	stroke(124,252,0);
//	text("ng", 286,266);
	fill(144,238,144);
	stroke(0,255,255);
//	text("since", 382,129);
	fill(255,0,255);
	stroke(148,0,211);
//	text("s", 181,335);
	fill(244,164,96);
	stroke(0,0,255);
//	text("think", 570,200);
	fill(240,128,128);
	stroke(160,82,45);
//	text("swift", 490,372);
	fill(0,0,205);
	stroke(0,0,139);
//	text("Bob,", 182,31);
	fill(135,206,235);
	stroke(34,139,34);
//	text("in", 330,299);
	fill(148,0,211);
	stroke(255,69,0);
//	text("last", 527,129);
	fill(0,0,128);
	stroke(0,255,127);
//	text("you", 303,93);
	fill(128,128,0);
	stroke(160,82,45);
//	text("much", 285,234);
	fill(240,230,140);
	stroke(25,25,112);
//	text("I'm", 167,372);
	fill(222,184,135);
	stroke(0,191,255);
//	text("and", 416,200);
	fill(0,255,0);
	stroke(210,105,30);
//	text("Even", 243,299);
    fill(255,0,255);
	stroke(75,0,130);
	text("hold", 285,161);
	text("spring", 430,299);
	fill(65,105,225);
	stroke(178,34,34);
//	text("you.", 131,234);
	fill(154,205,50);
	stroke(50,205,50);
//	text("I", 485,200);
	fill(153,50,204);
	stroke(165,42,42);
//	text("my", 469,161);
	fill(255,127,80);
	stroke(75,0,130);
//	text("feels", 511,335);
	fill(147,112,219);
	stroke(255,0,255);
//	text("I", 541,234);
	fill(0,0,205);
	stroke(34,139,34);
//	text("I", 87,93);
	fill(0,255,255);
	stroke(0,255,0);
//	text("stare", 14,200);
	fill(124,252,0);
	stroke(0,0,128);
//	text("the", 490,93);
	fill(0,0,139);
	stroke(255,0,255);
//	text("?", 336,266);
	fill(250,128,114);
	stroke(0,0,205);
//	text("Daisy", 10,528);
	fill(255,0,255);
	stroke(139,69,19);
//	text("your", 410,372);
	stroke(75,0,130);
	text("up", 102,200);
	text("at", 152,200);
	fill(220,20,60);
	stroke(107,142,35);
//	text("yours,", 138,466);
	fill(173,255,47);
	stroke(139,69,19);
//	text("it", 351,129);
	fill(139,0,0);
	stroke(184,134,11);
//	text("desolate.", 14,372);
	fill(106,90,205);
	stroke(218,165,32);
//	text("months", 189,129);
	fill(255,0,255);
	stroke(128,0,0);
//	text("have", 560,234);
	fill(0,139,139);
	stroke(255,255,0);
//	text("many", 92,129);
	fill(184,134,11);
	stroke(25,25,112);
//	text("ing", 302,372);
	fill(0,100,0);
	stroke(0,255,127);
//	text("to", 13,266);
	fill(138,43,226);
	stroke(0,0,205);
//	text("this", 142,266);
	fill(34,139,34);
	stroke(139,0,0);
//	text("ithout", 563,299);
	fill(0,255,127);
	stroke(50,205,50);
//	text("around", 370,93);



}
