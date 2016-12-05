var player = 'X';

    var aTags = document.getElementsByTagName("a");
    for (var i=0;i<aTags.length;i++){
        addEvent(aTags[i], 'click', alertWinner);
    }


var tds = document.getElementsByTagName("td");

for (var i = 0; i < tds.length; i++) {
  tds[i].addEventListener("click", function(){
    if (player === 'X' && this.innerHTML === '') {
      this.innerHTML = 'X'
      player = 'O'
    }
    if (player === 'O' && this.innerHTML === '') {
      this.innerHTML = 'O'
      player = 'X'
    }
  })
}