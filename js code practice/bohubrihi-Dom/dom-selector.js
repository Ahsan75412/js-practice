
//Single Element Access korar jonno --

//1.document.getElementById()
//2.document.querySelector()


//document.getElementById()

let val ;
//getting an element
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

//changing style using getElementById()

 document.getElementById('document-title').style.background = '#333';
 document.getElementById('document-title').style.color ='#fff';
 document.getElementById('document-title').style.padding = '10px';
 document.getElementById('document-title').style.display = 'block';


 //cnahging content
 document.getElementById('document-title').textContent = 'New Title';
 document.getElementById('document-title').innerText = 'Again New Title';
 document.getElementById('document-title').innerHTML = '<i>new again again title';

 val = document.getElementById('document-title');
 val.innerText = "ha ha aha aha aha ";


 //document.querySelector() - 1 ta element select kore

 val =  document.querySelector('#document-title'); // id er age # dity hoy
 val =  document.querySelector('.sample-class'); // class er age . dity hoy

 val = document.querySelector('h3');
 val = document.querySelector('ol');
 val = document.querySelector('ol li');
 val.style.background = 'red';
 val.style.color = '#fff';

 //using nth:child numbaring, even , odd to access
 val = document.querySelector('li:last-child');
 val = document.querySelector('li:nth-child(1)');
document.querySelector('li:nth-child(1)').innerText = 'Java-Script';
document.querySelector('li:nth-child(even)').innerText = 'JAVA';





console.log(val);