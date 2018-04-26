/******************************************************************
/******************************************************************
/******************************************************************

8                                        88
8     eeee eeeee eeeee eeeee eeeee       88
8e    8    8   " 8   " 8  88 8   8       88  88
88    8eee 8eeee 8eeee 8   8 8e  8       88ee88
88    88      88    88 8   8 88  8           88
88eee 88ee 8ee88 8ee88 8eee8 88  8           88

********************************
******* ADDING AN ENEMY ********
********************************

 */

/**** GLOBAL VARIABLES ****/
var __gameState;
var __player;

/**** SPRITES ****/
Crafty.sprite("../img/ship.png", {
  ship: [0, 0, 32, 34]
});
Crafty.sprite("../img/Sprite.png",{
  bee: [0, 0, 220, 220]
});
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
__starField.maxVelocity = 1200
__starField.minVelocity = 1
// Start the __starField
/*** SOLUTION CODE ***/
__starField.start();

// Add a Player
__player = Crafty.e("Player");


  // Add an Enemy
  let enemy = Crafty.e("EnemySimple")
  enemy.afterInit({x: 100, y: 100, speed:50});
}

/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

1. Add a sprite above for the enemy

2. What kind of variable is 'enemy' above at x=100, y=100?

3. How can we position our enemy above at x=100, y=100?
(HINT: we need to call the afterInit function and pass in an object with x and y co-ordinates)

4. Test/Run you code and make sure that it is working as you expect.

 */
