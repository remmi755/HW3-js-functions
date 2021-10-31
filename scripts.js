console.log('-----------------------#4')

function calcSum (a, b) {
    return  console.log(a + b) ;
}
calcSum(8, 4);

function calcSubtract (a, b) {
    return console.log(a - b);
}
calcSubtract(8, 4);

function calcMultiply (a, b) {
    return console.log(a * b);
}
calcMultiply(8, 4);

function calcDivide (a, b) {
    return console.log(a / b);
}
calcDivide(8, 4);

console.log('-----------------------#5')

function getIncreaseNumbers (n) {
    for(let i = 1; i <= n; i++) {
        console.log(i)
    }

}

getIncreaseNumbers(5);

console.log('-----------------------#6')

function getDecreaseNumbers (n) {
    for(let i = n; i >= 1; i--) {
        console.log(i)
    }

}
getDecreaseNumbers (5);


console.log('-----------------------#7')

function powPow(x, n) {
    let sum = 1;
    for(let i = 1; i <= n; i++) {
        sum = sum * x;
    }
    return sum;
}
console.log(powPow(5, 3))

console.log('-----------------------#8')

function isBigger(a, b) {
   return (a > b) ;
}
console.log(isBigger(5, -1));

console.log('-----------------------#9')

function isSmaller(a, b) {
    return (a < b) ;
}
console.log(isSmaller(5, -1));