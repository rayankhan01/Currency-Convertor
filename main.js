#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your currency!",
        type: "list",
        choices: ['USD', 'EUR', 'INR', 'PKR', 'GBP']
    },
    {
        name: "to",
        message: "Enter to currency!",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your amount!",
        type: 'number',
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // USD base currency  // 4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
