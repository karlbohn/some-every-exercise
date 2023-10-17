function hasOddNumber(arr) {
    return arr.some(function(num){
        return num % 2 !== 0;
    })
}


function hasAZero(num) {
    let newArr = String(num).split("");
    return newArr.some(function(n){
        return n == '0';
    })
}


function hasOnlyOddNumbers(arr) {
    return arr.every(function(num){
        return num % 2 !== 0;
    })
}


function hasNoDuplicates(arr) {
    return arr.every(function(num){
        return arr.indexOf(num) === arr.lastIndexOf(num);
    })
}


function hasCertainKey(arr, key) {
    return arr.every(function(item){
        return key in item;
    })
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {}
