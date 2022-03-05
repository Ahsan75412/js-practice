// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// using function click
  function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }



  // more data Load :- 02
  function loadUsers(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  //Display users:-
  function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUser(data)) //calling a function
}


  // load post more data 

  function loadPost(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))

  }




 //sample functions

 function displayUser(data){
     const ul = document.getElementById('users');
     for(const user of data){
        //  console.log(user.name); 
         const li = document.createElement('li');
         li.innerText = `Name: ${user.name} and Email: ${user.email}`;
         ul.appendChild(li);
     }

 }