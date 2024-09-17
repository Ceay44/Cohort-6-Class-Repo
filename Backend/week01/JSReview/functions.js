const returnEmptyString = function () {

    return  ""

};

const returnZeroNumber = function () {
     return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnString = function () {
    return 'abc123'
}
const addition = function (a, b) {
    return a + b
};

const subtraction = function ( num2, num3){
    return num2 - num3
};

const multiplication = function (num4, num5) {
    return num4 * num5
};

const division = function (num6, num7) {
    return num6 / num7
};

const returnArray = function () {
return [1, 2, 3]
};

const returnFirstIndex = function (arr) {
    for(let i = 0; i < arr.length; i++){
        return arr[0]
    }
};

const returnSecondIndex = function (arr) {
    for(let i = 0; i < arr.length; i++){
        return arr[1]
    }
};

const returnArrayLength = function (arr) {
    for(let i = 1; i < arr.length; i++){
        return arr.length
    }
};

const arraySum = function (arr) {
    let plus = 0
    for(let i = 0; i < arr.length; i++){
        plus += arr[i]
    }
    return plus
};
console.log(arraySum([1,2,3]))


const arraySubtraction = function (arr) {
    let minus = 0
    for(let i = 0; i < arr.length; i++){
        minus -= arr[i]
    }
    return minus
};

const multiplicationArray = function (arr) {
    let multi = 1
    for(let i = 0; i < arr.length; i++){
        multi *= arr[i]
    }
    return multi
};

const divisionArray = function (arr) {
let diviz = arr[0]
for(let i = 1; i < arr.length; i++){
    diviz /= arr[i]
}
return +diviz.toFixed(3)
};

const oddArray = function (arr) {
let odds = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
        odds.push(arr[i])
    }
}
return odds
};

const evenArray = function (arr) {
    let evens = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        }
    }
    return evens
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
