
//problem : 01

function anaToVori (ana){

    if (typeof ana != "number") {
        return "please enter a number ";
    }
    if (ana < 0) {
        return "please enter a positive number";
    }

    var vori = ana / 16;

    return vori ; 
}

var newVori = anaToVori(16);
console.log(newVori);







//problem : 2

function pandaCost(singaraQuantity , samochaQuantity , jilapiQuantity){

    if ((typeof singaraQuantity != "number") || (typeof samochaQuantity != "number") || (typeof jilapiQuantity != "number")) {
        return "Please! enter number only ";
    }
    if (singaraQuantity < 0 || samochaQuantity < 0 || jilapiQuantity < 0) {
        return "Please! enter positive number only ";
    }

    const perSingara = 7;
    const perSamocha = 10;
    const parJilapi = 15;

    const perSingaraQuantity = singaraQuantity * perSingara;
    const perSamochaQuantity = samochaQuantity * perSamocha;
    const perJilapiQuantity = jilapiQuantity * parJilapi;

    const TotalTk = perSingaraQuantity + perSamochaQuantity + perJilapiQuantity;

    return TotalTk;


}

const TotalBalance = pandaCost(1 , 1 , 1);
console.log(TotalBalance);








// problem : 03 

function picnicBudget(perPerson) {


    if (typeof perPerson != "number") {
        return "Please enter a number ";
    }
    if (perPerson < 0) {
        return "Please enter a positive number ";
    }

   

    let totalAmount = 0;
    for (let i = 1; i <= perPerson; i++) {
        if (i <= 100) {
            totalAmount = totalAmount + 5000;
        } else if (i <= 200) {
            totalAmount = totalAmount + 4000;
        } else {
            totalAmount = totalAmount + 3000;
        }
    }
    return totalAmount;
}

const totalTaka = picnicBudget(150);
console.log(totalTaka);








// problem : 4

const friendsName = ['Habib', 'Mridul', 'Sadia', 'Maliya', 'Shahriar', 'ayan'];
function oddFriend(friendsName) {

    if (typeof friendsName != "object") {
        return "Please enter an array of strings ";
    }
    for (const item of friendsName) {
        if (typeof item != 'string') {
            return "Only strings are allowed in array";
        }
    }

    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length % 2 != 0) {
            return friendsName[i];
        }
    }
}
const Friends = oddFriend(friendsName);
console.log(Friends);




