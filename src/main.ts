#! /usr/bin/env node
import quiz from "./quiz.js";
import chalk from "chalk";
import question from "./question.js";
const { scoree, answers } = await quiz();
for (let i = 0; i < question.length; i++) {
    const q = question[i];
    const yourans = q.choices[answers[i]];
    const correctans = q.choices[q.correctAnswerIndex];
    if (yourans === correctans) {
        console.log(chalk.bgGreen("Correct"));
    }
    else {
        console.log(chalk.bgRed("Incorect"));
    }
    console.log(chalk.yellow(`Question No ${i}`), `: ${q.question}`);
    console.log(`Your Answer: ${yourans}`);
    console.log(`Correct Answer: ${correctans}`);
}
console.log(chalk.bgYellow(` Your Score Is ${scoree} `));