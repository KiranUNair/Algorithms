//check for unique string
const isUnique = (str) => {
    if (!str) {
        return console.log(`Input string does not exist`);
    }
    str = str.split('').sort();
    for (let i = 1; i < str.length; i++) {        
        if (str[i-1] === str[i]) {
            return console.log(`Input string is not unique`);
        }
    }
    return console.log(`Input string is unique`);
};

isUnique('test');

//Check permutation
// This problem is also called comparing whether 2 strings are anagrams of each other.
const checkPermutation = (str1, str2) => {
    if (str1.length !== str2.length) 
        return console.log(`${str1} is not a permutation of ${str2}`);    
    if(str1.split('').sort().join('') === str2.split('').sort().join(''))
        return console.log(`${str1} is a permutation of ${str2}`)
    else
        return console.log(`${str1} is not a permutation of ${str2}`);
};

checkPermutation('cab', 'abc');

//URLify

const urlify = (str) => {
    return console.log(str.split(' ').join('%20'));
};

urlify('Mr Kiran Nair');

//String compression
const performStringCompression = (str) => {
    if(!str)
        return console.log(`Input string does not exist`);
    let frequencyMap = new Map();
    for (let i = 0; i < str.length; i++) {
        frequencyMap.set(str[i], i + 1);
    }
    let compressedString = '';
    frequencyMap.forEach((value, key, map) => {
        compressedString += `${key}${value}`;
    });
    if (compressedString.length <= str.length) {
        return console.log(compressedString);
    }
    return console.log(str);
}

performStringCompression('aaaffebb');