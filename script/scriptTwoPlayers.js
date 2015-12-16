//Array containting data for location of x's and o's
var board = [[null, null, null],
             [null, null, null],
             [null, null, null]];

//On load function with script inside
$(function(){
  var i = 1;
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
    return $('#xScore').html(xCounter);
  }
  //cond2 x
  if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    return $('#xScore').html(xCounter);
  }
  //cond3 x
  if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    return $('#xScore').html(xCounter);
  }
  //cond4 x
  if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    return $('#xScore').html(xCounter);
  }
  //cond5 x
  if (board[2][0] === 'x' && board[1][1] === 'x' && board[0][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    return $('#xScore').html(xCounter);
  }
  //cond6 x
  if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    return $('#xScore').html(xCounter);
  }
  //cond7 x
  if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    return $('#xScore').html(xCounter);
  }
  //cond8 x
  if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
    alert('X Wins!');
    xCounter++;
    reset();
    return $('#xScore').html(xCounter);
  }

  //cond1 o
  if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
    alert('O Wins!');
    oCounter++;
    reset();
    return $('#oScore').html(oCounter);
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
  //tie condition
  if (i === 9) {
    alert('The Game is a Tie!');
    tieCounter++;
    reset();
    return $('#tieScore').html(tieCounter);
  }
}

  //click the box, make sure it is empty, and if so place corresponding X or O
  //in the DOM and also the correct spot in the data array.
  $('.box').on('click', function() {
    if (($(this).attr('class')) != 'box') {
    alert('This square has been played already! Play a different square!');
  }
    else {
      if (i % 2 === 0) {
        $('h2').html('Turn : O');
        $(this).toggleClass('x');
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
        getWinner();
        return i++;
      }
      else {
        $(this).toggleClass('o');
        $('h2').html('Turn: X');
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
        return i++;
      }
    }
});

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
        //reset h2
        $('h2').html('O goes First');
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
        //reset h2
        $('h2').html('O goes First');
        //reset the counter
        i = 1;
        //reset array values
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
          ];
  });

  $('#playComputer').on('click', function () {
      window.location.replace("playComputer.html");
  });

});
