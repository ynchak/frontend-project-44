import getRandomNumber from '../utils.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const MAX = 100;
const brainPrime = () => {
  const number = getRandomNumber(MAX);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};
export default brainPrime;
