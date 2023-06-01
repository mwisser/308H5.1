// 1.

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2. 

function maxOfThree(x, y, z) {
  let max = x; 

  if (y > max) {
    max = y; 
  }

  if (z > max) {
    max = z; 
  }
  return max;
};

console.log(maxOfThree(7, 10, 2));

// 3.

function isCharAVowel(character) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(character)) {
    return true;
  } else {
    return false;
  }
}

console.log(isCharAVowel('x'));

// 4.

const sumArray = function(answer) {
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
    sum += answer[i];
  }
  return sum;
};
const numbers = [7, 9, 5];
const result = sumArray(numbers);
console.log(result);

// 5.

function multiplyArray(number) {
  let product = 1;
  for (let i = 0; i < number.length; i++) {
    product *= number[i];
  }
  return product;
}
const number = [15, 3, 7];
const answers = multiplyArray(number);
console.log(answers);

// 7.

function reverseString(str) {
  return str.split('').reverse().join('');
}
let reverse = reverseString('rockstar');
console.log(reverse);
