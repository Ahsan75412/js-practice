

const numbers = [ 1,2,3,4,5,6,19,20,15];
const numberSlice = numbers.slice(4 , 8);

console.log(numberSlice);

//slice korar poreo orginal array kate nah , seta dekhar jonno
console.log(numbers);


//using splice() method
//etar mane holo 4 no index theke 2 ta element bad deya hoice ba delete hoice
const numberSpliced = numbers.splice(4 , 2);
console.log(numberSpliced);
// jeta splice kora hoice seta r main array er vitor thakbe nah
console.log(numbers);


//splice use kore j ongso delete korce sekhn a abr insert value kora jabe 
// ekhn a 4 holo start r 2 ta element delete tr porer gulo insert hocce
const numberSpliced2 = numbers.splice(4 , 2 , 25,18,111,888 );
console.log(numberSpliced);
console.log(numbers);