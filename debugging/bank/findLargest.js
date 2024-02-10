const findLargest = (numbers) => {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
};
console.log(findLargest([3, 7, 2, 5, 6]));



//What I did - I was the debugger and went through each line separately to understand it interms of numbers to predict what the result will be 
//What I expected. Make sure you include your prediction here - I expected the result to be 7 
//What actually happened - The result was 7, my prediction was right 