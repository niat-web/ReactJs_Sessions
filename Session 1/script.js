// =========================
// JavaScript Connected
// =========================

console.log("JavaScript Connected!");

console.log("Hello");
console.log(100);
console.log(true);


// =========================
// Variables
// =========================

let movie = "Avatar";
let age = 25;
let isLoggedIn = true;

console.log(movie);
console.log(age);
console.log(isLoggedIn);


// let example

movie = "Batman";

console.log(movie);


// const example

const pi = 3.14;

// pi = 4;   // Uncomment to demonstrate error


// var example

var city = "Hyderabad";

console.log(city);


// =========================
// Template Literals
// =========================

const movieName = "Avatar";

console.log("Movie : " + movieName);

console.log(`Movie : ${movieName}`);

const student = "Alex";
const course = "JavaScript";

console.log(`${student} is learning ${course}`);


// =========================
// Functions
// =========================

function greet(name){
    console.log(`Welcome ${name}`);
}

greet("Alice");
greet("Bob");


// =========================
// Arrow Function
// =========================

const introduce = (name)=>{
    console.log(`My name is ${name}`);
};

introduce("Emma");


// =========================
// DOM Selection
// =========================

const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

console.log(input);
console.log(button);
console.log(result);


// =========================
// Event Listener
// =========================

button.addEventListener("click",()=>{

    const movie = input.value;

    console.log(movie);

    result.textContent = `Searching for ${movie}...`;

});
