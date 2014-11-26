// setting this to default 9 for now  
var numberOfTiles = 9;

window.onload = function(){

  //setting up the board
  //need to separate the JS files. For now, I'll just use one for one page
  $.ajax({
    url: "/api/colorfuls/getAll",
    method: 'GET',
    success: function(data){
      if(data.success){
        setBoard(data.tiles);
      } else {
        setBoard();
      }
    }
  });

}

function setBoard(tiles){
  var table = document.getElementById('table');
  for(var i = 0; i < numberOfTiles; i++){
    var div = document.createElement('div');
    div.className = 'tile';
    div.id = i;
    div.onclick = function(){
      this.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
    }
    table.appendChild(div);
  }

  if(tiles){
    for(var i = 0; i < numberOfTiles; i++){
      var tile = document.getElementById(i);
      tile.style.backgroundColor = tiles[i].color;
    }
  }
}

// a function to loop through each tile and clear the backrgound
function clearTiles(){
  for(var i = 0; i < numberOfTiles; i++){
    var tile = document.getElementById(i);
    tile.style.backgroundColor = '';
  }
}

function saveTable(){
  //for now, including jquery ajax to make a call to rails api
  var tileObjects = {};

  for(var i = 0; i < numberOfTiles; i++){
    var tile = document.getElementById(i);
    tileObjects[i] = tile.style.backgroundColor;
  }

  $.ajax({
    url: "/api/colorfuls/save",
    data: {'tiles': tileObjects},
    method: 'POST',
    success: function(data){
      console.log(data);
    }
  });
}