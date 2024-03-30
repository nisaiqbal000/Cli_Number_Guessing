#!/usr/bin/env node
//shabang (#! /usr/bin/env node)
import inquirer from "inquirer";

// 1) computer will generate a random number.
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result.
 
const randomnumber = Math.floor (Math.random() * 6+1);
const answer = await inquirer.prompt([
{
    name: "user_guessed_number",
    type: "number",
    message: "Please guess a number between 1 -6: ",
},
]);
if (answer.user_guessed_number === randomnumber){
    console.log("CONGRATULATION! you guessed the right number");
}
else{
    console.log ("OPS! you guessed the wrong number");
}