/*

Officer: 3185280
CaseNum: 202-0-68138237-3185280

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Chartreuse text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(698,725);
	textFont(letterFont);
	textSize(34);
}

function draw()
{
	background(255);

	fill(0,255,127);
//	text("my", 240,215);
//	text("Love", 11,537);
fill(255,165,0);
//	text("From", 11,102);
fill(147,112,219);
//	text("I", 116,365);
fill(139,69,19);
//	text("be", 234,365);
fill(255,105,180);
//	text("the", 107,102);
fill(0,139,139);
//	text("few", 540,142);
fill(199,21,133);
//	text("confe", 239,256);
fill(173,216,230);
//	text("love.", 11,215);
fill(25,25,112);
//	text("sunny", 304,215);
fill(178,34,34);
//	text("those", 434,142);
//	text("alive", 14,399);
fill(255,127,80);
//	text("I", 485,102);
fill(255,0,255);
//	text("uiet", 315,293);
fill(210,105,30);
//	text("a", 79,293);
fill(128,0,0);
//	text("that", 405,102);
fill(220,20,60);
//	text("moment", 251,102);
//	text("the", 226,293);
	fill(127,255,0);
	text("in", 493,215);
	text("day", 419,215);
	text("first", 174,102);
fill(205,133,63);
//	text("mus", 395,328);
fill(72,209,204);
//	text("lovely", 79,34);
fill(0,128,128);
//	text("g", 158,469);
fill(127,255,212);
//	text("that", 105,399);
fill(255,0,255);
//	text("?", 433,256);
fill(255,0,255);
//	text("I", 92,256);
fill(165,42,42);
//	text("saw", 506,102);
fill(250,128,114);
//	text("like", 117,328);
//	text("Oh", 19,34);
fill(0,255,0);
//	text("my", 413,180);
fill(128,0,0);
//	text("blessed", 253,328);
fill(0,255,255);
//	text("one", 477,180);
fill(160,82,45);
//	text("q", 293,293);
fill(153,50,204);
//	text("It", 462,256);
fill(139,0,139);
//	text("face,", 126,142);
fill(233,150,122);
//	text("ic", 468,328);
fill(32,178,170);
//	text("seconds", 13,180);
//	text("I", 471,293);
fill(238,130,238);
//	text("since", 580,399);
fill(128,128,0);
//	text("I", 185,399);
fill(238,232,170);
//	text("A", 535,215);
fill(139,69,19);
//	text("the", 551,328);
//	text("am", 14,293);
//	text("of", 518,433);
	fill(127,255,0);
	text("is", 496,256);
	text("May", 11,256);
	text("date", 156,433);
fill(148,0,211);
//	text("sion", 352,256);
fill(222,184,135);
//	text("in", 184,293);
//	text("from", 344,142);
//	text("think", 421,433);
//	text("our", 16,433);
//	text("of", 507,328);
fill(255,0,0);
//	text("I", 638,256);
fill(240,128,128);
//	text("reen", 180,469);
fill(153,50,204);
//	text("luckiest", 355,365);
fill(0,0,255);
//	text("h", 15,365);
fill(0,128,0);
//	text("Daisy,", 190,34);
//	text("person", 497,365);
	fill(127,255,0);
	text("chosen", 359,399);
fill(30,144,255);
//	text("your", 562,433);
//	text("lone", 100,293);
fill(153,50,204);
//	text("were", 319,180);
//	text("s", 334,256);
fill(50,205,50);
//	text("last", 84,433);
fill(184,134,11);
//	text("pril.", 558,215);
fill(139,69,19);
//	text("are", 174,215);
fill(255,140,0);
//	text("that", 165,180);
fill(176,224,230);
//	text("oice", 36,328);
//	text("knew", 242,142);
fill(135,206,250);
//	text("your", 271,399);
fill(218,112,214);
//	text("hear", 492,293);
fill(135,206,250);
//	text("only", 338,433);
fill(123,104,238);
//	text("can", 265,433);
fill(0,0,205);
//	text("x", 88,605);
//	text("darling,", 17,469);
fill(106,90,205);
//	text("makea", 113,256);
fill(255,99,71);
//	text("must", 137,365);
//	text("arp.", 37,365);
fill(0,0,255);
//	text("lovely", 15,142);
fill(154,205,50);
//	text("eyes.", 268,469);
//	text("You", 104,215);
fill(0,0,139);
//	text("I", 244,433);
//	text("your", 581,293);
fill(139,0,0);
//	text("am", 206,399);
fill(138,43,226);
//	text("you", 245,180);
//	text("Bob", 11,605);
fill(0,0,139);
//	text("when", 534,256);
fill(176,224,230);
//	text("that", 391,293);
fill(160,82,45);
//	text("the", 288,365);
fill(153,50,204);
//	text("kisses,", 178,537);
fill(123,104,238);
//	text("your", 584,102);
//	text("v", 16,328);
//	text("I", 221,142);
fill(238,232,170);
//	text("true", 552,180);
fill(0,100,0);
//	text("the", 186,328);
fill(255,215,0);
//	text("Ever", 493,399);
fill(255,99,71);
//	text("and", 102,537);



}
