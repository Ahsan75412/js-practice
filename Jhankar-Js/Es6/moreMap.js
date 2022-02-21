

const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];

const fLength = friends.map(friend => friend.length);

console.log(fLength);


// array of object theke map kore alada name , price r color er array banano:

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile Phone', price: 50000, color: 'black' },
    { name: 'Smart Watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'Water Glass', price: 3, color: 'white' },
]

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
const productColor = products.map(product => product.color);


console.log(productName);
console.log(productPrice);
console.log(productColor);



//using forEach Loop

products.forEach(product => console.log(product));


/* array map r forEach er moddhe diffrence holo map ta notun kore akta array return korbe but foreach ta notun kore kicu na kore pura arry ba obj tai return kore */
