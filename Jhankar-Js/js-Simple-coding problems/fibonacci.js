// 0 , 1, 1 , 2 ,3 , 5 , 8 , 13 , 21 , 34 ,55

/*
3rd = 2nd + 1st 
4th = 3rd + 2nd 
5th = 4th + 3rd 
6th = 5th + 4th
16th = 15th + 14th
119th = 118th + 117th
n-th = (n-1)th + (n-2)th

*/

const fibo = [ 0 , 1]
for(let i= 2 ; i<= 10 ; i++){

    fibo[i] = fibo[i - 1] + fibo [ i - 2];

}

console.log(fibo);


// using function

function fibonacciSeries(num){
    if (typeof num != 'number'){
        return 'Please give me a Number';
    }
    if(num < 2 ){
        return 'Please enter a positive number greater than 2';
    }

    const fibo = [0 , 1] ; 
    for(let i =2 ; i <= num ; i++){
        fibo[i] = fibo[i - 1] + fibo [ i - 2];
    }

    return fibo;
}

const fiboSeries  = fibonacciSeries(13);
console.log(fiboSeries);
