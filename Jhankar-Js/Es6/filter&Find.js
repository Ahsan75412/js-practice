
//using filter :
//filter diye kono sorto dibo jodi full fil kore tahole seta return korbe 

/*filter er sorto purun korle oi sortor product jodi onk gula thake seta sob gulo e return kore dibe*/

//sorto er sathe na mille empty array diye dibe 

const numbers = [4 , 6 , 8 , 10 , 7 , 41 , 19 , 30];

const bigNumbers = numbers.filter(number => number > 20);
const smallNubers = numbers.filter(number => number < 10);


console.log(bigNumbers);
console.log(smallNubers);




// 2:-
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile Phone', price: 50000, color: 'black' },
    { name: 'Smart Watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'Water Glass', price: 3, color: 'white' },
];

const expensive = products.filter(product => product.price > 100);

console.log(expensive);

//black j gula pro ase se gula dekhar jonno :
const blacks = products.filter(product => product.color == 'black');
console.log(blacks);




//find():-
//find use korle array dibe nah sorasori element tare dibe 

/*find jodi sorto purun kore r sekhn a ak sathe onk data thake mane white product thake tahole se shoudhu 1st ta kei return korbe .*/

// sorto er sathe na mille undefine dekhabe 

const whiteItems = products.find(product => product.color == 'white');

console.log(whiteItems);