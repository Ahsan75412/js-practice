

var computer = { 
    price : 29000,
    Storage : '16gb',
    processor: 'intel i5'
}

console.log(computer);

//j kono akta proparty er man dekhte chaile

console.log(computer.processor);

// set a object proparty value

computer.price = 2200;
console.log(computer.price);


// diffrent way of set an object

computer.price = 2200;
console.log(computer.price);

computer["price"] = 280000
console.log(computer.price);


var StorageProparty = 'Storage';
computer[StorageProparty] = '1TB';
console.log(computer);


