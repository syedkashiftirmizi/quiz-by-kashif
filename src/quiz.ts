import inquirer from 'inquirer';
import question from "./question.js";
import score from "./score.js";
async function quiz() {
    let answers = [];
    for (let i = 0; i < question.length; i++) {
        let ans = await inquirer.prompt([
            {
                type: "list",
                name: "selected",
                message: question[i].question,
                choices: question[i].choices
            }
        ]);
        answers.push(question[i].choices.indexOf(ans.selected));
    }
    const scoree = score(answers, question);
    return { scoree, answers };
}
export default quiz;