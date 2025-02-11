import getRandomNumber from '../utils.js';

const MAX = 100;

const getOperation = () => {
  const operations = ['+', '-', '*'];
  const index = getRandomNumber(operations.length);
  return operations[index];
};

const getAnswer = (n1, op, n2) => {
  let result = 0;
  switch (op) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    default:
      break;
  }
  return `${result}`;
};

const brainCalc = () => {
  const [n1, op, n2] = [
    getRandomNumber(MAX) + 1,
    getOperation(),
    getRandomNumber(MAX) + 1,
  ];
  const question = `Question: ${n1} ${op} ${n2}`;
  const answer = getAnswer(n1, op, n2);
  return [question, answer];
};

export default brainCalc;
