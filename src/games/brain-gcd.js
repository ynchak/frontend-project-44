import getRandomNumber from '../utils.js';

const MAX = 100;
const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
const brainGcd = () => {
  const [n1, n2] = [getRandomNumber(MAX), getRandomNumber(MAX)];

  const question = `${n1} ${n2}`;
  const answer = `${gcd(n1, n2)}`;
  return [question, answer];
};

export default brainGcd;
