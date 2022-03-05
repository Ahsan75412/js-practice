
//js object
// java-Script object Notation :- JSON
const user = {
    id: 11 ,
    name: 'ahsan',
    job: 'Web-developer',
    company: ['usa' , 'UK' , 'BD'],
    location: 'bogura'
};

const stringified = JSON.stringify(user)

console.log(user);
console.log(stringified);

const converted = JSON.parse(stringified);
console.log(converted);