
//01

const fish = { id : 58 , name : 'king Hilsha', price : 9000 , phone : '01788444444', address : 'chanpur' , dress : 'rupali' };

// const phone = fish.phone;
// const price = fish.price;
// const name = fish.name;
// const dress = fish.dress;
// const id = fish.id;


// console.log(phone);
// console.log(price);
// console.log(name);
// console.log(dress);
// console.log(id);





//uporer ta short cut: 02

const {phone , price , dress , id} = fish;



console.log(phone , price);
console.log(price , dress);
console.log(name , id);
console.log(dress);
console.log(id , dress);




// 03

const company = { name: 'GP' , ceo : {id: 1 , name: 'ahsan',food: 'foska' },
web:{work: 'website development' , employ: 22 , framwork : 'react'}

};

// const work = company.web.work;
// const framwork = company.web.framwork;

const {work , framwork} = company.web;
const {food} = company.ceo;

console.log(work , framwork , food);
