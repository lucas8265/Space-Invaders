/******************************************************************
/******************************************************************
/******************************************************************

██╗     ███████╗███████╗███████╗ ██████╗ ███╗   ██╗    ██████╗
██║     ██╔════╝██╔════╝██╔════╝██╔═══██╗████╗  ██║    ╚════██╗
██║     █████╗  ███████╗███████╗██║   ██║██╔██╗ ██║     █████╔╝
██║     ██╔══╝  ╚════██║╚════██║██║   ██║██║╚██╗██║     ╚═══██╗
███████╗███████╗███████║███████║╚██████╔╝██║ ╚████║    ██████╔╝
╚══════╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝

********************************
******* ADDING A PLAYER ********
********************************

 */

/**** GLOBAL VARIABLES ****/
var __gameState;
var __player;

/**** SPRITES ****/
Crafty.sprite("../img/sprite.png", {
  ship: [0, 0, 224, 224]
})
/*** SOLUTION CODE ***/


initialiseGame();


function initialiseGame(){
  // Draw screen after all assets load
  Crafty.init(GAME_WIDTH, GAME_HEIGHT, document.getElementById('game'));

  // Add colour to the Background with no image
  setInterval(function(){
    var colour1 = Math.floor(Math.random() * 134);
    var monkey = Math.floor(Math.random() * 44);
    var colour3 = Math.floor(Math.random() * 170);
    Crafty.background('rgb(' + colour1 + ',' + monkey + ',' + colour3 + ')');
  }, 150);


  // Create the Starfield
  __starField = new Starfield(game);
__starField.maxVelocity = 1500
__starField.minVelocity = 1
  // Start the __starField
  /*** SOLUTION CODE ***/
__starField.start();

  // Add a Player
  __player = Crafty.e("Player");
}

/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

  1. This lesson is adding a Player..BUT when you run your code - do you see a player ?

  2. What do we need to add ? Try and add it above under the section **** SPRITES ****

  3. Run your code after completing ALL these things again. What is different?

  4. Look at this line of code which you will see above:

  __player = Crafty.e("Player");

  Player corresponds to the file Player.js in the 'js' directory. Open it and look at the following initialisation
  code:

  init: function() {
    this.score = 0;
    this.x = 254 - 32 / 2;
    this.y = GAME_HEIGHT - (34*2);
    this.twoway(100);
    this.bindEvents(this);
  },

  this.x AND this.y specify the position the ship will be placed on the screen.

  5. The 'Player' component contains the following code:

  Crafty.c("Player", {
    required: "2D, Canvas, Twoway, SpriteAnimation, Collision, ship",

  NOTE:
    - 'SpriteAnimation' allows this player to use animated sprites
    - 'Twoway' gives the player movement
    - 'ship' is the name of the Sprite that will be associated to this player.

  Did you create a sprite called 'ship' in this lesson?

 */
