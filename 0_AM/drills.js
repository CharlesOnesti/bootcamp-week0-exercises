const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    let x = str.split(' ');
    return x
};

// TODO - write a function which reverses the string
const reverse = str => {
    return str.split('').reverse().join('');
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
    return Array.from(new Set(arr));
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    if (num <= 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if (arr1.length != arr2.length){
        return -1;
    }
    let x = [];
    for (let i=0; i < arr1.length; i++){
        x.push([arr1[i], arr2[i]]);
    }
    return x;
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    let x = []
    for (let i=0; i<arr.length; i++){
        for (let j = 0; j < 2; j++){
            x.push(arr[i][j]);
        }
    }
    return x;
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shift]("Hello",3) === "lloHe"
const shiftRight = (str, num) => {
    num = str.length-num;
    x = Array.from(str);
    let y = [];
    for (i = num; i < x.length+num; i++){
        let j = i % x.length;
        y.push(x[j]);
    }
    return y.join('');
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    let d = new Date()
    const months = ['January', 'February', 'March', 'April', "May", 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const suffix = ['st', 'nd', 'rd', 'th']
    console.log(d.getDate()%10)
    let day = ''
    if (d.getDate()%10 === 1){
        day = `${d.getDate()}st`
    }else if (d.getDate()%10 === 2){
        day = `${d.getDate()}nd`
    }else if (d.getDate()%10 === 3){
        day = `${d.getDate()}rd`
    }else{
        day = `${d.getDate()}th`
    }
    return `Today's date is ${months[d.getMonth()]} ${day}, ${d.getFullYear()}. It is ${d.getHours()} in the morning`;
};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);

console.log(tokenize('this is a sentence'));
console.log(reverse('charles onesti'));
console.log(uniqueOnes([1, 2, 3, 2, 7, 1]));
console.log(factorial(5));
console.log(zip([1, 2, 3, 2, 7, 1],[1, 2, 3, 2, 7, 1]));
console.log(unzip(zip([1, 2, 3, 2, 7, 1],[1, 2, 3, 2, 7, 1])))
console.log(shiftRight('charles', 1));
console.log(announceDate())