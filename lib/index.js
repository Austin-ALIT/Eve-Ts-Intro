"use strict";
/* Commands run in terminal:
    npm init -y
    npm i typescript
    npx tsc --init --rootdir src --outdir lib
    npx tsc --watch
    npm i ts-node
    npx ts-node src\index.ts // to run the program
*/
// In this assignment, you will practice working with objects, functions, classes, and interfaces in TypeScript. 
// Follow the steps below to complete the assignment:
// ============================== Working with Objects: ================================
// Create an object named person with properties name (string), age (number), and email (string).
// Use type annotations to specify the types of the properties explicitly.
const person = {
    name: "",
    age: 0,
    email: ""
};
// Write a function called printPersonDetails that takes a person object as a parameter and logs its properties to the console.
function printPersonDetails(iperson) {
    for (let [key, value] of Object.entries(iperson))
        console.log(`key: ${key}, Value: ${value}`);
}
;
// Call the printPersonDetails function and pass the person object as an argument.
printPersonDetails(person); // -> key: name, Value: ...
// =============================== Working with Functions: ===============================
// Declare a function named calculateArea that calculates and returns the area of a circle.
// The function should take a parameter named radius of type number.
// Use type annotations to specify the return type of the function explicitly as number.
function calculateArea(radius) {
    return (2 * Math.PI * radius);
}
// Test the calculateArea function by calling it with different values for radius and logging the results to the console.
console.log(calculateArea(2)); // -> 12.566370614359172
console.log(calculateArea(6)); // -> 37.69911184307752
console.log(calculateArea(27)); // -> 169.64600329384882
// ============================== Working with Classes: ====================================
// Define a class named Car with properties make (string), model (string), and year (number).
// Use access modifiers to make the properties private.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement a method named getCarDetails that returns a string containing the car's make, model, and year.
    getCarDetails() {
        return (`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
// Create an instance of the Car class and call the getCarDetails method. Log the result to the console.
let objCar = new Car("Mercedes", "Amg", 2012);
console.log(objCar.getCarDetails()); // -> Make: Mercedes, Model: Amg, Year: 2012
// Implement the interface in a class named Dog.
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Add a method called bark to the Dog class that logs a bark sound to the console.
    bark() {
        console.log("bark!");
    }
}
// Create an instance of the Dog class and call the bark method.
let objDog = new Dog("Spot", 13);
objDog.bark(); // -> Expected: Bark!
// ================================ Bonus Task - Using Inheritance: =================================
// Create a subclass of Car named SportsCar.
class SportsCar extends Car {
    // Hint: super
    // Add an additional property to the SportsCar class named topSpeed (number).
    constructor(make, model, year, topSpeed) {
        super(make, model, year);
        this.topSpeed = topSpeed;
        this.topSpeed = topSpeed;
    }
    // Implement a method in SportsCar named displayCarDetails that includes the top speed in the car's details.
    displayCarDetails() {
        console.log((`${super.getCarDetails()}, Top Speed: ${this.topSpeed}kph`));
    }
}
// Create an instance of SportsCar and call the displayCarDetails method.
let objSports = new SportsCar("Cody", "Coyote", 1987, 160);
objSports.displayCarDetails(); // -> Make: Cody, Model: Coyote, Year: 1987, Top Speed: 160kph
// Remember to use proper type annotations, access modifiers, and adhere to the principles of encapsulation and modularity. 
// Test your code thoroughly to ensure it runs without any errors or warnings.
