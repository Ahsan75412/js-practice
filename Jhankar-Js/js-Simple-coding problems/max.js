
const busniess = 450 ;
const minister = 350 ; 
const army = 600 ; 

// if (busniess > minister){
//     console.log('Busniess person er pola is bigger');
// }

// else{
//     console.log('Minister er pola is bigger');

// }


//compare 3

/*
if(busniess > minister && busniess > army){
    console.log ('busniess is bigger');
}
else if(minister > busniess && minister > army ){
    console.log ('minister is bigger');
}

else {
    console.log ('army is bigger');
}

*/



//ai vabeo ber kora somvob konta boro
var max = Math.max(busniess , minister , army );
console.log('largest is ' , max);


//using function find largest numbers

function findLargest (first , second){
    if ( first > second){
        return first;
    }
    else{
        return second;
    }
}

const larger = findLargest(354 , 241);
console.log('largest is ' , larger);



// task :1

//create a function that takes three numbers as input paramiter ans returns you the largest number of the three .

//task:2
//write a function to find the smallest  of three numbers.