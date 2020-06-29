/*

Officer: 3185280
CaseNum: 202-3-31630531-3185280

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Turquoise filled text with a Medium Blue outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(554,423);
	textSize(26);
}

function draw()
{
	background(255);

	fill(139,0,139);
	stroke(46,139,87);
	textFont(Ballpointprint);
//	text("continual", 299,164);
	fill(250,128,114);
	stroke(153,50,204);
	textFont(Melissa);
//	text("sort", 185,105);
	fill(138,43,226);
	stroke(218,165,32);
	textFont(Ballpointprint);
//	text("so", 185,223);
	fill(30,144,255);
	stroke(255,140,0);
	textFont(RonsFont);
//	text("s,", 459,197);
	push();
	fill(138,43,226);
//	text("sometimes.", 304,223);
	pop();
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("sure", 19,197);
	push();
	fill(154,205,50);
	stroke(127,255,0);
	textFont(Melissa);
//	text("our", 369,105);
	pop();
	fill(128,128,0);
	textFont(RonsFont);
//	text("Is", 335,105);
	fill(250,128,114);
	stroke(50,205,50);
	textFont(Melissa);
//	text("I'm", 453,164);
	fill(139,0,0);
	stroke(153,50,204);
	textFont(RonsFont);
//	text("this", 223,105);
	fill(0,0,255);
	stroke(154,205,50);
	textFont(Ballpointprint);
//	text("not", 482,164);
	fill(0,255,0);
	stroke(0,255,127);
//	text("s", 431,164);
	fill(135,206,235);
	stroke(255,69,0);
//	text("?", 264,138);
	push();
	fill(152,251,152);
	stroke(178,34,34);
	textFont(RonsFont);
//	text("The", 348,197);
	pop();
	fill(0,128,0);
//	text("I", 197,197);
	fill(0,0,139);
	stroke(255,0,255);
	textFont(Diggity);
//	text("can", 52,164);
	fill(0,139,139);
	stroke(127,255,0);
	textFont(Melissa);
//	text("My", 6,26);
	fill(138,43,226);
	stroke(50,205,50);
	textFont(Diggity);
//	text("for", 15,105);
	fill(165,42,42);
	stroke(255,0,255);
	textFont(RonsFont);
//	text("out.", 290,105);
	fill(218,112,214);
	stroke(0,0,128);
	textFont(Melissa);
//	text("all", 270,105);
	fill(75,0,130);
	stroke(255,165,0);
	textFont(Ballpointprint);
//	text("short", 125,138);
	fill(147,112,219);
	stroke(165,42,42);
//	text("should", 373,78);
	fill(244,164,96);
	stroke(255,165,0);
//	text("You", 93,223);
	fill(123,104,238);
	stroke(127,255,0);
	textFont(RonsFont);
//	text("me", 193,78);
	fill(0,255,127);
	stroke(255,140,0);
	textFont(Diggity);
//	text("yours,", 69,275);
	fill(173,216,230);
	stroke(218,165,32);
	textFont(Ballpointprint);
//	text("send", 436,138);
	fill(0,255,255);
	stroke(255,0,0);
//	text("Daisy", 11,327);
	fill(0,255,127);
	stroke(46,139,87);
//	text("I", 21,164);
	push();
	fill(153,50,204);
	stroke(32,178,170);
	textFont(Melissa);
//	text("money", 215,138);
	pop();
	stroke(210,105,30);
	textFont(Melissa);
//	text("Are", 48,138);
	fill(123,104,238);
	stroke(0,255,255);
	textFont(RonsFont);
//	text("ng", 85,26);
	fill(148,0,211);
	stroke(75,0,130);
//	text("se", 268,164);
	fill(72,209,204);
	stroke(0,0,205);
	textFont(Ballpointprint);
	text("guard", 215,223);
	fill(123,104,238);
	stroke(255,255,0);
	textFont(RonsFont);
//	text("avoiding", 104,78);
	fill(176,224,230);
	stroke(220,20,60);
	textFont(Melissa);
//	text("x", 78,327);
	fill(152,251,152);
	stroke(0,0,128);
	textFont(Diggity);
//	text("can", 228,197);
	fill(0,255,255);
	stroke(210,105,30);
//	text("Bob,", 117,26);
	fill(250,128,114);
	stroke(255,215,0);
	textFont(RonsFont);
//	text("silence.", 14,223);
	fill(240,230,140);
	stroke(139,69,19);
//	text("no", 90,164);
	push();
	fill(255,215,0);
	stroke(127,255,0);
//	text("a", 54,105);
	pop();
	stroke(165,42,42);
	textFont(Diggity);
//	text("cash.", 493,138);
	fill(255,69,0);
	stroke(0,128,128);
	textFont(RonsFont);
//	text("darli", 34,26);
	push();
	fill(135,206,250);
	stroke(0,255,255);
//	text("the", 235,164);
	pop();
	fill(255,255,0);
//	text("Perhaps", 250,78);
	fill(205,133,63);
	stroke(218,165,32);
	textFont(Diggity);
//	text("ignore", 178,164);
	fill(100,149,237);
	stroke(0,250,154);
	textFont(Ballpointprint);
//	text("of", 180,138);
	fill(0,0,255);
	stroke(0,139,139);
//	text("?", 319,197);
	fill(255,127,80);
	stroke(0,128,128);
//	text("and", 140,105);
	push();
	fill(123,104,238);
	stroke(255,165,0);
	textFont(Melissa);
//	text("much", 102,197);
	pop();
	fill(123,104,238);
//	text("take", 266,197);
	fill(173,216,230);
	stroke(0,100,0);
	textFont(RonsFont);
//	text("are", 138,223);
	fill(238,130,238);
	stroke(0,255,0);
	textFont(Melissa);
//	text("Forever", 9,275);
	fill(255,140,0);
	stroke(255,69,0);
//	text("how", 69,197);
	fill(128,128,0);
	stroke(255,215,0);
	textFont(Ballpointprint);
//	text("If", 293,138);
	fill(128,0,0);
	stroke(107,142,35);
	textFont(RonsFont);
//	text("you", 80,138);
	fill(255,99,71);
	stroke(0,191,255);
	textFont(Ballpointprint);
//	text("we", 334,78);
	fill(205,133,63);
	stroke(184,134,11);
	textFont(Diggity);
//	text("away", 461,78);
	fill(64,224,208);
	stroke(0,255,255);
	textFont(Melissa);
//	text("go", 439,78);
	fill(0,139,139);
	stroke(255,69,0);
//	text("so,", 337,138);
	push();
	fill(0,0,128);
	stroke(25,25,112);
	textFont(RonsFont);
//	text("Are", 11,78);
	pop();
	fill(0,206,209);
	stroke(0,206,209);
	textFont(RonsFont);
//	text("you", 59,78);
	fill(123,104,238);
	stroke(153,50,204);
//	text("?", 232,78);
	fill(255,0,255);
	stroke(0,0,139);
	textFont(Ballpointprint);
//	text("?", 19,138);
	fill(124,252,0);
	stroke(50,205,50);
	textFont(Melissa);
//	text("relationship", 396,105);
	fill(72,209,204);
	stroke(0,0,205);
	textFont(Ballpointprint);
	text("can", 396,138);
	text("safe", 483,105);
	text("delay", 381,164);
	fill(0,128,0);
	stroke(0,139,139);
//	text("more", 142,197);
	fill(72,209,204);
	stroke(0,0,205);
	text("break", 74,105);
	text("I", 365,138);
	text("the", 484,197);
	push();
	fill(0,128,128);
	stroke(255,255,0);
	textFont(Diggity);
//	text("longer", 122,164);
	pop();
	fill(107,142,35);
	stroke(255,0,255);
	textFont(RonsFont);
//	text("secret", 388,197);
	fill(50,205,50);
	stroke(0,128,0);
	textFont(Ballpointprint);
//	text("ed", 264,223);



}
