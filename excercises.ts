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

filter([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 2);
