
const numbers = [4 , 6 , 8 , 10];
const output2 = [];

const doubleIt = number => number * 2;

for(const number of numbers){
    const result = doubleIt(number);// number * 2
    output2.push(result);
}

console.log(output2);

//upore ja ja korci

// 1.loop through each element 
//2. element diye function ke call koreci
//3. result akta array er moddhe push koresi


//using map()
//map() use korle uporer 3 ta kaj ak line a kore fele 
//system:01
const output = numbers.map(doubleIt);
console.log(output);


//system:01

const output3 = numbers.map(number => number * 2);
console.log(output3);


const  squares = numbers.map(x => x * x);
console.log(squares);