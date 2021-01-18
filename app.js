
const readline = require('readline')
const rl = readline.createInterface({input : process.stdin,
                         output : process.stdout})
let num1 = Math.floor((Math.random()* 100) + 1);
let num2 = Math.floor((Math.random()* 100) + 1);
let answer = num1 + num2;

rl.question(`NE LAN BU ${ num1 } + ${ num2 }?`,
(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }else{
        console.log('hata yaptın mallll')
        rl.close()SS
    }
});
