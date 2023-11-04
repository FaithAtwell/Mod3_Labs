// //a) function expression syntax:
// const getGreetingA = function(name) {
//     return 'Hello ' + name + '!';
// }

// //b) arrow function syntax:
// const getGreetingB = (name) => 'Hello ' + name + '!';
// console.log(getGreeting('Samwise Gamgee'))
// console.log(getGreetingA('Samwise Gamgee'))
// console.log(getGreetingB('Samwise Gamgee'))

// 6. a) Complete the inigo object by adding a lastName property and including it in the
// greeting.

//     b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.

//     c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
//     const westley = {
//     name: 'Westley',
//     numFingers: 5
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }
//
// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName}
// ${this.lastName}. `;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase: (person) => person.numFingers == 6 ?
//         'You killed my father. Prepare to die.' : 'Nice to meet you.'
// }
// inigo.greeting(westley)
// inigo.greeting(rugen)

// 7. The following object represents a basketball game and keeps track of the score as the
// game progresses.
//     a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.
//     const basketballGame = {
//     score: 0,
//     fouls: 0,
//     freeThrow() {
//         this.score++;
//         return this;
//     },
//     basket() {
//         this.score += 2;
//         return this;
//     },
//     threePointer() {
//         this.score += 3;
//         return this;
//     },
//     foul() {
//         this.fouls++;
//         return this;
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.score+' ('+this.fouls+' fouls).');
//         return this;
//     },
//     fullTime() {
//         console.log('Final score is '+this.score+' ('+this.fouls+' fouls).');
//
//         return this;
//     }
// }
// //modify each of the above object methods to enable function chaining as below:
// basketballGame.basket().foul().freeThrow().freeThrow().basket().threePointer().halfTime().
// basket().basket().foul().freeThrow().threePointer().fullTime();

// 8. The object below represents a single city.
//     a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
//     b) Create a new object for a different city with different properties and call your function
// again with the new object.
//
// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }
// const melbourne = {
//     name: 'Melbourne',
//     population: '5.64 million',
//     state: 'VIC',
//     elevation: '31 m',
//     area: '9,992 km2'
// }
// function printCityProps(cityObj) {
//     for (cityProp in cityObj) {
//         console.log(cityProp + ' = ' + cityObj[cityProp])
//     }
// }
// printCityProps(sydney)
// printCityProps(melbourne)

// 9. Use the following variables to understand how JavaScript stores objects by reference.
//     a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
//
//     e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent
// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = teamSports;
// moreSports.push('Basketball');
// moreSports.unshift('Rugby')
// let dog1 = 'Bingo';
// let dog2 = dog1;
// dog2 = 'Bluey';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = cat1;
// cat2.name = 'Snuggles'
// console.log(teamSports) //has changed - because arrays are stored by reference, and
// moreSports points to the same memory location
// console.log(dog1) //no change - because primitives like strings are stored by value, and
// the values are different
// console.log(cat1) //has changed - because objects are stored by reference, and cat2
// points to the same memory location
// let moreSports2 = [...teamSports]
// moreSports2.push('Netball')
// console.log(teamSports) //doesn't include Netball because moreSports2 was created using a
// shallow clone
// let cat3 = {...cat1}
// cat3.name = 'Humperdinck'
// console.log(cat1) // still set to Snuggles because cat3 was created using a clone that
// references a different memory location

// 10. The following constructor function creates a new Person object with the given name and
// age values.
//     a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
//     e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.
//
//     function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.canDrive = () => this.age >= 16
// }
// let person1 = new Person('John', 30)
// let person2 = new Person('Jane', 24)
// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     canDrive() {
//         return this.age >= 16;
//     }
// }
// let person3 = new Person('James', 10)
// console.log(person1)
// console.log(person2)
// console.log(person3)
// if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and is old enough
// to drive')
// if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and is old enough
// to drive')
// if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and is old enough