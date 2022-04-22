//Javascript, Node & Npm:
//part 1
'use strict'

let myReversedName = "drahciRelttil";

function reverseString(input) {
    let splitArray = input.split("");
    let reversedArray = splitArray.reverse();
    let finalString = reversedArray.join("");

    return finalString;
}

let myActualName = reverseString(myReversedName);
console.log(myActualName);