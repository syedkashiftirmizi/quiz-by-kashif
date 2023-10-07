const score = (answers: any[], question: string | any[]) => {
    let score = 0;
    for (let i = 0; i < question.length; i++) {
        if (answers[i] === question[i].correctAnswerIndex) {
            score++;
        }
    }
    return score;
};
export default score;