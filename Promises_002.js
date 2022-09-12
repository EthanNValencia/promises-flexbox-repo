/* Topics Covered: 
        What are Callbacks?
        Types of Callbacks
        Problems with callbacks
*/

/* What are Callbacks?

Callbacks are first class objects. This means a callback function can be passed as an 
argument to another function. This means a callback function can also be returned as
a value from another function(s). 
*/

function greet(name) {
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callback) { // callback is a function reference.
    const name = 'Ethan'
    callback(name) // Calls the greet() function that was passed as a function reference.
}

higherOrderFunction(greet) // Call higherOrderFunction() and pass greet as a function reference. 

/* Looking at the above ^ code

higherOrderFunction(greet) // greet is passed as a callback function and higherOrderFunction 
is a higher order function. 

So in the above code greet() was passed as an argument to the higherOrderFunction() function. This
is the definition of what a callback function is in JavaScript. 

A function that accepts a function as an argument or it returns a function is called a 
higher order function. 
*/

/* Types of Callbacks

Generally, there are synchronous callbacks and there are asynchronous callbacks. 

A synchronous callback is a function that is executed immediately or when the main
method arrives on that line. 

An asynchronous callback is a callback that is used to continue or resume code 
execution after an asychronous operation has completed (like an endpoint call). Callbacks
are used to delay the execution of a function until a particular time has passed or
until after an event has occured. 

A good use case for callbacks is when there is data that needs to be fetched from a server. In
that scenario, I'd want the program to wait for a server response to be received. 
*/

/* Async callback examples

Using setTimeout() is an example of an async callback. 
*/

/* Problems with callbacks

A problem with callback functions is the that if there are multiple levels or layers of 
callback functions, the nesting of functions can become very deep and difficult to read 
and maintain. This is often referred to as 'callback hell'. This is why promises were
introduced, because promises solve this problem. 
*/

/* Summary 

Callbacks are functions that are passed as arguments to other functions.
Callbacks can be synchronous and asynchronous. 
Callbacks used to be the common pattern for handling data requests.
Today, Promises are used to solve this problem. 

*/
