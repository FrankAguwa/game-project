const options = ["Null", "Rock", "Paper", "Scissors"];
var playing = true;
var numWins = 0;
var cpuWins = 0;
while (playing) {
    var comChi = Math.floor((Math.random() * 3))+1;
    var play = window.prompt("Would you like to play? yes/no");
    play = play.toUpperCase();

    if (play == "NO") {
        playing = false;
        console.log(`RESULTS:\n CPU: ${cpuWins} YOU: ${numWins}`);
        if (numWins > cpuWins) {
            console.log("Good Job! You beat a computer!");
        } else if (cpuWins > numWins) {
            console.log("You lost this one! Better luck next time");
        } else{
            console.log("Stalemate!")
        }
    } else {
        var comHand = options[comChi];
        var userChi = parseInt(window.prompt(`Choose an option to play: \n 1: ${options[1]} \n 2: ${options[2]} \n 3: ${options[3]}`));
        var userHand = options[userChi]

        if (userChi == comChi) {
            console.log(`The game was a tie. You both chose ${userHand}`);
        } else if (userHand == "Rock" & comHand == "Scissors") {
            console.log("Rock beats Scissors.You won that round");
            numWins++;
            console.log(`Number of Wins:\n You: ${numWins} CPU: ${cpuWins}`);
        } else if (userHand == "Rock" & comHand == "Paper") {
            console.log("Paper beats Rock. You lost that round");
            cpuWins++;
            console.log(`Number of Wins:\n You: ${numWins} CPU: ${cpuWins}`);
        } else if (userHand == "Paper" & comHand == "Rock") {
            console.log("Paper beats Rock. You won that round");
            numWins++;
            console.log(`Number of Wins:\n You: ${numWins} CPU: ${cpuWins}`);
        } else if (userHand == "Paper" & comHand == "Scissors") {
            console.log("Scissors beats Paper. You lost that round");
            cpuWins++;
            console.log(`Number of Wins:\n You: ${numWins} CPU: ${cpuWins}`);
        } else if (userHand == "Scissors" & comHand == "Paper") {
            console.log("Scissors beat Paper. You won that round");
            numWins++;
            console.log(`Number of Wins:\n You: ${numWins} CPU: ${cpuWins}`);
        } else if (userHand == "Scissors" & comHand == "Rock") {
            console.log("Scissors beats Rock. You lost that round");
            cpuWins++;
            console.log(`Number of Wins:\n You: ${numWins} CPU: ${cpuWins}`);
        } 
    }

    



}
