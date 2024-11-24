let choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let comScore=document.querySelector("#com-score");
let userScore=document.querySelector("#user-score");
let drawScore=document.querySelector("#draw-score");
let userWin=false;
let userCount=0;
let comCount=0;
let drawCount=0;


//computer choice algorithm
const comChoice=()=>{
    let arr=["rock","paper","scissor"]
    let idx=Math.floor(Math.random()*3)
    return arr[idx];
}
//score board update function
const scoreBoard=()=>{
    if(userWin==true){
        userCount++;
        userScore.innerText=userCount;
    }else{
        comCount++;
        comScore.innerText=comCount;
    }
}
//check who win
const winer=()=>{
    if(userWin==true){
        msg.innerText="player win";
    }else{
        msg.innerText="computer win";
    }
    scoreBoard();
}
//logic to find out who win or draw
const gameLogic=(userChoice)=>{
    let com=comChoice();
   if(userChoice===com){
        msg.innerText="Draw";
        drawCount++;
        drawScore.innerText=drawCount;
    }else{
        if(userChoice==="rock"){
            userWin=com==="scissor"?true:false; 
        }else if(userChoice==="paper"){
            userWin=com==="rock"?true:false;
        }else if(userChoice==="scissor"){
            userWin=com==="paper"?true:false;
        }
        console.log(userWin);
       winer();
    }
}

choice.forEach((vl)=>{
    vl.addEventListener("click",()=>{
        let userChoice=vl.getAttribute("id");
        gameLogic(userChoice);
    })
})