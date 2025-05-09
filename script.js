function getComputerChoice()
{
let num=Math.ceil(Math.random()*3);
if(num===1)
{
    return "Rock";
}
else if(num===2)
{
    return "Paper";
}
else if(num===3)
{
    return "Scissors";
}
}
let num_of_plays=6;
let ChoiceWinner=document.querySelector(".ChoiceWinner");
let computerScore=0;
let humanScore=0;
let score=document.querySelector(".Score");
function ScoreUpdate()
{
    if(num_of_plays<5)
    {
        let C_choice=getComputerChoice();

        ChoiceWinner.textContent=`computer choice is ${C_choice} and human choice is ${H_choice}`;
    
        if (C_choice==="Rock" && H_choice==="Scissors" || C_choice==="Scissors" && H_choice==="Paper" || C_choice==="Paper" && H_choice==="Rock") 
        {
            computerScore++;
        }
        else if(H_choice==="Rock" && C_choice==="Scissors" || H_choice==="Scissors" && C_choice==="Paper" || H_choice==="Paper" && C_choice==="Rock")
        {
            humanScore++;
        }
        score.textContent=`Player Score: ${humanScore} || Computer Score: ${computerScore}`;
        num_of_plays++;
    }
    else if(num_of_plays===5){
        if(humanScore>computerScore)
        {
            ChoiceWinner.textContent="Player Win!";
        }
        else if(computerScore>humanScore)
        {
            ChoiceWinner.textContent="Computer Win!";
        }
        else{
            ChoiceWinner.textContent="Draw!";
        }

    }
    
}

let Round=document.querySelector(".play");

Round.addEventListener("click",() =>
{
    num_of_plays=0;
    ChoiceWinner.textContent="Choose an Option";
    humanScore=0;
    computerScore=0;
    score.textContent=`Player Score: ${humanScore} || Computer Score: ${computerScore}`;
})

let buttons=document.querySelectorAll("div>button");
buttons.forEach(button =>
{
    button.addEventListener("click", (event) =>
    {
        switch(event.target.className)
        {
            case "Rock":
            H_choice="Rock";
            break;
            case "Paper":
            H_choice="Paper";
            break;
            case "Scissors":
            H_choice="Scissors";
            break;
        }
        ScoreUpdate();
    })
}
)