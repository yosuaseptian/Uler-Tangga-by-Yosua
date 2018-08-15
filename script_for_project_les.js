

var currentPosition = 1;
var currentRow = 1;
var row = [];

for (var i = 100; i >= 1; i--) {
//   var text = document.createTextNode(i);

  var box = document.createElement('div');
      box.setAttribute('class', 'box '+'box-' + i);
    //   box.appendChild(text);

  row.push(box);

  if (row.length === 10) {
    if (currentRow % 2 === 0) {
      row = row.reverse();
    }

    for (var j = 0; j < row.length; j++) {
      document.getElementById('canvas').appendChild(row[j]);
    }

    row = [];
    currentRow++;
  }
}

move()

function rollDice(){
    
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6 + 1);
    // var d1 = 1;
    die1.innerHTML = d1;
    
    status.innerHTML = "You rolled ";
    if(d1 == 6){
        status.innerHTML += " SIX! You get turn again!!";
    }
    currentPosition+=d1
    if (currentPosition >= 100){
        currentPosition = 100;
        status.innerHTML += "YOU WON";
        move();
    } else {
        move()
    }
    

}

function move (){
    if(currentPosition != 1){

        var player = document.getElementsByClassName("player")
        player[0].parentNode.removeChild(player[0])
    }
var characters1 = document.getElementsByClassName(`box-${currentPosition}`);

var newh1 = document.createElement('h1');
    newh1.setAttribute("class", "player")
    characters1[0].appendChild(newh1);

    ladder();

}

function ladder (){
    if(currentPosition === 2){
      currentPosition= currentPosition + 36;
      move();
    }
    else if (currentPosition === 7) {
        currentPosition= currentPosition + 7;
        move();
    } else if (currentPosition === 8) {
        currentPosition= currentPosition + 24;
        move();
    } 
    // if(currentPosition == box[7]){
    //    currentPosition.move to box[14]
    // }
    // if (currentPosition == box[8]){
    //     currentPosition.move to box[31]
    // }
    // if(currentPosition == box[15]){
    //     currentPosition.move to box[26]
    // }
    // if(currentPosition == box[28]){
    //     currentPosition.move to box[84]
    // }
    // if (currentPosition == box[36]){
    //     currentPosition.move to box[44]
    // }
    // if(currentPosition == box[21]){
    //   currentPosition.move to box[40]
    // }
    // if(currentPosition == box[51]){
    //     currentPosition.move to box[67]
    // }
    // if (currentPosition == box[71]){
    //     currentPosition.move to box[91]
    // }
    // if (currentPosition == box[78]){
    //     currentPosition.move to box [98]
    // }
    // if (currentPosition == box[87]){
    //     currentPosition.move to box [94]
    // }
}

// function snake(){
//     if(currentPosition == box[16]){
//         currentPosition.move to box[6]
//     }
//     if(currentPosition == box[46]){
//         currentPosition.move to box[25]
//     }
//     if(currentPosition == box[49]){
//         currentPosition.move to box[11]
//     }
//     if(currentPosition == box[62]){
//         currentPosition.move to box[19]
//     }
//     if(currentPosition == box[64]){
//         currentPosition.move to box[60]
//     }
//     if(currentPosition == box[74]){
//         currentPosition.move to box[53]
//     }
//     if(currentPosition == box[89]){
//         currentPosition.move to box[68]
//     }
//     if(currentPosition == box[92]){
//         currentPosition.move to box[88]
//     }
//     if(currentPosition == box[95]){
//         currentPosition.move to box[75]
//     }
//     if(currentPosition == box[99]){
//         currentPosition.move to box[80]
//     }
// }