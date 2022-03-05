// using Object Literal:
const student = {name: 'Shakib-Al-Hasan' , job: 'Cricketer'};

//constructor
const person = new Object();


//3.

// const human = Object.create(null);
const human = Object.create(student);
console.log(human);





//04

class People {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
   
}

const peop = new People('Manus' , 12);
console.log(peop);


//05 function objects

function Manus(name){
    this.name = name;
}

const man = new Manus('kader');
console.log(man);

