/* Topics Covered: 
        Why is async needed in Javascript?
        What are Timeouts and Intervals?
*/

/* Why is async needed in Javascript?

Javascript is a synchronous, blocking, and single-threaded language. 

** Synchronous ** - Code executes from the top down. 

For example: 

A()
B()

^ Javascript will always call A() and then B(). 

** Blocking ** - No matter how long a previous process takes, the subsequent 
processes will not begin until the previous process is completed. 

For example: 

A()
B()

^ Regardless of how long it takes for method A() to complete, function B() will 
not be called until after A() has completed. When this happens the browser appears
to be frozen or blocked because it is waiting for method A() to complete before 
it can execute B().

** Single-Threaded ** - JavaScript can only run a single thread at a time. The thread 
can only do one task at a time. JavaScript only has a single main thread. 

These are big problems for JavaScript because they severely limit the specifics of
use cases. JavaScript solves these problems by using tools built into modern browsers. 
These tools allow browsers to recognize when methods should be executed asynchronously. 
*/

/* What are Timeouts?

The setTimeout() function executes a particular block of code once after a specified time has elapsed. 

Function signature of setTimeout(function, duration, param3, param4, ...): 
    function    - The first parameter is a function reference.
    duration    - The duration of time in milliseconds to wait before execution. This is the minimum delay, it isn't an exact delay. 
    param3      - Optional, values that represent anything the function should have access to.
    param4      - Optional, values that represent anything the function should have access to.

More about duration:
    When setTimeout(functon, 2000) is set, the minimum duration is 2 seconds. Depending 
    on what else is taking place in the browser this could be longer than 2 seconds. So 
    if I were to do setTimeout(functon, 0), this doesn't mean that it will necessarily run
    immediately. Even thought the minimum time is 0, if the browser has a lot of processing
    to do it could take a non-precise amount of time. 
*/

/* setTimeout Examples */
function printText(name) {
    console.log(`Hello ${name}. This is a timeout.`)
}

setTimeout(printText, 100, 'Ethan') // This will print 'Hello' after 0.1 seconds.

/* How to clear the setTimeout(identifier) function 

Maybe after a setTimeout() has been set I'll want to stop it. I can stop it by passing 
the setTimeout() identifier to the clearTimeout() function. 
*/

const timeoutIdentifier = setTimeout(printText, 3000, 'you will not see this')
clearTimeout(timeoutIdentifier) // This will stop the above setTimeout() from running. 

/* What are Intervals? 

An interval is a function that repeatedly runs the same code over and over again at a set
interval. The interval will run forever so it is probably always a good idea to clear the
interval (unless I want it to run forever).

Function signature of setInterval(function, duration, param3, param4, ...):
    function    - The first parameter is a function reference.
    duration    - The duration of time in milliseconds to wait before each execution. This is the minimum delay, it isn't an exact delay. 
    param3      - Optional, values that represent anything the function should have access to.
    param4      - Optional, values that represent anything the function should have access to.

More about duration:
    When setInterval(functon, 2000) is set, the minimum duration is 2 seconds. Depending 
    on what else is taking place in the browser this could be longer than 2 seconds. So 
    if I were to do setInterval(functon, 0), this doesn't mean that it will necessarily run
    immediately. Even thought the minimum time is 0, if the browser has a lot of processing
    to do it could take a non-precise amount of time. 
*/

/* setInterval examples */
function helloInterval(name) {
    console.log(`Hello ${name}, this is an interval.`)
}

const intervalIdOne = setInterval(helloInterval, 500, 'Ethan')

/* Without clearInterval() the above ^ interval will run forever. */
function timeoutClearInterval(intervalId) {
    clearInterval(intervalId)
    console.log(`Interval ${intervalId} has been cleared.`)
}

setTimeout(timeoutClearInterval, 2250, intervalIdOne) // The interval will run a few times before being cleared. 

/* Timeouts and Intervals are not Features of JavaScript

Timeouts and intervals are not part of JavaScript itself, rather they are 
implemented by the browser. The method calls are names given for that 
functionality in JavaScript. So the function calls are informing the browser
that there is something special for the browser to handle. 
*/

/* Creating Intervals with setTimeout

It is possible to create an interval using setTimeout in a recursive loop. 
*/

var counterOne = 0

setTimeout(function run() {
    counterOne++
    if (counterOne == 5) { // Without this check the function would run forever.
        console.log("Returning from Recursive Timeout.")
        return
    }
    console.log(`Recursive Timeout: ${counterOne}`)
    setTimeout(run, 100) // Recursive call. 
}, 100)

var counterTwo = 0

const intervalIdTwo = setInterval(function run() {
    counterTwo++
    if (counterTwo == 5) { // Without this check the function would run forever.
        console.log("Returning from setInterval.")
        clearInterval(intervalIdTwo) // The interval will not shutdown without this function call. 
        return
    }
    console.log(`Interval: ${counterTwo}`)
}, 100)

/* About the above code ^

For setTimeout() the duration is guarenteed to a greater degree between executions. This 
means that the time to run the code that is being executed will not interfere as much. Using 
the recursive approach is probably best when the time to run the code is longer than the 
specified duration. Additionally, the setTimeout(run, 100), the duration can instead be 
calculated rather than outright specified as 100 (this can be a benefit). 

For setInterval() the time taken to execute the code is included in the interval time. So, 
for example, if the code takes 40 ms to run, the interval is actually 60 ms. If the code 
takes 90ms to run then the interval is 10ms. The interval is always fixed. It cannot be 
changed. 

*/