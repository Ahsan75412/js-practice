
const bottle = {
    color: 'yellow' , 
    hold: 'water' , 
    price : 50, 
    isCleand: true

};

//Getting All The Properties Name
const keys = Object.keys(bottle);
console.log(keys);

//gating All properties value
const values = Object.values(bottle);
console.log(values);


const pairs = Object.entries(bottle);
console.log(pairs);

//freez
Object.freeze(bottle);

//seal properties:
Object.seal(bottle);//seal marle delete kora jay na bt properties er man changeHoy
// delete properties
delete bottle.isCleand;
console.log(bottle);














