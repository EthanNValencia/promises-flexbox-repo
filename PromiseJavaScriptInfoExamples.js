console.log('Start.');

function promiseFulfilledExample() {
    let promise = new Promise(function (resolve, reject) { /* The function() passed to the Promise constructor is call an executor. */
        setTimeout(() => console.log("Done."), 1000);
    });
}

// promiseFulfilledExample();

function promiseRejectedExample() {
    let promise = new Promise(function (resolve, reject) { /* The function() passed to the Promise constructor is call an executor. */
        setTimeout(() => reject("Whoops!"), 1000);
    });
}

// promiseRejectedExample();

function promiseOrderOfOperationsExample() {
    let promise = new Promise(function (resolve, reject) { /* The function() passed to the Promise constructor is call an executor. */
        resolve('Done.'); // The promise is resolved here. 
        reject(new Error("Whoops!")); // This line is never arrived at. 
        // A promise can only produce a single result. 
    });
}

// promiseOrderOfOperationsExample();

function promiseInstantResolutionExample() {
    let promise = new Promise(function (resolve, reject) {
        resolve(123); // A promise can be resolved immediately if the data is there. 
    });
}

// promiseInstantResolutionExample();

function promiseThenFirstExample() {
    let promise = new Promise(function (resolve, reject) {
        // resolve();
        reject();
    });

    promise.then(
        function (resolve) { // This function is called if the above promise is resolved. 
            console.log('Resolved.');
        }, function (reject) { // This function is called if the above promise is rejected. 
            console.log('Error!');
        }
    );
}

// promiseThenFirstExample();

function alert(message) {
    console.log(message);
}

function catchError(error) {
    console.log('Catch:', error);
}

function promiseThenSecondExample() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('Done.'), 500);
    });
    promise.then(
        result => alert(result), /* The first function is always resolve */
        error => alert(error) /* The second function is always reject */
    );
}

// promiseThenSecondExample();

function promiseThenThirdExample() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve('Done.'), 500);
    });
    promise.then(alert); // This calls the alert() function and passes the 'Done.' text to it. 
}

// promiseThenThirdExample();

function promiseThenFourthExample() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('Rejected!')), 500);
    });
    promise.catch(alert); // This calls the alert() function and passes the 'Done.' text to it. 
}

// promiseThenFourthExample();

function promiseFifthExample(number) {
    return new Promise(function (resolve, reject) {
        if (number == 1) {
            setTimeout(() => resolve('Resolve.'), 500);
        } else {
            setTimeout(() => reject('Reject.'), 500);
        }
    });
}

// promiseFifthExample(1);
// promiseFifthExample(0);

function promiseFifthCall_V1(number) {
    let promise = promiseFifthExample(number).then(alert, alert).catch(catchError);
    promise.finally(() => alert("Finally."));
}

function promiseFifthCall_V2(number) {
    let promise = promiseFifthExample(number).then(alert).catch(catchError);
    promise.finally(() => alert("Finally."));
}

// promiseFifthCall_V1(1);
// promiseFifthCall_V2(2);

function promiseFinallyBeforeCatchExample() {
    new Promise((resolve, reject) => {
        throw new Error("error");
    })
        .finally(() => alert("Promise ready")) // triggers first
        .catch(err => catchError(err));  // <-- .catch shows the error
}

// promiseFinallyBeforeCatchExample();

function promiseHandleImmediately() {
    let promise = new Promise(resolve => resolve("It is done!"));
    promise.then(alert); // done! (shows up right now)
}

// promiseHandleImmediately();

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.append(script);
    });
}

function loadScriptExample() {
    let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
    promise.then(
        script => alert(`${script.src} is loaded!`),
        error => alert(`Error: ${error.message}`)
    );
    promise.then(script => alert('Another handler...'));
}

loadScriptExample();

console.log('End.');