import inquirer from "inquirer"

const answers : {
    Sentence: any
} = await inquirer.prompt([
    {
        name:"Sentence",
        message:"Enter your sentence to counts the word",
        type:"input"
    }
]);

const words = answers.Sentence.trim().split(" ")

console.log(`Your sentence count word is ${words.length}`)

