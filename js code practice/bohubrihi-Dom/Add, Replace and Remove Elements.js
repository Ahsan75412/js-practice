
// Adding Element to dom
// Create element

let olItem = document.createElement('li');

// Add Id and className

olItem.className = "add new another-class";
olItem.id = "newElement";

//Add Attribute

olItem.setAttribute('title' , ' A title to new Element');

//content add
olItem.appendChild(document.createTextNode('java-Script'));

//calling the position tag ol for adding the new node insert

document.querySelector('ol').appendChild(olItem);



console.log(olItem);
//...................................ends.............................


//................................start............................
let ulItem ; 

ulItem = document.createElement('li');
let link = document.createElement('a');
link.appendChild(document.createTextNode('Instragram'));
link.setAttribute('herf' , 'https://www.instragram.com' );

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);
// console.log(link);
//............................end............................................


//Replacing Element...............start..................................: 

let newHeading = document.createElement('h1');

// insert some data for newHeading:
newHeading.appendChild(document.createTextNode('h1 New Heading' ));

//adding class name for new heading
newHeading.className = 'Sample-class';
//calling the old element which replecing the new element
let oldHeading = document.querySelector('h3');

//calling the parrent element of old structure and push there

let parent = document.querySelector('.container');

// now the time of replacing
parent.replaceChild(newHeading , oldHeading);



console.log(newHeading);
console.log(oldHeading);
console.log(parent);
//..........................................................................


// ..............start remove an Element............................ 
let listItem = document.querySelectorAll('li');
let list = document.querySelector('ul');

// ticnique 1:- 

// listItem[0].remove();
// listItem[5].remove();


// ticnique 2 for remove an element:- 

// list.removeChild(listItem[5]);

//adding classList here

list.classList.add("test");
list.classList.add("test-two");


list.classList.remove('sample-class');

//checking an attribute 
let val = list.hasAttribute('class');

list.setAttribute("title" , "new-Title");
list.removeAttribute("title");

console.log(val);
console.log(list);
console.log(listItem);




// ..............ends remove an Element............................ 