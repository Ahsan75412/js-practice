

var danishPrice = 50;
var butterBradePrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedWell = true;


if (danishPrice < myBudget){
    console.log('danish kheye danish jabo!');
}
else if (butterBradePrice < myBudget){
    console.log('butter bon diya cha khamu!');
}

else if (toastBiscuitPrice < myBudget){
    console.log('tost khamu!');
}

else{
    console.log('batasa diya cha khabo!');
}








// 2nd example here:


if(danishPrice < myBudget ){
    if(packedWell == true){
        console.log('danish khabo!');
    }

    else{
        console.log('danish khabo na!');
    }
}




