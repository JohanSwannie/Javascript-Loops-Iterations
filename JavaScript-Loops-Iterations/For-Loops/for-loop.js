// EXAMPLE 1

const array1 = ["BMW", "Mercedes", "Audi"];

const array2 = ["Mary", "Fred", "Gary"];

let statement = "";

for (let i = 0; i < array1.length; i++) {
  statement += `${array2[i]} drives a ${array1[i]} </br>`;
}

document.getElementById("for-loop1").innerHTML = statement;

// EXAMPLE 2

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
