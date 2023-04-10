'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let arr = str.split(" ");
    return arr.length%2!=0?arr[Math.ceil(arr.length/2-1)].length:arr[arr.length/2].length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let arr1 =[];
    let arr2 = [];
    for(let element of str1){
        arr1.push(element);
    }
    for(let element of str2){
        arr2.push(element);
    }
    arr1.sort();
    arr2.sort();
    let i =0;
    while(true){
        if(arr1[i]==null&&arr2[i]==null){
            break;
        }
        if(arr1[i]!=arr2[i]){
            return false;
        }
        i++;
    }
    return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    if(arr.indexOf(int)==-1){
        let count = 0;
        for(let element of arr){
            if(element>int){
                return count;
            }
            count++;
        }
        return count++;
    }
    return arr.indexOf(int);
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };