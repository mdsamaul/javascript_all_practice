// practice problem 2
// Harry's mom gave him money and asked him to bye some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.
const prompt = require ("prompt-sync")();

var inputTakaOfHarrysMom;
var orangesAndApplesPrice;
var returnMoney;
orangesAndApplesPrice = 700;


inputTakaOfHarrysMom = prompt ("Harris mother gave the money = ");
console.log(inputTakaOfHarrysMom , " is the taka harry's mom gaves him.");
returnMoney = inputTakaOfHarrysMom - orangesAndApplesPrice;
console.log("The shopkeeper" , returnMoney , " will refund the money.");


console.log("===========******************===========");
console.log("===========******************===========");
// -----------practice problem 2
// Write a program to calculate the average marks of Mathematice, Biology, Chemistry, Physics, and Bangla of a student
var mathMark;
var biologyMark;
var chemistryMark;
var physicsMark;
var banglaMark;
var totallMarks;
var averageMarks;
var firstNameLastName;

console.log("Enter the input numbers of the following five subjects respectively!");
// first input 

mathMark = prompt("01. Enter the Mathematice Marks: ");
biologyMark = prompt("02. Enter the Biologgy Marks : ");
chemistryMark = prompt("03. Enter the Chemistry Marks : ");
physicsMark = prompt ("04. Enter the Physics Marks : " );
banglaMark =prompt("05. Enter the Bangla Marks : " );

console.log("===========******************===========");

console.log("=========== YOUR MARKS LIST IS===========");

console.log( "01. Mathematice Marks is = ", mathMark);
console.log("02. Biologgy Marks is = " , biologyMark);
console.log("03. Chemistry Marks is = " , chemistryMark);
console.log("04.Physics Marks is = " , physicsMark);
console.log("05.Bangla Marks is = " , banglaMark);
// string to intger conversion
mathMark= parseFloat(mathMark);
biologyMark= parseFloat(biologyMark);
chemistryMark = parseFloat(chemistryMark);
physicsMark = parseFloat (physicsMark);
banglaMark = parseFloat(banglaMark);
console.log("===========******************===========");
// YOUR TOTALL MARKS IS
console.log("=========== YOUR TOTALL MARKS IS===========");
totallMarks = mathMark + biologyMark + chemistryMark + physicsMark + banglaMark;
totallMarks = totallMarks.toFixed(2);
console.log( "Your Totall Marks is = " , totallMarks);
console.log("===========******************===========");
 
// YOUR Average MARKS IS
console.log("=========== YOUR Average MARKS IS===========");
averageMarks = totallMarks / 5;
averageMarks = averageMarks.toFixed(2);
console.log( "Your Average Marks is = " , averageMarks);
console.log("===========******************===========");


console.log("===========******************===========");
console.log("===========******************===========");
// -----------practice problem 3
// John's teacher gave him Two variables. Each variable contains a string.John's teacher asked him to combine these two sttings and print them in one line.help john Write the program.

var firstName;
var lastName;
firstName = prompt("Enter Your First Name : ");
// console.log(firstName);
lastName = prompt("Enter Your Last Name : ");
// console.log =(lastName);

console.log("===========******************===========");
console.log("===========*******Two string print in One Line*******===========");

firstNameLastName = firstName + " " + lastName;
console.log (firstNameLastName);

console.log("===========******************===========");
console.log("===========******************===========");
