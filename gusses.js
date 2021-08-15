let max = parseInt(prompt("Enter the maximum number you want!"));
while(!max){
    max = parseInt(prompt("Please enter valid number!"));
}
const targetNum = Math.floor(Math.random() * max) + 1;
let gusse = prompt("Please enter your gusse");
let attempt =1;
while(parseInt(gusse) !== targetNum){
    attempt++;
    if (gusse  === 'q') break;
    if(gusse > targetNum){
        gusse = prompt("Too high, try again!");
    }else{
        gusse = prompt("Too low, try again!");
    }
}
if (gusse === 'q'){
    console.log("OK, YOU QUIT!");
}else{
    console.log("CONGRATS, YOU WIN!");
    console.log(`YOU GOT IT, it took you ${attempt} gusses`);
}