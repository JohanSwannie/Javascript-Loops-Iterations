// EXAMPLE 1 - For Loop

const array1 = ["BMW", "Mercedes", "Audi"];

const array2 = ["Mary", "Fred", "Gary"];

let statement = "";

for (let i = 0; i < array1.length; i++) {
  statement += `${array2[i]} drives a ${array1[i]} </br>`;
}

document.getElementById("for-loop1").innerHTML = statement;

// EXAMPLE 2 - For loop

const array3 = [12, 17, 8, 22, 18, 14, 29, 4, 6];

let addition = 0;
let multiplication = 1;
let average = 0;
let concatString = "";

for (let j = 0; j < array3.length; j++) {
  addition += array3[j];
  multiplication *= array3[j];
}

average = (addition / array3.length).toFixed(2);

concatString = `Sum of Array is ${addition} </br>Multiplication of Array is ${multiplication} </br>Average of Array is ${average}`;

document.getElementById("for-loop2").innerHTML = concatString;

// EXAMPLE 1 - For of loop

const array4 = [17, 33, 10, 21, 28];

let sumOfAll = 0;

for (const value of array4) {
  sumOfAll += value;
}

document.getElementById(
  "for-of-loop"
).innerHTML = `The sum of the values in array4 is ${sumOfAll}`;

// EXAMPLE 1 For in loop

const array5 = [
  {
    name: "John",
    age: 55,
    career: "Civil Engineer",
  },
  {
    name: "Pete",
    age: 45,
    career: "Network Engineer",
  },
  {
    name: "Mary",
    age: 56,
    career: "Software Engineer",
  },
];

let personsString = "";

for (const key in array5) {
  if (array5.hasOwnProperty.call(array5, key)) {
    const element = array5[key];
    personsString += `${element.name} is ${element.age} years old and is a ${element.career} </br>`;
  }
}

document.getElementById("for-in-loop").innerHTML = personsString;

// EXAMPLE 1 - Do While Loop

let array6 = [25, 45, 65, 20, 25, 10];

let counter = 0;

sumOfFirstThree = 0;

do {
  sumOfFirstThree += array6[counter];
  counter++;
} while (counter < 3);

document.getElementById(
  "do-while-loop"
).innerHTML = `The sum of the first three values in array6 is ${sumOfFirstThree}`;

// Example 1 - While Loop

const array7 = [
  "Luke",
  "Jonathan",
  "Mary",
  "Don",
  "Matthew",
  "Jason",
  "Andrew",
  "Pete",
  "Anette",
  "Jenny",
  "Bobby",
  "Bianca",
  "Richard",
  "Michael",
  "Malcolm",
  "Craig",
  "Steve",
  "Marlene",
  "Tessa",
  "John",
  "Louis",
  "Larissa",
  "Ted",
  "Fred",
  "Mark",
  "Sarah",
];

let x = 0;

let invitedString = "The following guests are invited - ";

while (x < array7.length) {
  if (array7[x].length < 5) {
    if (x === array7.length - 1) {
      invitedString += `and ${array7[x]}`;
    } else {
      invitedString += `, ${array7[x]}`;
    }
  }
  x++;
}

document.getElementById("while-loop").innerHTML = invitedString;
