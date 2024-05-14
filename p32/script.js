const getDivisors = (num) => {
  let result = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      result.push(i);
      if (num / i !== i) {
        result.push(num / i);
      }
    }
  }
  result.sort((a, b) => a - b);

  return result;
};
