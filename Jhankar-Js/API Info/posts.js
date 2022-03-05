

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
    // .then(data => console.log(data))
}

loadPosts();

function displayPosts(posts) {
    const postConatiner = document.getElementById('posts');
    for (const post of posts) {
        // console.log(post.title);
        
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        
        `;
        postConatiner.appendChild(div);
    }

}



const info={ data: [ { language:"Javascript", library:"React" } ] } 

const getData = info.data[0].library;

console.log(getData);