//Javascript, Node & Npm:
//part 1
'use strict'

let myReversedName = "drahciRelttil";

function reverseString(input) {
    let splitString = input.split("");
    let reversedArray = splitString.reverse();
    let finalString = reversedArray.join("");

    return finalString;
}

let myActualName = reverseString(myReversedName);
console.log(myActualName);