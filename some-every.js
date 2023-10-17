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


function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(obj){
        return obj[key] === searchValue;
    })
}
