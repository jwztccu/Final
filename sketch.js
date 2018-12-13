var eggTart;
var potSticker;
var sesameBall;
var beefNoodleRoll;
var taroPuff;
var shuiMai;

function setup() {
  createCanvas(1500, 700);
  //start eggtart//
  eggTart = createSprite(180, 180);
  eggTart.addAnimation('normal', 'images/dimsum_dahntaht_eggtart.png');
  eggTart.addAnimation('hover', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_1.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png', 'images/dimsum_dahntaht_eggtart_2.png');
//end eggtart//
//start potsticker//
  potSticker = createSprite(500, 180);
  potSticker.addAnimation('normal', 'images/dimsum_potsticker.png');
  potSticker.addAnimation('hover', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_1.png', 'images/dimsum_potsticker_2.png', 'images/dimsum_potsticker_2.png', 'images/dimsum_potsticker_2.png');
//end potsticker//
//start sesame ball//
sesameBall = createSprite(820, 180);
sesameBall.addAnimation('normal', 'images/dimsum_sesameball.png');
sesameBall.addAnimation('hover', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_1.png', 'images/dimsum_sesameball_2.png', 'images/dimsum_sesameball_2.png', 'images/dimsum_sesameball_2.png' );
//end sesame ball//

//start beefNoodleRoll//
beefNoodleRoll = createSprite(220, 450);
beefNoodleRoll.addAnimation('normal', 'images/dimsum_gnowcherng_beefnoodleroll_1.png');
beefNoodleRoll.addAnimation('hover', 'images/dimsum_gnowcherng_beefnoodleroll_2.png', 'images/dimsum_gnowcherng_beefnoodleroll_2.png', 'images/dimsum_gnowcherng_beefnoodleroll_2.png', 'images/dimsum_gnowcherng_beefnoodleroll_1.png', 'images/dimsum_gnowcherng_beefnoodleroll_1.png', 'images/dimsum_gnowcherng_beefnoodleroll_1.png');
//end beefNoodleRoll//


//start shuiMai//
shuiMai = createSprite(560, 450);
shuiMai.addAnimation('normal', 'images/dimsum_shuimai.png');
shuiMai.addAnimation('hover', 'images/dimsum_shuimai_1.png', 'images/dimsum_shuimai_1.png', 'images/dimsum_shuimai_1.png', 'images/dimsum_shuimai_2.png', 'images/dimsum_shuimai_2.png', 'images/dimsum_shuimai_2.png');
//end taroPuff//


//start taroPuff//
taroPuff = createSprite(865, 465);
taroPuff.addAnimation('normal', 'images/dimsum_wugawk_taropuff.png');
taroPuff.addAnimation('hover', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff.png', 'images/dimsum_wugawk_taropuff_1.png', 'images/dimsum_wugawk_taropuff_1.png', 'images/dimsum_wugawk_taropuff_1.png');
//end taroPuff//






//I can assign functions to be called upon specific mouse events
//within the function "this" will reference the sprite that triggered the event
  //start eggtart//
eggTart.onMouseOver = function() {
  this.changeAnimation('hover');
};
eggTart.onMouseOut = function() {
  this.changeAnimation('normal');
};
//end eggtart//
//start potsticker//
potSticker.onMouseOver = function() {
  this.changeAnimation('hover');
};
potSticker.onMouseOut = function() {
  this.changeAnimation('normal');
};
//end potsticker//
//start sesame ball//
sesameBall.onMouseOver = function() {
  this.changeAnimation('hover');
};
sesameBall.onMouseOut = function() {
  this.changeAnimation('normal');
};
//end sesame ball//


//start beefNoodleRoll//
beefNoodleRoll.onMouseOver = function() {
  this.changeAnimation('hover');
};
beefNoodleRoll.onMouseOut = function() {
  this.changeAnimation('normal');
};
//end beefNoodleRoll//



//start taroPuff//
taroPuff.onMouseOver = function() {
  this.changeAnimation('hover');
};
taroPuff.onMouseOut = function() {
  this.changeAnimation('normal');
};
//end taroPuff//



//start shuiMai//
shuiMai.onMouseOver = function() {
  this.changeAnimation('hover');
};
shuiMai.onMouseOut = function() {
  this.changeAnimation('normal');
};
//end shuiMai//


  //detect the mouse position and click on this sprite
  //if no collider is defined, the image bounding box will be checked
  eggTart.mouseActive = true;
  potSticker.mouseActive = true;
  sesameBall.mouseActive = true;
  beefNoodleRoll.mouseActive = true;
  taroPuff.mouseActive = true;
  shuiMai.mouseActive = true;
}

function draw() {
  background(1000,800,400);
  drawSprites();
}

//START//

//END//
