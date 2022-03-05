const bottle = {
    color: 'yellow' , 
    hold: 'water' , 
    price : 50, 
    isCleand: true

};

/* 
    for(let i =0; i<10 ; i++){}

    for(const num of numbers){}//array

    for(const prop in stdunt){} // object

*/

for(const prop in bottle){ 
    console.log(prop , bottle[prop]);
} 
const keys = Object.keys(bottle);
console.log(keys);

for(const prop of keys){
    console.log(prop , bottle[prop]);
}

//Advance
for(const [key , value] of Object.entries(bottle)){
    console.log(key , value);
}


