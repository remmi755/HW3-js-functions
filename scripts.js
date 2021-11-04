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

console.log('-----------------------#pow')

function pow (x, n) {
    let sum = 1;
    let i = 1
    while (n >= i) {
        sum *= x;
        i++;
    }
    return console.log(sum);
}
pow(10, 3);

function ucFirst(str) {
    let strNew ;
    if (str[0] !== str[0].toUpperCase) {
        strNew = str[0].toUpperCase() + str.slice(1);

    } else {
        strNew = str;
    }
    console.log(strNew);
}
ucFirst('panya');
function ucFirst1 (str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst1('nas'));