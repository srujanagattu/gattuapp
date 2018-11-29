
/**
 * Simple tic-tac-toe game example. 
 */

     var winCheck = 1;
     $("#winnerDisplay").hide();
    const cellElements = [
      $("#upper-left")[0],
      $("#upper-mid")[0],
      $("#upper-right")[0],
      $("#center-left")[0],
      $("#center-mid")[0],
      $("#center-right")[0],
      $("#lower-left")[0],
      $("#lower-mid")[0],
      $("#lower-right")[0]
  ];
 
  for (let i = 0; i < cellElements.length; i++) {
    cellElements[i].addEventListener('click', async function () {
    // add player's X
    const isValidMove = await addX(cellElements[i]);
     if (isValidMove) {
      // choose computer's O
        const j = await findBestMove(cellElements);
     
        // pause, then add computer's O
        //await new Promise((resolve) => setTimeout(() => resolve(), 2000));
        await addO(cellElements[j]);
        
      }
    });
    }

    async function findBestMove(arr) {
      for (let n = 0; n < arr.length; n++) {
        if (arr[n].childElementCount <1) {
          return n;
        }
      }
    }
  
    function playGame(){
      $("#winnerDisplay").hide();
      window.location.reload(true);
    }
  async function findBestMove(arr) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].innerHTML == " ") {
        return n;
      }
    }
  }
  /*
  async function addX(cellElement) {
    if (cellElement.childElementCount === 1) { return false; }
    const headingElement = document.createElement("h1");
    const textNode = document.createTextNode("X");
    headingElement.appendChild(textNode);
    cellElement.appendChild(headingElement);
    return true;
  }*/
  async function addX(cellElement) {
    if (cellElement.innerHTML != " " && cellElement.innerHTML ) {
       return false;
     }
    const textNode = document.createTextNode("X");
    cellElement.appendChild(textNode);
    findGameWinner("X");
    return true;
  }
  /*
  async function addO(cellElement) {
    if (cellElement.childElementCount === 1) { return; }
    const headingElement = document.createElement("h1");
    const textNode = document.createTextNode("O");
    headingElement.appendChild(textNode);
    cellElement.appendChild(headingElement);
  }
*/
  async function addO(cellElement) {
    if (cellElement.innerHTML != " " && cellElement.innerHTML ) { 
      return; 
    }
    const textNode = document.createTextNode("O");
    cellElement.appendChild(textNode);
    findGameWinner("O");
  }
 

 
 function findGameWinner(gameplayer){
   let gamewinner = 0;
   if(cellElements[0].innerText == gameplayer && cellElements[1].innerText == gameplayer &&cellElements[2].innerText== gameplayer ){
    gamewinner = 1;
   }
   else if(cellElements[3].innerText == gameplayer && cellElements[4].innerText == gameplayer &&cellElements[5].innerText == gameplayer){
    gamewinner = 1;
   }
   else if(cellElements[6].innerText == gameplayer && cellElements[7].innerText == gameplayer &&cellElements[8].innerText == gameplayer){
    gamewinner = 1;
   }
   else if(cellElements[0].innerText == gameplayer && cellElements[3].innerText == gameplayer &&cellElements[6].innerText == gameplayer){
    gamewinner = 1;
   }
   else if(cellElements[1].innerText == gameplayer && cellElements[4].innerText == gameplayer &&cellElements[7].innerText == gameplayer){
    gamewinner = 1;
   }
   else if(cellElements[2].innerText == gameplayer && cellElements[5].innerText == gameplayer &&cellElements[8].innerText == gameplayer){
    gamewinner = 1;
   }
   else if(cellElements[0].innerText == gameplayer && cellElements[4].innerText == gameplayer &&cellElements[8].innerText == gameplayer){
    gamewinner = 1;
   }
   
   else if(cellElements[6].innerText == gameplayer && cellElements[4].innerText == gameplayer &&cellElements[2].innerText == gameplayer){
    gamewinner = 1;
   }
  let count = 0;
  for( let i=0;i<cellElements.length;i++){
      if(cellElements[i].innerText != " " && cellElements[i].innerText) {
        count += +1;
      }
  }
  if(count == 9 && !gamewinner){
    gamewinner = 1;
    gameplayer = "Draw";
  }
  if(gamewinner){
    winCheck = 0;
    if(gameplayer == "Draw"){
      $("#winnerDisplay").html("Draw");
      alert("Its Draw!!! Play Again");
    }
    else{
      $("#winnerDisplay").html("'"+gameplayer+"' Won the game");
      alert("'"+gameplayer+"' Won the game");
    }
    $("#winnerDisplay").show(); 
  }
}

