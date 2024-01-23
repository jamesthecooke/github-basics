//  Conditional statements

// hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

//  if- else if - else

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// switch - case

let role = "moderator";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

//  for loop

for (let i = 0; i <= 5; i++) {
  console.log("Hello World", i);
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

//  while loop

let i = 0;

while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

//  do-while loop
// always execute at least once even if the condition is false

do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// for in loop
// loop over the properties of an object

const person = {
  name: "phil",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

// for of loop
// loop over the elements of an array

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// break and continue

let a = 0;

while (a <= 10) {
  // if (a === 5) break;
  if (a % 2 === 0) {
    a++;
    continue;
  }
  console.log(a);
  a++;
}

//  Exercise 1

//  write a function that takes two numbers and returns the maximum of the two

// function max(a, b) {
//     if (a > b) return a;
//     else return b;
// }

function max(a, b) {
  return a > b ? a : b;
}

console.log(max(5, 10));

// Exercise 2

// work out if a picture is landscape or portrait

let width = 600;
let height = 400;

const picture = width + height;

function isLandScape(width, height) {
  if (width > height) {
    return "Landscape";
  } else if (width < height) {
    return "Portrait";
  }
}

isLandScape(width, height);

// Exercise 3

// fizzBuzz
// if divisible by 3 => fizz
// if divisible by 5 => buzz
// if divisible by both 3 and 5 => fizzBuzz
// if not divisible by 3 or 5 => input
// if input is not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

// Exercise 4

// speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(82);

function checkSpeed(speed) {
  const speedLimit = 70;
  const mphPerPoint = 5;

  if (speed < speedLimit + mphPerPoint) {
    console.log("Ok");
    return;
  }
  if (speed > speedLimit + 12) {
    console.log("License Suspended");
    return;
  }
  if (speed >= speedLimit + mphPerPoint) {
    const points = Math.floor((speed - 70) / mphPerPoint);
    console.log("Points", points);
  } else {
    console.log("Ok");
  }
}

// Exercise 5

// even and odd numbers

showNumbers(5);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
  }
}

// Exercise 6

//  return all the properties of the object that are of type string

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") 
    console.log(key, obj[key]);
  }
}
