/* 
Ariela Ismailanji 
CSCI 39548
Assignment 5: Eloquent JavaScript Exercises (chap. 2-4)
*/


////////////////////////////////////////////////////////
// chapter 2 - looping a triangle
for (let hashtag = "#"; hashtag.length < 8; hashtag += "#") {
    console.log(hashtag);
}
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 2 - fizzbuzz
function fizzBuzz(max) {
    for (let num = 0; num <= max; num++) {
        if ((num % 3 == 0) && (num % 5 == 0)) console.log("FizzBuzz");
        else if (num % 3 == 0) console.log("Fizz");
        else if (num % 5 == 0) console.log("Buzz");
        else console.log(num);
    }
}

fizzBuzz(100);
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 2 - chessboard
function chessboard(size) {
    let str = "";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) str += " ";
            else str += "#";
        }
        str += "\n"
    }
    console.log(str);
}

chessboard(8);
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 3 - minimum
function min(num1, num2) {
    if (num1 < num2) return num1;
    else return num2;
}

console.log(min(17, 3));
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 3 - recursion
function isEven(num) {
    if (num == 0) return true;
    else if (num == 1) return false;
    else if (num < 0) return isEven(-num);
    else return isEven(num - 2);
}

console.log(isEven(-2));
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 3 - bean counting
function countBs(str) {
    return countChar(str, "B");
}

function countChar(str, ch) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("earthquake"));
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 4 - the sum of a range
function range(start, end, step = start < end ? 1 : -1) {
    let result = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }   
    else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

function sum(arr) {
    let total = 0;
    for (let element of arr) {
        total += element;
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 4 - reversing an array
function reverseArray(arr) {
    let new_reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        new_reversed.push(arr[i]);
    }
    return new_reversed;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    }
    return arr;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 4 - a list 
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = list = {value: arr[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(value, list) {
    return {value, rest: list};
}

function nth(list, n) {
    if (!list) {
        return undefined;
    }
    else if (n == 0) {
        return list.value;
    }
    else {
        return nth(list.rest, n - 1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
// chapter 4 - deep comparison
function deepEqual(val1, val2) {
    if (val1 === val2) {
        return true;
    }
    if (val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object") {
        return false;
    }
    let keys_val1 = Object.keys(val1);
    let keys_val2 = Object.keys(val2);
    if(keys_val1.length != keys_val2.length) {
        return false;
    }
    for (let key of keys_val1) {
        if(!keys_val2.includes(key) || !deepEqual(val1[key], val2[key])) {
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
////////////////////////////////////////////////////////
