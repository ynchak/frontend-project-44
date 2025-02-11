import getRandomNumber from '../utils.js';

const fillProgression = () => {
  const progressionLength = getRandomNumber(5) + 5;
  const startValue = getRandomNumber(50);
  const positiveNumber = getRandomNumber(20);
  const result = new Array(progressionLength);
  let next = startValue;
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = next;
    next += positiveNumber;
  }
  return result;
};
const brainProgression = () => {
  const progression = fillProgression();
  const i = getRandomNumber(progression.length) - 1;
  const answer = progression[i];
  progression[i] = '...';
  const question = progression;
  return [question.join(' '), `${answer}`];
};

export default brainProgression;
