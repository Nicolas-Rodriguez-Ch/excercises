// My hash c251364c07de0d8a3b38a69fb5a22f1f, s = 2

// 1. Code challenge one

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

  // creates histogram with the number of repetitions in each index
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

const square = (n: number[], s: number): number[] => {
  const max = s * 11;
  let newArr: number[] = [];

  // squares the value of the number and then checks if it goes over the max
  for (let i = 0; i < n.length; i++) {
    const squareI = n[i] * n[i];
    squareI <= max ? newArr.push(squareI) : "";
  }

  // creates histogram with the number of repetitions in each index
  const count = new Array(max + 1).fill(0);
  for (let i = 0; i < newArr.length; i++) {
    count[newArr[i]]++;
  }

  // creates a new array with the numbers sorted
  const sortedArr: number[] = [];
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      sortedArr.push(i);
    }
  }
  return sortedArr;
};

console.log(square([1, 2, 3, 5, 6, 8, 9], s));

// 3. Code challenge three

const change = (coins: number[]): any => {
  coins = coins.sort((a, b) => a - b);
  return coins;
};

console.log(change([5, 7, 1, 1, 2, 3, 22]));
