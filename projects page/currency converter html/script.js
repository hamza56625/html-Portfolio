
let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let  dropdown=document.querySelectorAll("select");
let btn=document.querySelector("button");
let inputAmount=document.querySelector("input");
let msg=document.querySelector("#msg");


//adding options in select
for(let drop of dropdown){
    for( let countryCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=countryCode;
        newOption.value=countryCode;
        if(drop.name==="from" && countryCode==="USD"){
            newOption.selected="selected";
        }else if(drop.name==="to" && countryCode==="PKR"){
            newOption.selected="selected"
        }
        drop.append(newOption);
    }
    let img;
    if(drop.name==="from"){
        img=document.querySelector("#flag-from");
    }else{  
        img=document.querySelector("#flag-to");
    }
    drop.addEventListener("change",(evt)=>{     
        updateFlag(evt.target,img);
    });
}
//changing flag according to selected country in select options
const updateFlag=(element,img)=>{
   let country =countryList[element.value];
   img.src=`https://flagsapi.com/${country}/shiny/64.png`;
}
//getting amount value from input
const getAmount=()=>{
    if(inputAmount.value==="" || inputAmount.value<1){
        return 1;
    }else{
        return inputAmount.value;
    }
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=getAmount();
    let fromCurr=dropdown[0].value.toLowerCase();
    let toCurr=dropdown[1].value.toLowerCase();
    let response=await fetch(`${url}${fromCurr}.json`);
    let data = await response.json();
    let rate=data[fromCurr][toCurr];
    msg.innerText=`${amount} ${fromCurr.toUpperCase()} = ${rate*amount} ${toCurr.toUpperCase()}`;
    
    
});

