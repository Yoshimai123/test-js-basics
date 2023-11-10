
function arrayFiller(num, minVal, maxVal) {
    let array = [];
    for (let i=0; i<num; i++) {
        let randomVal = Math.floor(Math.random() * (maxVal - minVal) + minVal);
        array.push(randomVal);
    }
    return array;
}

function oddOrEvenChecker(arr) {
    let odd = 0;
    let even = 0;
    for(let i=0; i<arr.length; i++) {
        let arrayNum = arr[i];
        if(arrayNum % 2 === 0){
            even++;
        }else {
            odd++;
        }
    }
    return console.log(`even: ${even} odd: ${odd}`)
}

let randomArray = arrayFiller(10, 5, 10);
console.log(randomArray);

let count = oddOrEvenChecker(randomArray);

