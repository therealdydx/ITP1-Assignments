/*

Officer: 3185280
CaseNum: 202-2-48564883-3185280

Case 202 - The case of Bob and Daisy - stage 3

Wow these two like to ham it up. Here’s the next letter. This time it’s from Bob (aka. Jobs).
I need you to decode it to uncover more details about their plan.

Discover the hidden code by commenting out all text commands except
those which produce Green Yellow filled text in Ballpointprint font.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var Ballpointprint;
var Melissa;
var Diggity;
var RonsFont;


function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(619,424);
	textSize(25);
}

function draw()
{
	background(255);

	fill(34,139,34);
	textFont(RonsFont);
//	text("from", 523,106);
	textFont(Ballpointprint);
//	text("will", 243,190);
	fill(123,104,238);
	textFont(Melissa);
//	text("and", 241,243);
	fill(255,105,180);
	textFont(Diggity);
//	text("the", 238,106);
	fill(128,0,0);
//	text("run", 270,243);
	fill(173,216,230);
//	text("can", 386,106);
	fill(124,252,0);
	textFont(Ballpointprint);
//	text("kisses,", 109,293);
	fill(0,255,127);
	textFont(Diggity);
//	text("our", 102,164);
	fill(222,184,135);
	textFont(RonsFont);
//	text("sts", 398,190);
	fill(138,43,226);
//	text("you.", 375,243);
	fill(219,112,147);
	textFont(Ballpointprint);
//	text("arcade.", 328,216);
	fill(160,82,45);
	textFont(Diggity);
//	text("at", 438,190);
	fill(153,50,204);
	textFont(Ballpointprint);
//	text("away", 468,106);
	textFont(Diggity);
//	text("y.", 518,135);
	fill(106,90,205);
//	text("at", 368,135);
	fill(0,255,255);
	textFont(Ballpointprint);
//	text("to", 321,135);
	fill(255,0,255);
	textFont(Melissa);
//	text("love", 438,75);
	fill(127,255,212);
	textFont(Diggity);
//	text("so", 454,216);
	textFont(RonsFont);
//	text("Love", 9,293);
	fill(178,34,34);
	textFont(Melissa);
//	text("all", 348,135);
	fill(244,164,96);
	textFont(Diggity);
//	text("down", 186,106);
	fill(127,255,0);
	textFont(RonsFont);
//	text("s.", 38,135);
	fill(255,255,0);
	textFont(Ballpointprint);
//	text("and", 14,216);
	fill(135,206,235);
	textFont(Diggity);
//	text("broadcast", 131,135);
	fill(0,0,255);
//	text("down", 217,216);
	fill(25,25,112);
	textFont(Melissa);
//	text("lovely", 45,25);
	fill(65,105,225);
	textFont(Diggity);
//	text("tempted", 481,216);
	fill(152,251,152);
	textFont(Melissa);
//	text("days", 276,106);
	fill(0,128,128);
//	text("not", 59,190);
	fill(176,224,230);
	textFont(Diggity);
//	text("walks", 138,164);
	fill(255,105,180);
	textFont(Ballpointprint);
//	text("by", 417,164);
	fill(173,255,47);
	text("gun", 84,106);
	fill(0,0,128);
//	text("car", 116,243);
	fill(255,99,71);
	textFont(RonsFont);
//	text("I", 549,75);
	fill(244,164,96);
//	text("now", 193,243);
	fill(0,0,139);
	textFont(Ballpointprint);
//	text("get", 424,106);
	fill(238,130,238);
	textFont(Melissa);
//	text("I", 373,106);
	fill(173,255,47);
	textFont(Ballpointprint);
	text("the", 222,164);
	text("hidden", 470,75);
	text("woods", 266,164);
	text("in", 193,164);
	fill(0,139,139);
	textFont(Melissa);
//	text("our.", 550,164);
	fill(107,142,35);
	textFont(Diggity);
//	text("all", 583,106);
	fill(205,133,63);
	textFont(Melissa);
//	text("shall", 94,135);
	fill(0,191,255);
	textFont(Diggity);
//	text("Upon", 6,75);
	fill(128,0,128);
//	text("dream", 13,164);
	fill(0,128,0);
	textFont(Melissa);
//	text("counting", 126,106);
	fill(220,20,60);
	textFont(RonsFont);
//	text("down", 356,164);
	fill(255,69,0);
	textFont(Diggity);
//	text("shall", 212,75);
	fill(64,224,208);
	textFont(Ballpointprint);
//	text("wine", 527,190);
	fill(0,128,128);
//	text("and", 64,293);
	fill(0,0,255);
	textFont(Diggity);
//	text("I", 540,135);
	fill(127,255,0);
	textFont(Melissa);
//	text("x", 45,343);
	fill(0,255,0);
	textFont(RonsFont);
//	text("longer", 275,75);
	fill(0,0,139);
	textFont(Melissa);
//	text("otion", 282,135);
	fill(139,0,139);
	textFont(Ballpointprint);
//	text("our", 223,135);
	fill(218,112,214);
	textFont(Melissa);
//	text("Bob", 14,343);
	fill(147,112,219);
	textFont(Ballpointprint);
//	text("am", 418,216);
	fill(0,0,128);
	textFont(Melissa);
//	text("to", 354,243);
	fill(0,255,255);
//	text("right", 154,243);
//	text("and", 327,164);
	fill(25,25,112);
	textFont(Diggity);
//	text("be", 283,190);
	fill(50,205,50);
	textFont(RonsFont);
//	text("my", 80,243);
	fill(148,0,211);
	textFont(Diggity);
//	text("the", 290,216);
	fill(210,105,30);
//	text("oppor", 441,135);
	fill(0,100,0);
	textFont(Melissa);
//	text("no", 254,75);
	fill(238,232,170);
	textFont(Diggity);
//	text("I", 405,216);
	fill(255,99,71);
	textFont(Melissa);
//	text("bar", 581,190);
	fill(64,224,208);
	textFont(RonsFont);
//	text("il", 353,106);
	fill(0,0,255);
	textFont(Melissa);
//	text("Daisy,", 88,25);
	fill(30,144,255);
	textFont(Diggity);
//	text("back", 306,243);
	fill(124,252,0);
	textFont(Melissa);
//	text("every", 398,135);
	fill(255,165,0);
//	text("at", 269,216);
	textFont(RonsFont);
//	text("toa", 363,190);
	fill(0,100,0);
//	text("unt", 315,106);
	fill(255,0,255);
	textFont(Ballpointprint);
//	text("too", 571,75);
//	text("be", 59,106);
	fill(139,0,139);
	textFont(RonsFont);
//	text("!", 153,190);
	fill(152,251,152);
	textFont(Diggity);
//	text("of", 74,164);
	fill(30,144,255);
	textFont(Melissa);
//	text("dev", 259,135);
	fill(0,191,255);
	textFont(RonsFont);
//	text("We", 62,135);
	fill(255,127,80);
	textFont(Melissa);
//	text("to", 559,216);
	fill(75,0,130);
	textFont(Diggity);
//	text("we", 177,75);
	fill(0,255,0);
//	text("despair", 87,190);
	fill(165,42,42);
//	text("tunit", 481,135);
	fill(144,238,144);
	textFont(Melissa);
//	text("the", 454,164);
	fill(250,128,114);
	textFont(Diggity);
//	text("jump", 16,243);
	fill(0,128,0);
//	text("have", 11,106);
	fill(205,133,63);
	textFont(Ballpointprint);
//	text("Do", 19,190);
	fill(255,0,0);
	textFont(RonsFont);
//	text("my", 51,75);
	fill(139,0,139);
	textFont(Diggity);
//	text("our", 402,75);
	fill(255,165,0);
	textFont(Melissa);
//	text("Soon", 170,190);
//	text("raising", 312,190);
//	text("harb", 520,164);
	fill(233,150,122);
	textFont(Diggity);
//	text("we", 208,190);
	fill(205,133,63);
	textFont(Ballpointprint);
//	text("keep", 344,75);
	fill(64,224,208);
//	text("Oh", 6,25);
	fill(75,0,130);
//	text("old", 482,164);
	fill(255,0,0);
	textFont(Diggity);
//	text("Jerrys", 468,190);
	fill(165,42,42);
	textFont(Melissa);
//	text("in", 64,243);
	fill(64,224,208);
	textFont(Ballpointprint);
//	text("shooters", 136,216);
	fill(0,128,0);
	textFont(RonsFont);
//	text("return", 87,75);
//	text("playing", 59,216);
//	text("thi", 12,135);



}
