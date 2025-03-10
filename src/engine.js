import readlineSync from 'readline-sync';

const engine = (userName, rules, game) => {
  console.log(rules);
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = game();
    const userAnswer = readlineSync.question(`Question: ${question}\n`);
    if (answer !== userAnswer) {
      const message = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`;
      console.log(message);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
