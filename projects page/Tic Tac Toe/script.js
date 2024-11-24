let btn=document.querySelectorAll(".btn");
let tern=document.querySelectorAll(".terns")
let turn=document.querySelectorAll(".turn");
let resetBtn=document.querySelector(".reset-btn");
let counter=0;
let possibilities=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [6,4,2]
]
//turn background color logic
turn[0].classList.add("turn-background-color");
function turnBackgroundColor(){
   if(counter%2===0){
      turn[0].classList.add("turn-background-color");
      turn[1].classList.remove("turn-background-color");
   }else{
      turn[0].classList.remove("turn-background-color");
      turn[1].classList.add("turn-background-color");
   }
}
//disable button when any of the player win
const btnDisable=()=>{
   for(val of btn){
      val.disabled=true;
   }
}
//check function check wheather any of the plyer win or not
function check(){
   for(val of possibilities){
      let p1=btn[val[0]].innerText;
      let p2=btn[val[1]].innerText;
      let p3=btn[val[2]].innerText;
      if(p1!=="" && p2!=="" && p3!==""){
        if(p1===p2 && p2===p3){
         alert(`player ${p1} win :)`);
         counter--;
         btnDisable();
        }
      }
   }
}

//function that place mark on the button when player click the button
const placeMark=(element)=>{
   if(counter%2==0){
      element.innerText="X";
      element.style.color="red";
   }
   else{
      element.innerText="O";
      element.style.color="orange";
   }
   counter++;
}
//function that tack action on player click
btn.forEach((element)=>{
   element.addEventListener("click",()=>{
      if(element.innerText==="")
      {
         placeMark(element);
         if(counter>4){
            check();
         }
         turnBackgroundColor();
      }
      
   })
})
resetBtn.addEventListener("click",()=>{
   for(val of btn){
      val.innerText="";
      val.disabled=false;
      counter=0;
   }
});
