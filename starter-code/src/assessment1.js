// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  //
  if (num % 2 == 0) return true;
  else return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) return a
  else return b
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if ( a > b && a > c) return a
  else if (b > a && b > c) return b
  else return c
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let elem of numbers) {
    sum += elem;
  }


  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxNumber = numbers[0];

  for (let oneNumber of numbers) {
    if (oneNumber > maxNumber) maxNumber = oneNumber;
  }

  return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longString = strings[0];
  for (let oneWord of strings) {
    if (oneWord.length > longString.length) longString = oneWord;
  }

  return longString;
  
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) return true;
  else return false
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

  return false;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  
 return(personObj.firstName + " " + personObj.lastName)
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxArr = 3133;

  for (let oneArr of matrix) {
    if (oneArr > maxArr) maxArr = oneArr;
  }

  return maxArr;
}
