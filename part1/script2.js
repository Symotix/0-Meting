//part 2
let testObject = {
    key1: 40,
    key2: 491,
    key3: 991,
    key4: 819,
    key5: 138,
    key6: 481
}

function logWithCertainKey(keyForValue){
    console.log(testObject[keyForValue]);
}
logWithCertainKey("key2");

function logAllValues(anObject) {
    for(currentKey in anObject){
        console.log(anObject[currentKey]);
    }
}
logAllValues(testObject);


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