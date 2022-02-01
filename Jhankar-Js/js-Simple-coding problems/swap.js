
// swapping two numbers using temp variable

var first = 5 ;
var second = 7;
console.log(first , second);

var temp = first;
first = second;
second = temp;

console.log(first , second);

// using distructing

[first , second] = [second , first];
console.log('abr ager moto' , first , second);