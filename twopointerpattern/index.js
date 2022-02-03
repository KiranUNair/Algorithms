//Pair with target sum
const sortedArr1 = [1, 2, 3, 4, 6];
const targetSum = 6;

const findPair = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let currSum = arr[start] + arr[end];
    if (target === currSum) {
      return console.log(
        `Pair with target sum is [${arr[start]}, ${arr[end]}]`
      );
    } else if (currSum < target) start++;
    else end--;
  }
  return console.log(`No such pair exists`);
};
findPair(sortedArr1, targetSum);

//Remove duplicates
const sortedArr2 = [2, 3, 3, 3, 6, 9, 9];

const removeDuplicates = (arr) => {
  let nxtNonDup = 1;
  let next = 1;

  while (next < arr.length) {
    if (arr[nxtNonDup - 1] !== arr[next]) {
      arr[nxtNonDup] = arr[next];
      nxtNonDup++;
    }
    next++;
  }

  console.log(
    `Length of non duplicate array is ${nxtNonDup} and the new array is ${arr.slice(
      0,
      nxtNonDup
    )}`
  );
};

removeDuplicates(sortedArr2);

//Remove duplicates from unsorted array

const unsortedArr = [3, 2, 3, 6, 3, 10, 9, 3];
const key = 3;

const removeDuplicatesUnsorted = (arr, key) => {
  let next = 0;
  let nxtNonDup = 0;

  while (next < arr.length) {
    if (arr[next] !== key) {
      arr[nxtNonDup] = arr[next];
      nxtNonDup++;
    }
    next++;
  }
  console.log(
    `New Array after removing the key: ${key} is ${arr.slice(0, nxtNonDup)}`
  );
};

removeDuplicatesUnsorted(unsortedArr, key);

//squares of sorted array
const sortedArr3 = [-2, -1, 0, 2, 3];

const getSquares = (arr) => {
  let squareArr = new Array(arr.length);
  let start = 0;
  let end = arr.length - 1;
  let highestSqrIdx = arr.length - 1;
  while (start < arr.length) {
    let startSqr = Math.pow(arr[start], 2);
    let endSqr = Math.pow(arr[end], 2);
    if (startSqr < endSqr) {
      squareArr[highestSqrIdx--] = endSqr;
      end--;
    } else {
      squareArr[highestSqrIdx--] = startSqr;
      start++;
    }
  }
  console.log(`Sorted Square array - ${squareArr}`);
};

getSquares(sortedArr3);

//Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const unsortedArr1 = [-3, 0, 1, 2, -1, 1, -2];

const findTriplets = (unsortedArr1) => {
  const triplets = [];
  const sortedArr = unsortedArr1.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
      continue;
    }
    searchPair(sortedArr, -sortedArr[i], i + 1, triplets);
  }
  console.log(triplets);
};

const searchPair = (arr, targetSum, left, triplets) => {
  let right = arr.length - 1;
  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (targetSum === currSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--;
      }
    } else if (targetSum > currSum) left++;
    else right--;
  }
};
findTriplets(unsortedArr1);
