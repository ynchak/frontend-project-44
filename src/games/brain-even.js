const brainEven = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default brainEven;
