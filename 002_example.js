// This code is meant to be run in the IDE. 
let greeting = name => console.log(`Hello ${name}!`);

const userInfo = (firstName, lastName, callback) => {
    const fullName = `${firstName} ${lastName}`;
    callback(fullName);
}

userInfo('John', 'Doe', greeting); // Observe that the greeting() function is not being called here. 