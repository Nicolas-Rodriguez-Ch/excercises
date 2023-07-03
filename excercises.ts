// My hash c251364c07de0d8a3b38a69fb5a22f1f, s = 2

const s = 2;
// 1. Code challenge one

const filter = (n: number[], s: number): void => {
  let filteredLength = 0;

  // iterates over the n array, places the numbers lower than s at the begining
  for (let i = 0; i < n.length; i++) {
    let str = n[i].toLocaleString();
    let tmp = "";
    for (let j = 0; j < str.length; j++) {
      if (parseInt(str[j]) < s) {
        tmp += str[j];
      }
    }
    if (tmp) {
      n[filteredLength] = parseInt(tmp);
      filteredLength++;
    }
  }

  // trims the array
  n.length = filteredLength;
  
  // reverses the array
  for (let i = 0; i < Math.floor(filteredLength / 2); i++) {
    let tmp = n[i];
    n[i] = n[filteredLength - 1 - i];
    n[filteredLength - 1 - i] = tmp;
  }
  console.log(n);
};

filter([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], s);

// 2. Code challenge two

const square = (n: number[], s: number): number[] => {
  const max = s * 11;
  let newArr: number[] = [];

  // squares the value of the number and then checks if it goes over the max
  for (let i = 0; i < n.length; i++) {
    const squareI = n[i] * n[i];
    if (squareI <= max) {
      newArr.push(squareI);
    }
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

const change = (coins: number[]): number => {
  coins = coins.sort((a, b) => a - b);
  let change = 1;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > change) {
      break;
    } else {
      change += coins[i];
    }
  }
  return change;
};

console.log(change([5, 7, 1, 1, 2, 3, 22]));
