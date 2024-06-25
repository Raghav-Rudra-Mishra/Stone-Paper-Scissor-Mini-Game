let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#info");
let userScoreboard = document.querySelector("#user-score");
let compScoreboard = document.querySelector("#comp-score");

const generateCompChoice = ()=>{
    const options = ["Rock","Paper","Scissor"];
    return options[Math.floor(Math.random()*3)];
}

const drawGame = (userChoice)=>{
    msg.style.backgroundColor = "#081b31";
    msg.innerText = `Game Draw, you both selected ${userChoice}`;
}

const winMsg = (userWin, userChoice, compChoice)=>{
    if(userWin) {
        user_score++;
        userScoreboard.innerText = user_score;
        msg.style.backgroundColor = "green";
        msg.innerText = `Hurray! You Won, your ${userChoice} beats ${compChoice}`;
    }
    else {
        comp_score++;
        compScoreboard.innerText = comp_score;
        msg.style.backgroundColor = "red";
        msg.innerText = `Uff! You Lost, ${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice)=>{
    const compChoice = generateCompChoice();
    if(userChoice===compChoice){
        drawGame(userChoice);
    }else{
        let userWin = true;
        if(userChoice ==="Rock"){
            //comp->scissors or paper
            if(compChoice==="Paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        }

        else if(userChoice ==="Paper"){
            //comp->scissors or paper
            if(compChoice==="Rock"){
                userWin = true;
            }else{
                userWin = false;
            }
        }

        else if(userChoice ==="Scissor"){
            //comp->scissors or paper
            if(compChoice==="Rock"){
                userWin = false;
            }else{
                userWin = true;
            }
        }

        winMsg(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});
