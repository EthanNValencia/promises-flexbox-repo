// This code is meant to be run in the IDE. 
setTimeout(() => { console.log('Coffee') }, 3000);
console.log('Toast');
console.log('Eggs');

const names = ['John', 'Mary', 'Bob'];
const greet = names.map(name => `Hello ${name}`);
console.log(greet);

/*
The above will: 
Toast                                           *print*
Eggs                                            *print*
*init names array*
*append 'Hello ' to each entry in the names array*
[ 'Hello John', 'Hello Mary', 'Hello Bob' ]     *print*
*wait 3 seconds* 
Coffee                                          *print*

The setTimeout() function makes the code asynchronous. This is a callback function. 

The map() is also asynchronous. It returns a new array with each element beign the result of the callback function. 

When to not use .map():
    1. If I'm not using the array it returns. 
    2. If I'm not returning a value from the callback. 

In a big data situation, I might want to be hesitant to use .map(). 
*/