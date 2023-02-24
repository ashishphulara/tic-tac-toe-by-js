const gameEnd = new Audio ("gameEnd.wav")
const game = new Audio ("game.wav")
const turnAudio = new Audio ("turnaudio.wav");
let turn  = "x";
let gameOver = false;


// changes the turn 
function getTurn(){
    return turn === "x"? "0" : "x"
}

// checks who wins;
function checkwin (){

    let textTiles = document.getElementsByClassName("tiletext")
    let win = 
    [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
    win.forEach(ele => {
        if((textTiles[ele[0]].innerText===textTiles[ele[1]].innerText)&&(textTiles[ele[2]].innerText===textTiles[ele[1]].innerText)&& (textTiles[ele[0]].innerText!=="")){
            document.querySelector(".info").innerText = textTiles[ele[0]].innerText +"Won";
            gameOver = true;
            
        }
    });
}

// game.play()
let tiles = document.getElementsByClassName("tile")
Array.from(tiles).forEach(element =>{
    let text = element.querySelector(".tiletext")
    element.addEventListener("click",()=>{
        if(text.innerText===""){
            text.innerText = turn;
            turn = getTurn();
            turnAudio.play();
            checkwin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = turn + "turn"; 
            }
        }
    })
})

//eventlistner to button

btn.addEventListener("click",()=>{
    let text = document.querySelectorAll(".tiletext")
    Array.from(text).forEach(element =>[
        element.innerText = ""
    ])
})
