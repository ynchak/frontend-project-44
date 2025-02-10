import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Welcome to the Brain Games!, ${name}!`);
};

export default greeting;
