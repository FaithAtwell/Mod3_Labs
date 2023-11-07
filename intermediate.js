// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
//     different strings.
//
// function ucFirstLetters(inputString) {
//     const words = inputString.split(' '); // Split the string into an array of words
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Capitalize the first letter of each word
//     return capitalizedWords.join(' ');}
// console.log(ucFirstLetters("los angeles"));
// console.log(ucFirstLetters("new york city"));
// console.log(ucFirstLetters("san francisco bay area"))

// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
//     ellipsis (...) added to the end if it was too long, or the original text otherwise.
// function truncate(str, max) {
//     if (str.length > max) {
//         return str.substring(0, max - 3) + '...'; // Truncate and add ellipsis
//     } else {
//         return str; // Return the original string
//     }
// }
//
// // Example usage:
// console.log(truncate('This text will be truncated if it is too long', 25));

//     b) Write another variant of the truncate function that uses a conditional operator.
//function truncate(str, max) {
//     return str.length > max ? str.substring(0, max - 3) + '...' : str;
// }
//
// // Example usage:
// console.log(truncate('This text will be truncated if it is too long', 25));

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:
//
// https://developer.mozilla.org/en-
//     US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// const animals = ['Tiger', 'Giraffe'];
// console.log(animals);
//
// animals.push('Elephant', 'Lion');
//
// console.log(animals);

// b) Add 2 new values to the beginning
// const animals = ['Tiger', 'Giraffe'];
// console.log(animals);
//
// animals.unshift('Elephant', 'Lion');
//
// console.log(animals);

// c) Sort the values alphabetically
// const animals = ['Tiger', 'Giraffe'];
// console.log(animals);
//
// animals.unshift('Elephant', 'Lion');
//
// animals.sort();
//
// console.log(animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// function replaceMiddleAnimal(newValue) {
//     const middleIndex = Math.floor(animals.length / 2);
//
//     if (animals.length % 2 !== 0) {
//         animals[middleIndex] = newValue;
//     } else {
//         animals.splice(middleIndex - 1, 1, newValue);
//     }
// }
//
// const animals = ['Tiger', 'Giraffe'];
// console.log(animals);
//
// animals.unshift('Elephant', 'Lion');
//
// animals.sort();
//
// console.log(animals);
//
// replaceMiddleAnimal('Monkey');
//
// console.log(animals);

//     e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
// const animals = ['Tiger', 'Giraffe', 'Elephant', 'Lion'];
//
// function replaceMiddleAnimal(newValue) {
//     const middleIndex = Math.floor(animals.length / 2);
//
//     if (animals.length % 2 !== 0) {
//
//         animals[middleIndex] = newValue;
//     } else {
//         animals.splice(middleIndex - 1, 1, newValue);
//     }
// }
//
// console.log(animals);
//
// replaceMiddleAnimal('Monkey');
//
// console.log(animals);
//
// function findMatchingAnimals(beginsWith) {
//     const lowercaseBeginsWith = beginsWith.toLowerCase();
//     return animals.filter(animal => animal.toLowerCase().startsWith(lowercaseBeginsWith));
// }
//
// const beginsWith = 't';
// const matchingAnimals = findMatchingAnimals(beginsWith);
//
// console.log(matchingAnimals);


// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
//     The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
//     b) Create variants of the camelCase function that use different types of for loops, and
//     c) with and without the conditional operator.
//
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display
// function camelCase(cssProp) {
//     let result = '';
//     let capitalizeNext = false;
//     for (let i = 0; i < cssProp.length; i++) {
//         const char = cssProp[i];
//         if (char === '-') {
//             capitalizeNext = true;
//         } else if (capitalizeNext) {
//             result += char.toUpperCase();
//             capitalizeNext = false;
//         } else {
//             result += char;}
//     }
//     return result;
// }
// console.log(camelCase('margin-left')); // 'marginLeft'
// console.log(camelCase('background-image')); // 'backgroundImage'
// console.log(camelCase('display')); // 'display'

// b) Variant of the camelCase function using a for loop and without the conditional operator:
// function camelCase(cssProp) {
//     let result = '';
//     let capitalizeNext = false;
//     for (let i = 0; i < cssProp.length; i++) {
//         const char = cssProp[i];
//         if (char === '-') {
//             capitalizeNext = true;
//         } else {
//             if (capitalizeNext) {
//                 result += char.toUpperCase();
//             } else {
//                 result += char;
//             }
//             capitalizeNext = false;
//         }
//     }
//     return result;
// }
//
// console.log(camelCase('margin-left')); // 'marginLeft'
// console.log(camelCase('background-image')); // 'backgroundImage'
// console.log(camelCase('display')); // 'display'

