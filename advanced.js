// 1. makeCounter below is a decorator function which creates and returns a function that
// increments a counter.
// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount)
//         return currentCount;
//     };
// }
// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2

// a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;
//     };
// }
//
// let counter1 = makeCounter();
// counter1(); // Output: 1
// counter1(); // Output: 2
//
// let counter2 = makeCounter();
// counter2(); // Output: 1
// counter2(); // Output: 2

// b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
// function makeCounter(startFrom) {
//     let currentCount = startFrom || 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;
//     };
// }
//
// let counter1 = makeCounter(5); // Start the counter from 5
// counter1(); // Output: 6
// counter1(); // Output: 7
//
// let counter2 = makeCounter(10); // Start the counter from 10
// counter2(); // Output: 11
// counter2(); // Output: 12

// c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.
// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom || 0;
//     let increment = incrementBy || 1;
//
//     return function() {
//         currentCount += increment;
//         console.log(currentCount);
//         return currentCount;
//     };
// }
//
// let counter1 = makeCounter(0, 2); // Starts from 0 and increments by 2
// counter1(); // Output: 2
// counter1(); // Output: 4
//
// let counter2 = makeCounter(10, 5); // Starts from 10 and increments by 5
// counter2(); // Output: 15
// counter2(); // Output: 20

// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
//     function delayMsg(msg){
//     console.log(`This message will be printed after a delay: ${msg}`)
//     }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

//     a) What order will the four tests below print in? Why?
//     #4: Not delayed at all (synchronous call)
//     #3: Delayed by 0ms (minimal delay, often executed after synchronous code)
//     #2: Delayed by 20ms (20 milliseconds delay)
//     #1: Delayed by 100ms (100 milliseconds delay)
//     #1 - This schedules the delayMsg function to be executed after 100 milliseconds, passing the message #1: Delayed by 100ms.
//     #2 - This schedules the delayMsg function to be executed after 20 milliseconds, passing the message #2: Delayed by 20ms.
//     #3 - This schedules the delayMsg function to be executed after 0 milliseconds. Even though it's specified as 0 milliseconds, there may still be a minimal delay due to the browser's minimum timeout threshold.
//     #4 - This immediately calls the delayMsg function with the message #4: Not delayed at all, which will print synchronously without any delay.

//     b) Rewrite delayMsg as an arrow function
// const delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`);
// };
//
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all');

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//     function delayMsg(msg)
// {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');+
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds');
// delayMsg('#4: Not delayed at all')

// d) Use clearTimeout to prevent the fifth test from printing at all.
//     function delayMsg(msg)
// {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');+
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds');
// delayMsg('#4: Not delayed at all')
// const timeoutId = setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds');
// clearTimeout(timeoutId);

// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
//     similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
//     It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
//     Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
//     b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.
// function debounce(func) { //answer for a)
//     let timeout;
//     return function() {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, 1000);
//     };
// }
// function debounceB(func, ms) { //answer for b)
//     let timeout;
//     return function() {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, ms);
//     };
// }
// function printMeC(msg) {
//     console.log(`printing debounced message c: ${msg}`)
// }
// printMeC = debounceC(printMeC, 1200)
// setTimeout( printMeC, 100, 'msg #1');
// setTimeout( printMeC, 200, 'msg #2');
// setTimeout( printMeC, 300, 'msg #3');
// function debounceC(func, ms) { //answer for c)
//     let timeout;
//     return function(msg) {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, ms, msg);
//     };
// }

// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
//     a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// function printFibonacci() {
//     let a = 0;
//     let b = 1;
//
//     console.log(a); // Print the first number of the sequence
//
//     const interval = setInterval(() => {
//         const next = a + b;
//         console.log(b); // Output the next number in the sequence
//
//         a = b;
//         b = next;
//     }, 1000);
//
//     // To stop the interval after a few iterations (for demonstration purposes)
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("Interval stopped");
//     }, 10000); // Stop the interval after 10 seconds (for example)
// }
//
// printFibonacci(); // Call the function to start printing Fibonacci numbers

