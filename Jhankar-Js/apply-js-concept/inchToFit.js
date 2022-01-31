
// inch to feet convert with function
function inchToFeet(inches){
    var feet = inches / 12 ; 

    return feet ; 
}


var myInches = 132 ;
var feet = inchToFeet(myInches);
console.log('MyInches in feet' , feet); // jeta ase seta feet ba foot


var myInches = 555 ;
var feet = inchToFeet(myInches);
console.log('MyInches in feet' , feet);


var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches in feet' , feet);



//function cara

var dadiInches = 144;
var feet = dadiInches/12;
console.log(feet);


var nanaInches = 168;
var feet = nanaInches / 12;

console.log(feet);



//Mile To Km Converter

function mineToKilomiter (miles) {
    var km = miles * 1.60934;

    return km;
}

var marathon = mineToKilomiter(26.2);
console.log('Marathon in Km:' , marathon);




