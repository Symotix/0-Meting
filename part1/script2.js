//part 2
let testObject = {
    key1: 40,
    key2: 491,
    key3: 991,
    key4: 819,
    key5: 138,
    key6: 481
}

// function that gets name of key and returns value
function logWithCertainKey(keyForValue){
    console.log(testObject[keyForValue]);
}
logWithCertainKey("key2");

// function that writes every value of object
function logAllValues(anObject) {
    for(currentKey in anObject){
        console.log(anObject[currentKey]);
    }
}
logAllValues(testObject);

// function that sums all values of object and writes total
function logTotalValue(totalObject){
    let pairsArray = Object.entries(totalObject);
    let totalSum = 0;
    
    for(const [key,value] of pairsArray){
        //console.log(`${value}`);
        totalSum += parseInt(`${value}`);
    }
    console.log(totalSum);
}
logTotalValue(testObject);