//     b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// function printFibonacciTimeouts() {
//     let a = 0;
//     let b = 1;
//
//     console.log(a); // Print the first number of the sequence
//
//     function printNextFibonacci() {
//         const next = a + b;
//         console.log(b); // Output the next number in the sequence
//
//         a = b;
//         b = next;
//
//         setTimeout(printNextFibonacci, 1000);
//     }
//
//     setTimeout(printNextFibonacci, 1000); // Start the sequence after 1 second
//     setTimeout(() => {
//         console.log("Timeouts stopped");
//     }, 10000); // Stop the timeouts after 10 seconds (for example)
// }
//
// printFibonacciTimeouts(); // Call the function to start printing Fibonacci numbers using timeouts

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.
// function printFibonacciTimeouts(limit) {
//     let a = 0;
//     let b = 1;
//     let count = 0;
//
//     console.log(a); // Print the first number of the sequence
//     count++;
//
//     function printNextFibonacci() {
//         if (count < limit) {
//             const next = a + b;
//             console.log(b); // Output the next number in the sequence
//
//             a = b;
//             b = next;
//             count++;
//
//             setTimeout(printNextFibonacci, 1000);
//         } else {
//             console.log("Timeouts stopped after reaching the limit.");
//         }
//     }
//
//     setTimeout(printNextFibonacci, 1000); // Start the sequence after 1 second
// }
//
// printFibonacciTimeouts(10); // Call the function to print 10 Fibonacci numbers using timeouts

// 5.) The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?
// the "this" property no longer refers to the car object
//
//
//     let car = {
//         make: "Porsche",
//         model: '911',
//         year: 1964,
//         description() {
//
//             console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);}
//     };
// car.description(); //works
// // setTimeout(car.description, 200); //fails
// setTimeout(car.description.bind(car), 200);
// // a) Fix the setTimeout call by wrapping the call to car.description() inside a
// // function
//
// setTimeout(() => {
//     car.description();
// }, 200);
//
//
// // b) Change the year for the car by creating a clone of the original and overriding it
//
// let newCar = Object.assign({}, car);
// newCar.year = 1373;
//
//
// // c) Does the delayed description() call use the original values or the new values from
// // b)? Why?
//
// // orginal values it captres the original values of the car object when the function is created
//
// // d) Use bind to fix the description method so that it can be called from within
// // setTimeout without a wrapper function
//
// let boundDescription = car.description.bind(car);
// setTimeout(boundDescription, 200);
//
//
// // e) Change another property of the car by creating a clone and overriding it, and test that
// // setTimeout still uses the bound value from d)
//
// // let car2 = Object.assign({}, car);
// // car2.make = "Nissan";
// // let boundDescription = car.description.bind(car);
// // setTimeout(boundDescription, 200);

// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
//     function multiply(a, b) {
//     console.log( a * b );
// }
// multiply.delay(500)(5, 5);
// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.
// 6.) Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
//     function multiply(a, b) {
//     console.log( a * b );
// }
// multiply.delay(500)(5, 5);
// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters
// Function.prototype.delay = function (ms) {
//     const func = this;
//     return function (...args) {
//         setTimeout(() => func.apply(this, args), ms);};
// };
// function multiply(a, b) {
//     console.log(a * b);}
// multiply.delay(500)(5, 5);
//
// // b) Use apply to improve your solution so that delayed functions can take any number of
// // parameters
//
// Function.prototype.delay = function (ms) {
//     const func = this;
//     return function (...args) {
//         setTimeout(() => func.apply(this, args), ms);};
// };
// function multiply(a, b, c, d) {
//     console.log(a * b * c * d);
// }
// multiply.delay(500)(2, 3, 4, 5);
//
// // c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// // delay prototype function still works.
//
// Function.prototype.delay = function (ms) {
//     const func = this;
//     return function (...args) {
//         setTimeout(() => func.apply(this, args), ms);};
// };
// function multiply(a, b, c, d) {
//     console.log(a * b * c * d);
// }
// multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds

// 7.) In JavaScript, the toString method is used to convert an object to a string representation.
// // By default, when an object is converted to a String, it returns a string that looks something
// // like [object Object].
// // However, we can define our own toString methods for custom objects to provide a more
// // meaningful string representation.
//
// // function Person(name, age, gender) {
// //     this.name = name;
// //     this.age = age;
// //     this.gender = gender;}
// // const person1 = new Person('James Brown', 73, 'male')
// // console.log('person1: '+person1) //prints person1: [object Object]
//
// // a) Define a custom toString method for the Person object that will format and print
// // their details
//
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;}
// Person.prototype.toString = function () {
//     return `${this.name}, ${this.age} years old, ${this.gender}`;};
// const person1 = new Person('James Brown', 73, 'male');
// console.log('person1: ' + person1);
//
// // b) Test your method by creating 2 different people using the below constructor function
// // and printing them
//
// const person2 = new Person('Alice Johnson', 28, 'female');
// console.log('person2: ' + person2);
//
//
// // c) Create a new constructor function Student that uses call to inherit from Person and
// // add an extra property cohort
//
// function Student(name, age, gender, cohort) {
//     Person.call(this, name, age, gender);
//     this.cohort = cohort;}
// const student1 = new Student('John Smith', 20, 'male', 'Cohort A');
// console.log('student1: ' + student1);
//
//
// // d) Add a custom toString for Student objects that formats and prints their details. Test
// // with 2 students.
//
// Student.prototype.toString = function () {
//     return `${this.name}, ${this.age} years old, ${this.gender}, Cohort: ${this.cohort}`;};
// const student2 = new Student('Emma Roberts', 22, 'female', 'Cohort B');
// console.log('student2: ' + student2);

