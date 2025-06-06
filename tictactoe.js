let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let turn0 = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0 === true){
            box.innerText = "O"
            turn0 = false
        }
        else{
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true

        winnerfound()
        
    })
})

const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
}

const clearBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
}
const winnerfound = () =>{
for(let pattern of winpattern){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
    if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);
        disableBoxes(); 
    }
}




}
}
resetbtn.addEventListener("click", clearBoxes);
