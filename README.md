#README

-----------------
WDI ATL Project 1
-----------------
Bit Balloon: http://waiter-chains-85876.bitballoon.com/

Github: https://github.com/Spencer-Lewis/TicTacToe

----------------------------
Included in this repository:
----------------------------

All necessary files and folders for play:

**HTML files**
  1. index.html (two player mode)           HTML page for two player mode
  2. playComputer.html                      HTML page for player vs AI

**CSS**
  1. style.css                              styling for both HTML pages

**Script**
  1. scriptTwoPlayers.js                    logic for 2 player mode
  2. scriptComputer.js                      logic for player vs AI

---------
The Game:
---------
The game itself is Tic Tac Toe, A game where players take turns attempting to
line up 3 X's or O's in a row in a 3x3 grid. A winner is detected as soon as 3 are lined up, and the board will automatically reset after an alert to the user clarifying the winner. The wins and ties are tallied in the head of the web page.

There are two game modes included:
  1. Two Players:
    -In this game mode, The game starts with "O". Every click into the grid
    will then alternate placing an X or O until someone has won or the game
    has tied. If the players wish to reset the board at any time during a
    match, the "reset board" button can be clicked. This will reset the
    current match without disrupting the overall score keeping or any
    subsequent matches. To switch to play against computer the "Play against
    Computer" button can be clicked.

  2. Player vs. Computer:
    -In this game mode, The player starts by placing an "X". The AI will then
    place an "O". From there the player will alternate turns with the AI
    until a winner is found, or the board is filled to a tie. If the player
    wishes to reset the board at any time durig a match, the "reset board"
    button will work the same as above. To switch to two player mode the
    "Two Players" button may be pressed.

The AI is intended to play against the user with an intermediate skill level. The AI will attempt to block the user any time the user lines up 2 X's, and will otherwise place O's in random available squares.

-------
To Run:
-------
1. The game can be accessed online:
  - http://waiter-chains-85876.bitballoon.com/

2. The repo for the game can also be accessed via Github.
  - https://github.com/Spencer-Lewis/TicTacToe
  - Clone the repository from Github
  - Open either index.html or playComputer.html in a browser

-----------------
Technologies Used
-----------------
-Languages: HTML, CSS, Javascript

-Flex-box: Used to create the 3x3 grid of Divs

-Deployment: Bit Balloon: https://www.bitballoon.com/

-----------------
Planned Additions
-----------------
Multiple difficulties of AI when playing against the computer toggled by buttons:

  -Beginner mode: AI will always select a random available square.

  -Intermediate mode: AI will try to block when the player aligns two X's, will otherwise play a random available square (this is the current AI).

  -Hard mode: AI will always select a corner block with its first move. After that, it will try to block when the player aligns two X's. Otherwise a random square will be played.

--------
Contact:
--------
-Author: Spencer Lewis

-Slack: Spencer-Lewis

-Github: https://github.com/Spencer-Lewis

-Email: Spencerlewis987@gmail.com