// 8.) The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.
//
//     class DigitalClock {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }
//     display() {
//         let date = new Date();
// //create 3 variables in one go using array destructuring
//         let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//             date.getSeconds()];
//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;
//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), 1000);
//     }
// }
// const myClock = new DigitalClock('my clock:')
// myClock.start()
//
// // a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// // parameter precision – the number of ms between 'ticks'. This precision parameter
// // should default to 1 second if not supplied.
//
//     class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//         super(prefix);
//         this.precision = precision;}
//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.precision);}
// }
//
// // b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// // parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// // should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// // default to 07:00 if not supplied.
//
// class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeupTime = '07:00') {
//         super(prefix);
//         this.wakeupTime = wakeupTime;}
//     display() {
//         const now = new Date();
//         const currentTime = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
//         super.display();
//         if (currentTime === this.wakeupTime) {
//             console.log('Wake Up');
//             this.stop();}
//     }
// }

// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.

//     a) Create a promise-based alternative randomDelay() that delays execution for a
//     random amount of time (between 1 and 20 seconds) and returns a promise we can use
//     via .then(), as in the starter code below
// function randomDelay() {
//     const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('There appears to have been a delay.');
//         }, delay);
//     });
// }
//
// randomDelay().then((message) => console.log(message));

// b) If the random delay is even, consider this a successful delay and resolve the promise,
//     and if the random number is odd, consider this a failure and reject it
// function randomDelay() {
//     const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay % 2 === 0) {
//                 resolve('Successful delay');
//             } else {
//                 reject('Failed delay');
//             }
//         }, delay);
//     });
// }
//
// randomDelay()
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));

// c) Update the testing code to catch rejected promises and print a different message
// function randomDelay() {
//     const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay % 2 === 0) {
//                 resolve('Successful delay');
//             } else {
//                 reject('Failed delay');
//             }
//         }, delay);
//     });
// }
//
// randomDelay()
//     .then((message) => console.log(message))
//     .catch((error) => console.error('Error:', error)); // Updated catch block message for rejected promises

// d) Try to update the then and catch messages to include the random delay value
// function randomDelay() {
//     const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay % 2 === 0) {
//                 resolve(`Successful delay of ${delay} ms`);
//             } else {
//                 reject(`Failed delay of ${delay} ms`);
//             }
//         }, delay);
//     });
// }
//
// randomDelay()
//     .then((message) => console.log(message))
//     .catch((error) => console.error('Error:', error)); // Updated catch block message for rejected promises


// 10.) Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
//     import fetch from 'node-fetch'
// globalThis.fetch = fetch
// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);
//         }
//
//     });
//     return fetchPromise;
// }
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
//
// // a) Write a new version of this function using async/await
//
// import fetch from 'node-fetch';
//
// async function fetchURLData(url) {
//     try {
//         const response = await fetch(url);
//         if (response.status === 200) {
//             const data = await response.json();
//             return data;
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);}
//     } catch (error) {
//         throw error;}
// }
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
//
//
// // b) Test both functions with valid and invalid URLs
//
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
// fetchURLData('https://jsonplaceholder.typicode.com/nonexistent')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
//
// // c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// // using Promise.all to combine the results.
//
// async function fetchAllURLData(urls) {
//     try {
//         const fetchPromises = urls.map(url => fetchURLData(url));
//         const data = await Promise.all(fetchPromises);
//         return data;
//     } catch (error) {
//         throw error;}
// }
// const urlList = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/nonexistent',];
// fetchAllURLData(urlList)
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));