// c) Variant of the camelCase function using a for...of loop and the conditional operator:
// function camelCase(cssProp) {
//     let result = '';
//     let capitalizeNext = false;
//     for (const char of cssProp) {
//         if (char === '-') {
//             capitalizeNext = true;
//         } else {
//             result += capitalizeNext ? char.toUpperCase() : char;
//             capitalizeNext = false;
//         }
//     }
//     return result;
// }
//
// console.log(camelCase('margin-left')); // 'marginLeft'
// console.log(camelCase('background-image')); // 'backgroundImage'
// console.log(camelCase('display')); // 'display'


// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
//     let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
//     let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
//     c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
//
//     d) (Extension) Extend the above function to include a fourth argument numDecimals
//     which allows the operation to support different amounts of decimal places from 1 to 10.
//     HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
//         different values as well as the below:
// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true
// a) Explain why the above code returns the wrong answer
// floats are not represented exactly in binary, so there is a rounding error when adding them together.
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// function currencyAddition(float1, float2) {
//     return parseFloat((float1 + float2).toFixed(2));}
// console.log(currencyAddition(0.20, 0.10));
// c) Create a function currencyOperation(float1, float2, operation) which
// function currencyOperation(float1, float2, operation) {
//     switch (operation) {
//         case '+':
//             return parseFloat((float1 + float2).toFixed(2));
//         case '-':
//             return parseFloat((float1 - float2).toFixed(2));
//         case '*':
//             return parseFloat((float1 * float2).toFixed(2));
//         case '/':
//             return parseFloat((float1 / float2).toFixed(2));
//         default:
//             return NaN;}
// }
// console.log(currencyOperation(0.1, 0.2, '+'));
// d) (Extension) Extend the above function to include a fourth argument numDecimals
// function currencyOperation(float1, float2, operation, numDecimals = 3) {
//     const multiplier = Math.pow(10, numDecimals);
//     switch (operation) {
//         case '+':
//             return parseFloat(((float1 + float2) * multiplier).toFixed(numDecimals));
//         case '-':
//             return parseFloat(((float1 - float2) * multiplier).toFixed(numDecimals));
//         case '*':
//             return parseFloat(((float1 * float2) * multiplier).toFixed(numDecimals));
//         case '/':
//             return parseFloat(((float1 / float2) * multiplier).toFixed(numDecimals));
//         default:
//             return NaN;}
// }
// console.log(currencyOperation(0.1, 0.2, '+', 1));
// console.log(currencyOperation(0.1, 0.2, '+', 3));
// console.log(currencyOperation(0.1, 0.2, '+', 4));

// 6. ) Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
// function unique(duplicatesArray) {
//     return [...new Set(duplicatesArray)];}
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
// console.log(unique(colours));
// console.log(unique(testScores));

// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
//
//     const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];
// // a) Write a function getBookTitle(bookId) that uses the find function to return the
// // title of the book object with the matching id.
// //     b) Write a function getOldBooks() that uses the filter function to return all book
// // objects written before 1950.
// // c) Write a function addGenre() that uses the map function to add a new genre property
// // to all of the above books, with the value ‘classic’.
// // d) (Extension) Write a function getTitles(authorInitial) that uses map and
// // filter together to return an array of book titles for books written by authors whose
// // names start with authorInitial.
// //     e) (Extension) Write a function latestBook() that uses find and forEach to get the
// // book with the most recent publication date.
// // a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
// function getBookTitle(bookId) {
//     const book = books.find((book) => book.id === bookId);
//     return book ? book.title : 'Book not found';}
// console.log(getBookTitle(2)); // 'To Kill a Mockingbird'
// console.log(getBookTitle(6)); // 'Book not found'
//
// // b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
//
// function getOldBooks() {
//     return books.filter((book) => book.year < 1950);}
// console.log(getOldBooks());
//
// // c) Write a function addGenre() that uses the map function to add a new genre property to all
// // of the above books, with the value 'classic'.
//
//     function addGenre() {
//     return books.map((book) => ({ ...book, genre: 'classic' }));}
// console.log(addGenre());
//
// // d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to
// // return an array of book titles for books written by authors whose names start with authorInitial.
//
//     function getTitles(authorInitial) {
//     return books
//         .filter((book) => book.author.startsWith(authorInitial))
//         .map((book) => book.title);}
// console.log(getTitles('G')); // ['The Great Gatsby', 'George Orwell']
//
// // e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
//
//     function latestBook() {
//     let latest = books[0];
//     books.forEach((book) => {
//         if (book.year > latest.year) {
//             latest = book;}
//     });
//     return latest;}
// console.log(latestBook()); // The book with the most recent publication date

// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// // a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// // b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// // c) Update the phone number for Caroline
// // d) Write a function printPhoneBook(contacts) that prints the names and phone
// // numbers in the given Map
// // e) Combine the contents of the two individual Maps into a single phoneBook Map
// // f) Print out the full list of names in the combined phone book
//
// // a) Create a new phoneBookDEF Map to store names beginning with D, E, or F:
//
// const phoneBookDEF = new Map();
//
// // b) Initialize the contents of phoneBookDEF by passing in an array of keys/values:
//
// phoneBookDEF.set('David', '0488112233');
// phoneBookDEF.set('Emily', '0433223344');
// phoneBookDEF.set('Fiona', '0466334455');
//
// // c) Update the phone number for Caroline in phoneBookABC:
//
// phoneBookABC.set('Caroline', '0477445566');
//
// // d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map:
//
// function printPhoneBook(contacts) {
//     for (let [name, phoneNumber] of contacts) {
//         console.log(`${name}: ${phoneNumber}`);}
// }
// console.log('Phone Book ABC:');
// printPhoneBook(phoneBookABC);
// console.log('Phone Book DEF:');
// printPhoneBook(phoneBookDEF);
//
// // e) Combine the contents of the two individual Maps into a single phoneBook Map:
//
// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
//
// // f) Print out the full list of names in the combined phone book:
//
// console.log('Combined Phone Book:');
// for (let name of phoneBook.keys()) {
//     console.log(name);}

//     9. Given the below salaries object, perform the following tasks.
// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
// };

// //     a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// let salaries = {
//     "Timothy": 35000,
//     "David": 25000,
//     "Mary": 55000,
//     "Christina": 75000,
//     "James": 43000
// };
//
// function sumSalaries(salaries) {
//     let totalSalaries = 0;
//     for (let salary of Object.values(salaries)) {
//         totalSalaries += salary;
//     }
//     return totalSalaries;
// }
//
// console.log("Total of all salaries:", sumSalaries(salaries));

// //     b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
// function topEarner(salaries) {
//     let topSalary = 0;
//     let topEarner = '';
//
//     for (let name in salaries) {
//         if (salaries[name] > topSalary) {
//             topSalary = salaries[name];
//             topEarner = name;
//         }
//     }
//     return topEarner;
// }
//
// console.log(topEarner(salaries) + ' earns the most');

//  // 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
//     const today = new Date();
//     console.log('Current time is ' + today.toLocaleTimeString())
//
//     console.log(today.getHours() + ' hours have passed so far today')

// //     a) Print the total number of minutes that have passed so far today
// console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today')
//

// //     b) Print the total number of seconds that have passed so far today
// console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) + 'seconds have passed today')

//     c) Calculate and print your age as: 'I am x years, y months and z days old'
// const birthday = new Data('1999-01-01')
// let days = today.getDate()-birthday.getDate();
// let months = today.getMonth() - birthday.getMonth();
// let years = today.getFullYear() - birthday.getFullYear();
// console.log(`I am ${years} years, ${months} months and ${days} days old`)
//

//    // d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
// function daysInBetween(date1, date2) {
//     let differenceMS = date2 - date1;
//     let millisecondsPerDay = 24 * 60 * 60 * 1000;
//     let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
//     return Math.abs(differenceDays);
// }
// const birthday = new Date('1990-05-15');
// const today = new Date();
// console.log(`Days between ${birthday.toLocaleDateString()} and ${today.toLocaleDateString()}: ${daysInBetween(birthday, today)}`);
// console.log(`Days between 2023-01-01 and 2022-01-15: ${daysInBetween(new Date('2023-01-01'), new Date('2022-01-15'))}`);
