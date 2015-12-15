var board = [[null, null, null],
             [null, null, null],
             [null, null, null]];

$(function(){
  var i = 0;


  function getWinner() {
  //cond1 x
  if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
    return alert('X Wins! O Loses!');
  }
  //cond2 x
  if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
    return alert('X Wins! O Loses!');
  }
  //cond3 x
  if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
    return alert('X Wins! O Loses!');
  }
  //cond4 x
  if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
    return alert('X Wins! O Loses!');
  }
  //cond5 x
  if (board[2][0] === 'x' && board[1][1] === 'x' && board[0][2] === 'x') {
    return alert('X Wins! O Loses!');
  }
  //cond6 x
  if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
    return alert('X Wins! O Loses!');
  }
  //cond7 x
  if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
    return alert('X Wins! O Loses!');
  }
  //cond8 x
  if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
    return alert('X Wins! O Loses!');
  }

  //cond1 o
  if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
    return alert('O Wins! X Loses!');
  }
  //cond2 o
  if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
    return alert('O Wins! X Loses!');
  }
  //cond3 o
  if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
    return alert('O Wins! X Loses!');
  }
  //cond4 o
  if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
    return alert('O Wins! X Loses!');
  }
  //cond5 o
  if (board[2][0] === 'o' && board[1][1] === 'o' && board[0][2] === 'o') {
    return alert('O Wins! X Loses!');
  }
  //cond6 o
  if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
    return alert('O Wins! X Loses!');
  }
  //cond7 o
  if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
    return alert('O Wins! X Loses!');
  }
  //cond8 o
  if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
    return alert('O Wins! X Loses!');
  }
  if (i === 8) {
    return alert('The Game is a Tie!');
  }
}

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

  $('#refresh').on('click', function() {
      location.reload(true);
  });

  $('#playComputer').on('click', function () {
      window.location.replace("playComputer.html");
  });

  $('#twoPlayer').on('click', function () {
      window.location.replace("index.html");
  });
});
