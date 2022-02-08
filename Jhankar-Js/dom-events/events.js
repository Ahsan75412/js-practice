
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// make blue 
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


// Different ways to use addEventListener on a button

const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green';
}



// using add eventLisener color goldenrod change

const makeGolden = document.getElementById('golden-rod-button');
makeGolden.addEventListener('click' , makeGoldenRod );

function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
}