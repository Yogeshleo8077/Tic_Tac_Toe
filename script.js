let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    let turnO = true;
    enableAllBtns();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if(turnO) {
            box.innerHTML = "O";
            box.classList.add("player-o");
            turnO = false;
        } else {
            box.innerHTML = "X";
            box.classList.add("player-x");
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    })
})

const disabledAllBtns = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableAllBtns = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("player-o", "player-x");
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledAllBtns();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log(`winner is ${pos1Val}`);
                showWinner(pos1Val);
            }
        }
    }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);