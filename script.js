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
function getHumanChoice()
{
    let choice=prompt("enter your choice");
    return choice[0].toUpperCase()+choice.toLowerCase().slice(1);
}
let humanScore=0;
let computerScore=0;
function playRound()
{
    let C_choice=getComputerChoice();
    let H_choice=getHumanChoice();
    console.log(`computer choice is ${C_choice} and human choice is ${H_choice}`)

    if (C_choice==="Rock" && H_choice==="Scissors" || C_choice==="Scissors" && H_choice==="Paper" || C_choice==="Paper" && H_choice==="Rock") 
    {
        computerScore++;
    }
    else if(H_choice==="Rock" && C_choice==="Scissors" || H_choice==="Scissors" && C_choice==="Paper" || H_choice==="Paper" && C_choice==="Rock")
    {
        humanScore++;
    }
}
function playGame()
{
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`computer score is ${computerScore} and human score is ${humanScore}`);
    humanScore=0;
    computerScore=0;
}
