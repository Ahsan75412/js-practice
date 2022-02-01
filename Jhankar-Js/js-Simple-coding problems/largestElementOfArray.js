
function largestElement (numbers){
    let largest = 0;

    for(let i=0; i < numbers.length ; i++){
        const element = numbers[i];

        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}

const ages = [12 , 18  ,20 , 52 , 25 ,55 , 88];
const oldest =  largestElement(ages);

console.log(oldest);


//Task:
// find the smallest number of an array
