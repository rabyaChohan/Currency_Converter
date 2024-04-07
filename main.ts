#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";


const currency : any= {
    USD: 1, 
    PKR: 280,
    INR: 74.57,
    EUR: 0.91,
    GBP: 0.76,
    JYP: 110
}

let userInput = await inquirer.prompt([

    {
        name: "from",
        type: "list",
        choices : ['USD', 'PKR', 'INR', 'EUR', 'GBP', 'JYP'],
        message: chalk.cyan("Enter Your Currency From")
    },

    {
        name: "to",
        type: "list",
        choices : ['USD', 'PKR', 'INR', 'EUR', 'GBP', 'JYP'],
        message: chalk.cyanBright("Enter Your Currency To")

    },

    {
        name: "amount",
        type: "input",
        message: chalk.green("Enter Your Amount")

    }
])


let from = currency[userInput.from];
let to = currency[userInput.to];
let Amount = userInput.amount


let baseAmount = Amount/ from // Use Base Currency //4
let convertAmount =  baseAmount * to

console.log(chalk.blue(`Your Converting Value is ${chalk.green(convertAmount)}`))
