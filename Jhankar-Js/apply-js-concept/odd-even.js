
// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);


// find even 

const number = 145;

function isEven(number){
    if(number %2 == 0){
        return true;
    }
    return false;
}

const MyNumber = 1641;
const isMyNumberEven = isEven(MyNumber);
console.log('Is My Number even' , isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('Is her Number even' , isHerNumberEven);



//if odd function

function isOdd(number){
    if(number % 2 != 0 ){
        return true;
    }

    return false;
}

const isMyNumberOdd  = isOdd(MyNumber);
console.log('Is my Number odd' , isMyNumberOdd);