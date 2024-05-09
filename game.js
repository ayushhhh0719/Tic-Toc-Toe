let boxes = document.querySelectorAll(".box");
let reset=document.querySelector("#rest-btn");
let mes=document.querySelector("#mes");
let newbtn=document.querySelector("#new-btn");
let mescontainer=document.querySelector("#msg-container");
let turn0= true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restGame=()=>{
    turn0=true;
    enablebtn();
    mescontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        // console.log("button was click");/
        if(turn0)
        {
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disablebtn=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const enablebtn=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";

        }
}

const showwinner =(winner)=>{
    mes.innerText=`Congratulation, winner is ${winner}`;
    disablebtn();
    mescontainer.classList.remove("hide");
}



const checkwinner =()=>{
    for(let pattern of winPattern)
    {
         // console.log(pattern[0],pattern[1],pattern[2]);
         // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pattern1val =boxes[pattern[0]].innerText;
        let pattern2val =boxes[pattern[1]].innerText;
        let pattern3val =boxes[pattern[2]].innerText;

        if(pattern1val !="" && pattern2val !="" && pattern3val !="")
        {
            if(pattern1val  === pattern2val  && pattern2val  === pattern3val)
            {
                console.log("winner",pattern1val);
                showwinner(pattern1val);
            }
        }
    }
    
}


newbtn.addEventListener("click",restGame);
reset.addEventListener("click",restGame);