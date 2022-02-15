
const numbers = [ 6, 4 , 0 , 1 , 5 , 6 , 10 , 20 , 15];
const sortNumber = numbers.sort();

console.log(sortNumber);


const friends = ['ahsan' , 'habib' , 'mridul' ,'chyan','maya','turag','badhon'];
const sortFriends = friends.sort();

console.log(sortFriends);


//revers kora 
const reversedFriends = friends.reverse();
console.log(reversedFriends);



//sort and revers aksathe

const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

//BIG Number sorting fun
const bigNumbers = [66 , 58 , 81 , 92 , 9 , 6 , 37 , 13 , 2 ];
const sortBigNumber = bigNumbers.sort(function(a , b){
    return a - b;
});

console.log(sortBigNumber);










