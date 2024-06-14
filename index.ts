#! /user/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
const answer = await inquirer.prompt([
    {
        name:"firstNumber",
        message:"Enter the first number",
        type:"number",

    },
    {
        name:"secondNumber",
        message:"Enter the second number",
        type:"number",
    },
    {
        name:"operator",
        message:"please Enter the valid operator",
        type:"list",
        choices:["+","-","*","/"],
    }
])
if(answer.operator === "+"){
    console.log(chalk.bold.green(`The result is ${answer.firstNumber + answer.secondNumber}`))

}
else if(answer.operator === "-"){
    console.log(chalk.bold.red(`The result is ${answer.firstNumber - answer.secondNumber}`))
}
else if(answer.operator === "*"){
    console.log(chalk.bold.yellow(`The result is ${answer.firstNumber * answer.secondNumber}`))
}
else if(answer.operator === "/"){
    console.log(chalk.bold.blue(`The result is ${answer.firstNumber / answer.secondNumber}`))
    
}
else{console.log("please Enter a number");
}