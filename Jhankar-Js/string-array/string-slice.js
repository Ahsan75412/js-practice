
const nationalAnthem = 'Amar Sonar Bangla Ami Tomai Valo Bashi';
const convertWord = nationalAnthem.split(' ');
const withoutA = nationalAnthem.split('a');




//slice
const smallSlice = nationalAnthem.slice(5 , 13); //(start:5 index and ends 13in)

//subStr
//eta akta index theke suru kore koyta charecter dorkar seta bole dile nibe 
const anotherPart = nationalAnthem.substr(5 , 13);

//substring (11 tomo index r 15 er age porjnto)
const subStringAnother = nationalAnthem.substring(11 , 15);


//concat()-jora lagano jay

const first = 'Amader';
const second = 'Sohor';
const fullString = first + second;
const fullStringconcat = first.concat(second);


//word joining with join() method
const word = ['a', 'b' , 'c', 'd' , 'e'];
const allJoined = word.join('');
const allJoined2 = word.join(' ');
const allJoined3 = word.join(',');









console.log('split covert the word is: ',convertWord);
console.log('split without a : ', withoutA);
//slice outpit
console.log('slice the word is : ', smallSlice);

//substr() output
console.log('sub str is : ', anotherPart);

//substring() output
console.log('sub string is : ', subStringAnother);

//concat output
console.log('concat kora  cara : ', fullString);
console.log('concat korar  pore : ', fullStringconcat);


//join () output
console.log('join hole: ' , allJoined);
console.log('join er gap : ' , allJoined2);
console.log('join er coma : ' , allJoined3);
