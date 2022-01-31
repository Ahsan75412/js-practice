
function getFactorial(number){
    let fact = 1;
    let i = 1 ;
    while ( i <= number){
        fact = fact * i ;
        i++
    }
    return fact;

}

var firstFactorial = getFactorial (6);
console.log('factorial of 6 is' , firstFactorial);