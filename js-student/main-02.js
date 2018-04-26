/******************************************************************
/******************************************************************
/******************************************************************

 ___       _______   ________   ________  ________  ________            _______
|\  \     |\  ___ \ |\   ____\ |\   ____\|\   __  \|\   ___  \         /  ___  \
\ \  \    \ \   __/|\ \  \___|_\ \  \___|\ \  \|\  \ \  \\ \  \       /__/|_/  /|
\ \  \    \ \  \_|/_\ \_____  \\ \_____  \ \  \\\  \ \  \\ \  \      |__|//  / /
 \ \  \____\ \  \_|\ \|____|\  \\|____|\  \ \  \\\  \ \  \\ \  \         /  /_/__
  \ \_______\ \_______\____\_\  \ ____\_\  \ \_______\ \__\\ \__\       |\________\
   \|_______|\|_______|\_________\\_________\|_______|\|__| \|__|        \|_______|
                      \|_________\|_________|

********************************
*** PLAYING WITH A STARFIELD ***
********************************
 */

/**** GLOBAL VARIABLES ****/
var __gameState;
var __starField;

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
__starField.maxVelocity = 1000
__starField.minVelocity = 1
  // Start the __starField
  /*** SOLUTION CODE ***/
__starField.start();
}

/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

1. '__starField' is a variable representing a Starfield object. But how do we 'start' the Starfield so that we see stars ?
  HINT: Find the file Starfield.js in the components directory. Have a look inside it for a function that
  might start the starfield.

  Add some code to start the starfield.

2. How can you change the following:
  - Numbers of stars falling
  - Size of stars falling
  - speed of stars falling

3. Additionally, how can you change the color of the starfield ?

 */
