//Array containing data for location of x's and o's
var board = [[null, null, null],
             [null, null, null],
             [null, null, null]];

//On load function with script
$(function(){
  var i = 0;
  var xCounter = 0;
  var oCounter = 0;
  var tieCounter = 0;

  //Updates scores to 0 at the beginning
  $('#xScore').html(xCounter);
  $('#oScore').html(oCounter);
  $('#tieScore').html(tieCounter);

  //checks all win conditions, alerts winner, tallies score.
  function getWinner() {
  //cond1 x
  if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }
  //cond2 x
  if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }
  //cond3 x
  if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }
  //cond4 x
  if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }
  //cond5 x
  if (board[2][0] === 'x' && board[1][1] === 'x' && board[0][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }
  //cond6 x
  if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }
  //cond7 x
  if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }
  //cond8 x
  if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    $('#xScore').html(xCounter);
    return true;
  }

  //cond1 o
  if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return ('#oScore').html(oCounter);
  }
  //cond2 o
  if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
  }
  //cond3 o
  if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
  }
  //cond4 o
  if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
  }
  //cond5 o
  if (board[2][0] === 'o' && board[1][1] === 'o' && board[0][2] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
  }
  //cond6 o
  if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
  }
  //cond7 o
  if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
  }
  //cond8 o
  if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
  }
  if (i === 9) {
    alert('The Game is a Tie!');
    tieCounter++;
    reset();
    $('#tieScore').html(tieCounter);
    return true;
  }
}

    //place player x. check winner. place computer o. check winner.
    $('.box').on('click', function() {
        if (($(this).attr('class')) != 'box') {
            alert('This square has been played already! Play a different square!');
        } else {
            $(this).toggleClass('x');
            i++;
            if (div1.className === 'box x') {
                board[0][0] = 'x';
            }
            if (div2.className === 'box x') {
                board[0][1] = 'x';
            }
            if (div3.className === 'box x') {
                board[0][2] = 'x';
            }
            if (div4.className === 'box x') {
                board[1][0] = 'x';
            }
            if (div5.className === 'box x') {
                board[1][1] = 'x';
            }
            if (div6.className === 'box x') {
                board[1][2] = 'x';
            }
            if (div7.className === 'box x') {
                board[2][0] = 'x';
            }
            if (div8.className === 'box x') {
                board[2][1] = 'x';
            }
            if (div9.className === 'box x') {
                board[2][2] = 'x';
            }
            if (getWinner() != true) {
                toggleComputerClass();
                i++;
                if (div1.className === 'box o') {
                    board[0][0] = 'o';
                }
                if (div2.className === 'box o') {
                    board[0][1] = 'o';
                }
                if (div3.className === 'box o') {
                    board[0][2] = 'o';
                }
                if (div4.className === 'box o') {
                    board[1][0] = 'o';
                }
                if (div5.className === 'box o') {
                    board[1][1] = 'o';
                }
                if (div6.className === 'box o') {
                    board[1][2] = 'o';
                }
                if (div7.className === 'box o') {
                    board[2][0] = 'o';
                }
                if (div8.className === 'box o') {
                    board[2][1] = 'o';
                }
                if (div9.className === 'box o') {
                    board[2][2] = 'o';
                }
                getWinner();
            }
        }
    });

    //ensures computer only adds o's to empty (available) boxes
    function toggleComputerClass() {
        computerDiv();
        if (ranDiv === "div1") {
            if (($('#div1').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div1').toggleClass('o');
            }
        }
        if (ranDiv === "div2") {
            if (($('#div2').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div2').toggleClass('o');
            }
        }
        if (ranDiv === "div3") {
            if (($('#div3').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div3').toggleClass('o');
            }
        }
        if (ranDiv === "div4") {
            if (($('#div4').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div4').toggleClass('o');
            }
        }
        if (ranDiv === "div5") {
            if (($('#div5').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div5').toggleClass('o');
            }
        }
        if (ranDiv === "div6") {
            if (($('#div6').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div6').toggleClass('o');
            }
        }
        if (ranDiv === "div7") {
            if (($('#div7').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div7').toggleClass('o');
            }
        }
        if (ranDiv === "div8") {
            if (($('#div8').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div8').toggleClass('o');
            }
        }
        if (ranDiv === "div9") {
            if (($('#div9').attr('class')) != 'box') {
                return toggleComputerClass();
            }
            else {
                return $('#div9').toggleClass('o');
            }
        }

    }

    //Logic for computer to choose a space. It tries to block all rows of 2.
    //Otherwise random
    function computerDiv() {
        //computer will attempt to block every move you make
        //H1
        if (board[0][0] === 'x' && board[0][1] === 'x' && ($('#div3').attr('class')) === 'box') {
            return ranDiv = "div3";
        }
        //H2
        if (board[0][1] === 'x' && board[0][2] === 'x' && ($('#div1').attr('class')) === 'box') {
            return ranDiv = "div1";
        }
        //H3
        if (board[0][0] === 'x' && board[0][2] === 'x' && ($('#div2').attr('class')) === 'box') {
            return ranDiv = "div2";
        }
        //H4
        if (board[1][0] === 'x' && board[1][1] === 'x' && ($('#div6').attr('class')) === 'box') {
            return ranDiv = "div6";
        }
        //H5
        if (board[1][1] === 'x' && board[1][2] === 'x' && ($('#div4').attr('class')) === 'box') {
            return ranDiv = "div4";
        }
        //H6
        if (board[1][0] === 'x' && board[1][2] === 'x' && ($('#div5').attr('class')) === 'box') {
            return ranDiv = "div5";
        }
        //H7
        if (board[2][0] === 'x' && board[2][1] === 'x' && ($('#div9').attr('class')) === 'box') {
            return ranDiv = "div9";
        }
        //H8
        if (board[2][1] === 'x' && board[2][2] === 'x' && ($('#div7').attr('class')) === 'box') {
            return ranDiv = "div7";
        }
        //H9
        if (board[2][0] === 'x' && board[2][2] === 'x' && ($('#div8').attr('class')) === 'box') {
            return ranDiv = "div8";
        }

        //V1
        if (board[0][0] === 'x' && board[1][0] === 'x' && ($('#div7').attr('class')) === 'box') {
            return ranDiv = "div7";
        }
        //V2
        if (board[1][0] === 'x' && board[2][0] === 'x' && ($('#div1').attr('class')) === 'box') {
            return ranDiv = "div1";
        }
        //V3
        if (board[0][0] === 'x' && board[2][0] === 'x' && ($('#div4').attr('class')) === 'box') {
            return ranDiv = "div4";
        }
        //V4
        if (board[0][1] === 'x' && board[1][1] === 'x' && ($('#div8').attr('class')) === 'box') {
            return ranDiv = "div8";
        }
        //V5
        if (board[1][1] === 'x' && board[2][1] === 'x' && ($('#div2').attr('class')) === 'box') {
            return ranDiv = "div2";
        }
        //V6
        if (board[0][1] === 'x' && board[2][1] === 'x' && ($('#div5').attr('class')) === 'box') {
            return ranDiv = "div5";
        }
        //V7
        if (board[0][2] === 'x' && board[1][2] === 'x' && ($('#div9').attr('class')) === 'box') {
            return ranDiv = "div9";
        }
        //V8
        if (board[1][2] === 'x' && board[2][2] === 'x' && ($('#div3').attr('class')) === 'box') {
            return ranDiv = "div3";
        }
        //V9
        if (board[0][2] === 'x' && board[2][2] === 'x' && ($('#div6').attr('class')) === 'box') {
            return ranDiv = "div6";
        }

        //D1
        if (board[2][0] === 'x' && board[1][1] === 'x' && ($('#div3').attr('class')) === 'box') {
            return ranDiv = "div3";
        }
        //D2
        if (board[1][1] === 'x' && board[0][2] === 'x' && ($('#div7').attr('class')) === 'box') {
            return ranDiv = "div7";
        }
        //D3
        if (board[2][0] === 'x' && board[0][2] === 'x' && ($('#div5').attr('class')) === 'box') {
            return ranDiv = "div5";
        }
        //D4
        if (board[0][0] === 'x' && board[1][1] === 'x' && ($('#div9').attr('class')) === 'box') {
            return ranDiv = "div9";
        }
        //D5
        if (board[1][1] === 'x' && board[2][2] === 'x' && ($('#div1').attr('class')) === 'box') {
            return ranDiv = "div1";
        }
        //D6
        if (board[0][0] === 'x' && board[2][2] === 'x' && ($('#div5').attr('class')) === 'box') {
            return ranDiv = "div5";
        }

        else {
        return ranDiv = "div" + Math.floor((Math.random() * 9) + 1);
        }
    };

  //function to reset on win
  function reset() {
    //reset box 1
        if (($('#div1').attr('class')) === 'box o') {
            $('#div1').toggleClass('o');
        }
        if (($('#div1').attr('class')) === 'box x') {
            $('#div1').toggleClass('x');
        }
        //reset box 2
        if (($('#div2').attr('class')) === 'box o') {
            $('#div2').toggleClass('o');
        }
        if (($('#div2').attr('class')) === 'box x') {
            $('#div2').toggleClass('x');
        }
        //reset box 3
        if (($('#div3').attr('class')) === 'box o') {
            $('#div3').toggleClass('o');
        }
        if (($('#div3').attr('class')) === 'box x') {
            $('#div3').toggleClass('x');
        }
        //reset box 4
        if (($('#div4').attr('class')) === 'box o') {
            $('#div4').toggleClass('o');
        }
        if (($('#div4').attr('class')) === 'box x') {
            $('#div4').toggleClass('x');
        }
        //reset box 5
        if (($('#div5').attr('class')) === 'box o') {
            $('#div5').toggleClass('o');
        }
        if (($('#div5').attr('class')) === 'box x') {
            $('#div5').toggleClass('x');
        }
        //reset box 6
        if (($('#div6').attr('class')) === 'box o') {
            $('#div6').toggleClass('o');
        }
        if (($('#div6').attr('class')) === 'box x') {
            $('#div6').toggleClass('x');
        }
        //reset box 7
        if (($('#div7').attr('class')) === 'box o') {
            $('#div7').toggleClass('o');
        }
        if (($('#div7').attr('class')) === 'box x') {
            $('#div7').toggleClass('x');
        }
        //reset box 8
        if (($('#div8').attr('class')) === 'box o') {
            $('#div8').toggleClass('o');
        }
        if (($('#div8').attr('class')) === 'box x') {
            $('#div8').toggleClass('x');
        }
        //reset box 9
        if (($('#div9').attr('class')) === 'box o') {
            $('#div9').toggleClass('o');
        }
        if (($('#div9').attr('class')) === 'box x') {
            $('#div9').toggleClass('x');
        }
        //reset the counter
        i = 0;
        //reset array values
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
          ];
  }


    //reset button
    $('#refresh').on('click', function () {
        //reset box 1
        if (($('#div1').attr('class')) === 'box o') {
            $('#div1').toggleClass('o');
        }
        if (($('#div1').attr('class')) === 'box x') {
            $('#div1').toggleClass('x');
        }
        //reset box 2
        if (($('#div2').attr('class')) === 'box o') {
            $('#div2').toggleClass('o');
        }
        if (($('#div2').attr('class')) === 'box x') {
            $('#div2').toggleClass('x');
        }
        //reset box 3
        if (($('#div3').attr('class')) === 'box o') {
            $('#div3').toggleClass('o');
        }
        if (($('#div3').attr('class')) === 'box x') {
            $('#div3').toggleClass('x');
        }
        //reset box 4
        if (($('#div4').attr('class')) === 'box o') {
            $('#div4').toggleClass('o');
        }
        if (($('#div4').attr('class')) === 'box x') {
            $('#div4').toggleClass('x');
        }
        //reset box 5
        if (($('#div5').attr('class')) === 'box o') {
            $('#div5').toggleClass('o');
        }
        if (($('#div5').attr('class')) === 'box x') {
            $('#div5').toggleClass('x');
        }
        //reset box 6
        if (($('#div6').attr('class')) === 'box o') {
            $('#div6').toggleClass('o');
        }
        if (($('#div6').attr('class')) === 'box x') {
            $('#div6').toggleClass('x');
        }
        //reset box 7
        if (($('#div7').attr('class')) === 'box o') {
            $('#div7').toggleClass('o');
        }
        if (($('#div7').attr('class')) === 'box x') {
            $('#div7').toggleClass('x');
        }
        //reset box 8
        if (($('#div8').attr('class')) === 'box o') {
            $('#div8').toggleClass('o');
        }
        if (($('#div8').attr('class')) === 'box x') {
            $('#div8').toggleClass('x');
        }
        //reset box 9
        if (($('#div9').attr('class')) === 'box o') {
            $('#div9').toggleClass('o');
        }
        if (($('#div9').attr('class')) === 'box x') {
            $('#div9').toggleClass('x');
        }
        //reset the counter
        i = 0;
        //reset array values
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
            ];

        $('#xScore').html(xCounter);
        $('#oScore').html(oCounter);
        $('#tieScore').html(tieCounter);
});

    $('#twoPlayer').on('click', function() {
        window.location.replace("index.html");
    });
});
