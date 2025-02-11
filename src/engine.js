import readlineSync from 'readline-sync';

const engine = (userName, rules, game) => {
  console.log(rules);
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = game();
    const userAnswer = readlineSync.question(`Question: ${question}\n`);
    if (answer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
