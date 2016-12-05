// X goes first
var player = 'X';

// updateTurn changes the header to let you know whose turn it is

var updateTurn = function() {
  if (player === 'X') {
    document.getElementById('turn').innerHTML = "It is Player 1's turn. They are the X's"
  } else {
    document.getElementById('turn').innerHTML = "It is Player 2's turn. They are the O's"
  }
}

// add's the X or O when a grid element is clicked
var tds = document.getElementsByTagName("td");

for (var i = 0; i < tds.length; i++) {
  tds[i].addEventListener("click", function(){
    if (player === 'X' && this.innerHTML === '') {
      this.innerHTML = 'X'
      player = 'O'
      updateTurn()
    }
    if (player === 'O' && this.innerHTML === '') {
      this.innerHTML = 'O'
      player = 'X'
      updateTurn()
    }
  })
}