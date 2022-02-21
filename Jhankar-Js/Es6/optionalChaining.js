
//declare variable based on the name of an object property

const myObj = {x: 2 , y: 50 , z: 600 , a: 25 , b: 68};

const {x , b} = myObj;
console.log(x , b);




//Destructuring an array:

const [p , q] = [45 , 37 , 91, 86];
console.log(p,q);


const [ best , faltu] = [33 , 56];
console.log(best , faltu);



//chaining

const company = { name: 'GP' , ceo : {id: 1 , name: 'ahsan',food: 'foska' },
web:{work: 'website development' , employ: 22 , framwork : 'react'}

};

const {work , framwork} = company.web;
const {food} = company.ceo;

console.log(work , framwork , food);