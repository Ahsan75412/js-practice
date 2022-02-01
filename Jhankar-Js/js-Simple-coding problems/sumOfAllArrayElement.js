
const numbers = [44 , 25, 23 ,55 ,5 ,78 ,80  ];

let sum = 0;
for(let i = 0; i<numbers.length ; i++){
    const element =  numbers[i];
    sum = sum + element   
}
console.log(sum);


//using function 

function arrayTotal (numbers) {
    let sum = 0 ;
    for (let i = 0; i< numbers.length ; i++){
        const element =  numbers[i];
        sum = sum + element 
    }

    return sum;
}

const total = arrayTotal([32 , 32 , 32]);
console.log(total);