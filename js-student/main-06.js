/******************************************************************
/******************************************************************
/******************************************************************

.##......######...####....####....####...##..##....................##...
.##......##......##......##......##..##..###.##...................##....
.##......####.....####....####...##..##..##.###..................#####..
.##......##..........##......##..##..##..##..##..................##..##.
.######..######...####....####....####...##..##...................####..
........................................................................

********************************************
******* ADDING MORE ENEMIES ********
********************************************

 */

/**** GLOBAL VARIABLES ****/
var __gameState;
var __player;

/**** SPRITES ****/
Crafty.sprite("../img/ship.png", {
  ship: [0, 0, 32, 34]
});
Crafty.sprite("../img/enemy-1-sprite-T20x26.png",{
  bee: [0, 0, 26, 20]
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



  setInterval(function () {
    var xPos = Crafty.math.randomInt(1, 400)
    var yPos = Crafty.math.randomInt(1,200);
    let enemy = Crafty.e("EnemySimple")
    enemy.afterInit({x: xPos, y: yPos , speed:50});
  },400);

}


/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

1. Write a for...loop so that multiple enemies are created. Test your solution

2. Now remove the for...loop altogether. We are going to write a function called 'spawnEnemies()'
  that spawns an enemy every second. We are going to do this together as a class.

 */
