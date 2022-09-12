/* Topics Covered: 
        What are Promises?
        Why use Promises?
*/

/* What are Promises?

Promises are a way of putting certain lines of code into a pending or paused state but the
main thread will continue on. 

Promises Have 3 States
        1. Pending - Initial state, neither fulfilled nor rejected.
        2. Fulfilled - The operatation completed successfully. 
        3. Rejected - The operation failed. 
*/

/* Why use Promises? 

Promises help a developer deal with asynchronous code in a far more easily readable way. 
Promises can be easily written in such a way that they look synchronous. Rather than 
constructing complicated callback blocks, promises can be structured in a fluid manner. 
*/

const onFulfillment = (result) => {
        console.log(`The promise was fulfilled: ${result}`)
}

const onRejection = (error) => {
        console.log(`The promise was rejected: ${error}`)
}

/* Function Expression vs Function Declaration vs Anonymous Function? 

Function declaration example: 
        function doStuff() {};

Function expression example: 
        const doStuff = function() {}

Anonymous function example: 
        const doStuff = () => {}
*/

let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                reject(`error`) // This promise is hardcoded to reject.
        }, 1000)
}).then(onFulfillment).catch(onRejection);

promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(`success`) // This promise is hardcoded to resolve.
        }, 1000)
}).catch(onRejection).then(onFulfillment);

/* Promises Example */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'test');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
        for (var i = 0; i < values.length; i++) {
                console.log(values[i]);
        }
        console.log(values);
});