// Mimic a pizza making procedure, by writing code that prints statements in the below order:
// Started preparing pizza ...
// Made the base
// Added the sauce and cheese
// Added the pizza toppings
// Cooked the pizza
// Pizza is ready

// Task 1: Create 6 JS functions which print the pizza processing
// statements and call those functions in sequence. Use a mix of
// function declarations, expressions and arrow functions.
// function preparePizza() {
//     console.log("Started preparing pizza ...");
// }
//
// // Function expression
// const makeBase = function() {
//     console.log("Made the base");
// };
//
// // Arrow function
// const addSauceAndCheese = () => {
//     console.log("Added the sauce and cheese");
// };
//
// // Function declaration
// function addToppings() {
//     console.log("Added the pizza toppings");
// }
//
// // Function expression
// const cookPizza = function() {
//     console.log("Cooked the pizza");
// };
//
// // Arrow function
// const pizzaReady = () => {
//     console.log("Pizza is ready");
// };
//
// // Call the functions in sequence
// preparePizza();
// makeBase();
// addSauceAndCheese();
// addToppings();
// cookPizza();
// pizzaReady();

//     Task 2: Make the functions asynchronous by using setTimeout with
//     different time durations, maintaining the right order.
// function preparePizza(callback) {
//     setTimeout(function () {
//         console.log("Started preparing pizza ...");
//         callback();
//     }, 1000);
// }
//
// const makeBase = (callback) => {
//     setTimeout(function () {
//         console.log("Made the base");
//         callback();
//     }, 1500);
// };
//
// const addSauceAndCheese = (callback) => {
//     setTimeout(function () {
//         console.log("Added the sauce and cheese");
//         callback();
//     }, 2000);
// };
//
// function addToppings(callback) {
//     setTimeout(function () {
//         console.log("Added the pizza toppings");
//         callback();
//     }, 1500);
// }
//
// const cookPizza = (callback) => {
//     setTimeout(function () {
//         console.log("Cooked the pizza");
//         callback();
//     }, 2000);
// };
//
// const pizzaReady = () => {
//     setTimeout(function () {
//         console.log("Pizza is ready");
//     }, 1000);
// };
//
// // Call the functions in sequence, maintaining the order
// preparePizza(function () {
//     makeBase(function () {
//         addSauceAndCheese(function () {
//             addToppings(function () {
//                 cookPizza(function () {
//                     pizzaReady();
//                 });
//             });
//         });
//     });
// });

//     Task 3: Modify the asynchronous functions to use Promises and
// achieve the required result.
// function preparePizza() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Started preparing pizza ...");
//             resolve();
//         }, 1000);
//     });
// }
//
// const makeBase = () => {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Made the base");
//             resolve();
//         }, 1500);
//     });
// };
//
// const addSauceAndCheese = () => {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Added the sauce and cheese");
//             resolve();
//         }, 2000);
//     });
// }
//
// function addToppings() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Added the pizza toppings");
//             resolve();
//         }, 1500);
//     });
// }
//
// const cookPizza = () => {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Cooked the pizza");
//             resolve();
//         }, 2000);
//     });
// }
//
// const pizzaReady = () => {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("Pizza is ready");
//             resolve();
//         }, 1000);
//     });
// }
//
// // Call the functions in sequence using Promises
// preparePizza()
//     .then(() => makeBase())
//     .then(() => addSauceAndCheese())
//     .then(() => addToppings())
//     .then(() => cookPizza())
//     .then(() => pizzaReady())
//     .catch((error) => console.error(error));

//     Task 4: Modify the functions to use async/await and achieve the
// required result.
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
//
// async function preparePizza() {
//     console.log("Started preparing pizza ...");
//     await delay(1000);
// }
//
// async function makeBase() {
//     console.log("Made the base");
//     await delay(1500);
// }
//
// async function addSauceAndCheese() {
//     console.log("Added the sauce and cheese");
//     await delay(2000);
// }
//
// async function addToppings() {
//     console.log("Added the pizza toppings");
//     await delay(1500);
// }
//
// async function cookPizza() {
//     console.log("Cooked the pizza");
//     await delay(2000);
// }
//
// async function pizzaReady() {
//     console.log("Pizza is ready");
// }
//
// // Create an async function to perform the steps in order
// async function makePizza() {
//     await preparePizza();
//     await makeBase();
//     await addSauceAndCheese();
//     await addToppings();
//     await cookPizza();
//     await pizzaReady();
// }
//
// // Call the main async function to prepare the pizza
// makePizza().catch((error) => console.error(error));
