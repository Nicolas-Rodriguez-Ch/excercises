// My hash c251364c07de0d8a3b38a69fb5a22f1f, s = 2

// 1. Code challenge one

// Having a list of n numbers with digits in range [0, S], where n <= 100, switch all list positions in O(n)
// time.
// If the input number contains a digit greater or equal than S, you will delete the digit from the
// number, for example with S=6, 61 becomes 1, and 6 will be deleted from the array. The result
// should be printed in console/terminal. Please, don’t use built-in sort of your language.
// Examples with S=6:
// > [1, 2, 3, 4, 5, 6] -> [5, 4, 3, 2, 1]
// > [10, 20, 30, 40] -> [40, 30, 20, 10]
// > [6] -> []
// > [66] -> []
// > [65] -> [5]
// > [6, 2, 1] -> [1 , 2]
// > [60, 6, 5, 4, 3, 2, 7, 7, 29, 1] -> [1, 2, 2, 3, 4, 5, 0]
const s = 2;

const filter = (n: number[], s: number): void => {
  let restult = n.toLocaleString().split("");
  let arr: number[] = [];

  // iterates over the n array, removes digits that are equal or grater that s
  for (let i = 0; i < restult.length; i++) {
    if (parseInt(restult[i]) < s) {
      arr.push(parseInt(restult[i]));
    }
  }

  // counts the ocurrences of each number
  let count = new Array(s).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // creates a new array in descending order
  let sortedArr: number[] = [];
  for (let i = count.length - 1; i >= 0; i--) {
    for (let j = 0; j < count[i]; j++) {
      sortedArr.push(i);
    }
  }
  console.log(sortedArr);
};

filter([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], s);

// 2. Code challenge two
// Write a function that takes in a non-empty array of integers sorted in ascending order and returns a
// new array of the same length with the squares of the original integers also sorted in ascending
// order. If the output number is out of the range [0, SS] (for S=6 the range will be [0, 66]), you will
// delete it of the output array. Please, don’t use built-in sort of your language.
// Examples with S=6:
// > {"array": [1, 2, 3, 5, 6, 8, 9]} -> [1, 4, 9, 25, 36, 64]
// > {"array": [-2, -1]} -> [1, 4]
// > {"array": [-6, -5, 0, 5, 6]} -> [0, 25, 25, 36, 36]
// > {"array": [-10, 10]} -> []

const square = (n: number[], s: number): number[] => {
  const max = s * 11;
  let newArr: number[] = [];
  for (let i = 0; i < n.length; i++) {
    const squareI = n[i] * n[i];
    squareI < max ? newArr.push(squareI) : "";
  }
};

console.log(square([-6, -5, 0, 5, 6], 6));
