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
        // document.body.innerHTML = output;
        let write = document.getElementById('write');
        write.innerHTML = output;
        /*
        output = `hello?`;
        document.getElementById("hello").innerHTML = output;
        */
        editParagraph();
    }, 1000);
}

function editParagraph() {
    let el = document.getElementById('hello');
    console.log(el);
    el.innerHTML = 'Can you see this?';
}

function createPost(post) { // The callback is the getPost() function.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            if (posts.length < 0) { // I'll say that if the posts is empty then it should fail. Kind of arbitrary. 
                reject('Error: posts is empty.');
            }
            resolve();
        }, 2000)
    });
}

// getPosts();

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(error => console.log(error));

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 4000, 'Goodbye'));

/*
const promise4 = fetch('/zzz_info.txt')
.then(response => response.text())
.then(data => console.log(data)); 
*/

Promise.all([promise1, promise2, promise3]).then(((values) => console.log(values)));
