let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbut=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;  //payer x and player 0
const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box Was clicked");
        if(turno){
            //player O
           box.innerText="O";
           turno=false; 
        }
        else{
            //player X
            box.innerText="X";
           turno=true; 
        }
        box.disabled=true;

        checkWinner();
    });
});
const showWinner=(winner)=>
{
    msg.innerText=`Congratulation, Winner is 🎉${winner}🍾`;
    msgContainer.classList.remove("hide");
    disabled();
};
const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner=()=>{
    for(patt of winpatt){
       // console.log(patt[0],patt[1],patt[2]);
        //console.log(boxes[patt[0]].innerText,boxes[patt[1]].innerText,boxes[patt[2]].innerText);
        let po1=boxes[patt[0]].innerText;
        let po2=boxes[patt[1]].innerText;
        let po3=boxes[patt[2]].innerText;   

        if(po1!="" && po2!="" && po3!=""){
            if(po1===po2 && po2=== po3)
            {
                console.log("winner",po1);
                showWinner(po1);
            }
        }
    }
};
const resetgame=()=>{
    turno=true;
    enablebox();
    msgContainer.classList.add("hide");
}

newbut.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);