// This code runs when the index.html is opened in the browser. 
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body} ${index}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback) { // The callback is the getPost() function.
    setTimeout(() => {
        posts.push(post);
        callback(); // This will do a call back. 
    }, 2000)
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
