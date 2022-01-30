
function bringSingra(taka) {
    console.log('Singra er jonno decy ', taka);
    console.log('mama singra den');

    //aktu kothin korte gele 

    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;

    return singaraQuantity;
}

var money = 250 ; //money = taka fun() paramiter
var singara = bringSingra(money); 
console.log('ai nen mama singara' , singara );

