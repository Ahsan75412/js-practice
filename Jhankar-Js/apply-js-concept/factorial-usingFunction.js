

function getFactorial(number){
    let fact = 1;
    for(let i = 1 ; i <= number; i++){
        fact = fact * i ;
    }
    return fact;

}

var firstFactorial = getFactorial (7);
console.log('factorial of 7 is' , firstFactorial);


var secondFactorial = getFactorial (5);
console.log('factorial of 5 is' , secondFactorial);