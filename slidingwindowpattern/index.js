// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
const arr1 = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const windowSize = 5;

const findAvgSubArray = (arr, windowSize) => {
    let windowSum = 0;
    let windowStart = 0;
    const results = [];

    for (let windowEnd = 0; windowEnd < arr1.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= windowSize - 1) {
            results.push(windowSum / windowSize);
            windowSum -= arr[windowStart];
            windowStart++;
        }        
    }
    //console.log(results);
}
findAvgSubArray(arr1, windowSize);

//Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
const arr2 = [2, 1, 5, 1, 3, 2];
const k = 3;

const findMaxSumOfSubArray = (arr, windowSize) => {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;
    const results = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= windowSize - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    //console.log(maxSum);
}
findMaxSumOfSubArray(arr2, k);

//Given an array of positive numbers and a positive number ‘S’, 
//find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’
//Return 0, if no such subarray exists.

const arr3 = [2, 1, 5, 2, 3, 2];//[1,6,2,5,3,2,1,2]
const s = 7;

const findMinLenSubArray = (arr, sum) => {
    let minLength = Number.MAX_VALUE;
    let windowSum = 0;
    let windowStart = 0;
    let results = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while (windowSum >= sum) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            results.push(arr.slice(windowStart, windowEnd+1));
            windowSum -= arr[windowStart];
            windowStart++;
        }        
    }    
    //console.log(`The minimum subarray length is ${minLength} and subarray is ${results.find(elem => elem.length === minLength)}`);
}
findMinLenSubArray(arr3, s);

//Given a string, find the length of the longest substring in it with no more than p distinct characters
const str = "araaci";
const p = 2;

const findLongestSubStringLength = (str, p) => {
    let windowStart = 0;
    let frequencyMap = new Map();
    let maxLength = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(!frequencyMap.has(rightChar))
            frequencyMap.set(rightChar, 0);
        frequencyMap.set(rightChar,frequencyMap.get(rightChar) + 1);
        while (frequencyMap.size > p) {
            const leftChar = str[windowStart];
            frequencyMap.set(leftChar, frequencyMap.get(leftChar) - 1);
            if (frequencyMap.get(leftChar) === 0) {
                frequencyMap.delete(leftChar);
            }
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    //console.log(`The length of longest substring with no more than ${p} characters is ${maxLength}`);
}

findLongestSubStringLength(str, p);

//Fruits into baskets (medium)
//You can start with any tree, but once you have started you can’t skip a tree ~ contiguous
//Max number of fruits ~ Longest sub array
//at most 2 baskets ~ no more than K distinct characters ~ 2 distinct fruits in baskets
//In this case basket will be map and value will be count


const fruitTree = ['A', 'B', 'C', 'A', 'C'];
const basketSize = 2

const putFruitsInBasket = (fruitTree, basketSize) => {
    let windowStart = 0;
    let fruitMap = new Map();
    let maxFruitNum = 0;

    for (let windowEnd = 0; windowEnd < fruitTree.length; windowEnd++) {
        const rightChar = fruitTree[windowEnd];
        if (!fruitMap.has(rightChar)) {
            fruitMap.set(rightChar, 0);
        }
        fruitMap.set(rightChar, fruitMap.get(rightChar) + 1);
        while (fruitMap.size > basketSize) {
            const leftChar = fruitTree[windowStart];
            fruitMap.set(leftChar, fruitMap.get(leftChar) - 1);
            if(fruitMap.get(leftChar) === 0)
                fruitMap.delete(leftChar);
            windowStart++;
        }
        maxFruitNum = Math.max(maxFruitNum, windowEnd - windowStart + 1);
    }

    console.log(`Maximum number of fruits that can be added to ${basketSize} : ${maxFruitNum}`);
};

putFruitsInBasket(fruitTree, basketSize);

//Longest substring with non repeating characters(distinct characters)

const inputString = 'aabccbb'

const findLongestDistinctSubstring = (str) => {
    let windowStart = 0;
    let charMap = new Map();
    let maxLength = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd];
        if(charMap.has(rightChar))
            windowStart = Math.max(windowStart, charMap.get(rightChar) + 1)
        charMap.set(rightChar, windowEnd);
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }    
};