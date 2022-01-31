
function isLeapYear (year){
    if(year % 4 == 0){
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2024 ; 
const isMyYearLeapYear = isLeapYear(myYear); 

console.log('Is My Year Leap Year' , isMyYearLeapYear);