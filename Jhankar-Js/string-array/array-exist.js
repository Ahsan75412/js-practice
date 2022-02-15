

function megaFriends ( friends ){
    //array input cheking
    if(Array.isArray(friends) == false){
        return 'please provide an array of string';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }

    return mega;
}

const friends = ['Kutub' , 'Lion' , 'sabbir', 'shaol'];
const myBigBuddy = megaFriends(friends);
console.log(myBigBuddy);



// kono array er moddhe kono kicu ase kina check korar jonno

if(friends.indexOf('fox') != -1){
    console.log('lion exist!');
}
else{
    console.log('dose not exist!');
}


// 2nd poddhoti
if(friends.includes('Lion')){
    console.log('array exist finding with includs');
}
else{
    console.log('dose not exist!');
}



//array concat

const first = [1 , 2 , 3 , 4 , 5 ];
const second = [5 , 2 , 3 , 4 , 8];
const combiend = first.concat(second);

console.log('after array concat' , combiend);