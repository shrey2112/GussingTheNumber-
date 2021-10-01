let max = parseInt(prompt("Enter the maximum number you want!"));
while(!max){
    max = parseInt(prompt("Please enter valid number!"));
}
const targetNum = Math.floor(Math.random() * max) + 1;
let guesses = prompt("Please enter your guesses");
let attempt =1;
while(parseInt(guesses) !== targetNum){
    attempt++;
    if (guesses  === 'q') break;
    if(guesses > targetNum){
        guesses = prompt("Too high, try again!(enter Q for quit)");
    }else{
        guesses = prompt("Too low, try again!(enter Q for quit)");
    }
}
if (guesses === 'Q'){
    console.log("OK, YOU QUIT!");
}else{
    console.log("CONGRATS, YOU WIN!");
    console.log(`YOU GOT IT, it took you ${attempt} guesses`);
}
