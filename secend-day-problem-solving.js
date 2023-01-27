const prompt =require ("prompt-sync")();
console.log("==========Practice Problem 1==========");
console.log("You are given an array : ");
console.log("['Apple', 'Banana', 'Orange']");
console.log("a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.");
console.log("b) Remove ‘Orange’ and add ‘Watermelon’.");

var fruits;
var fruitsIndex;
var newFruits;



console.log("=======Fruits List=============");
fruits =['Apple', 'Banana', 'Orange'];
console.log(fruits);
console.log("===============================");

console.log("=======Fruits Apple Index=======");
fruitsIndex = fruits.indexOf('Apple');
console.log("Index find of Apple " , fruitsIndex);
console.log("===============================");

console.log("=======Fruits Banana Index=======");
fruitsIndex = fruits.indexOf('Banana');
console.log("Index find of Banana " , fruitsIndex);
console.log("===============================");

console.log("=======Fruits Orange Index=======");
fruitsIndex = fruits.indexOf('Orange');
console.log("Index find of Orange " , fruitsIndex);

console.log("===============================");

console.log("=======Fruits Leangth=======");
console.log("Fruits Leangth", fruits.length);
console.log("===============================");

console.log("=======Fruits index==============");

console.log(fruits[0]);
console.log("======================================");
console.log(fruits[1]);
console.log("======================================");
console.log(fruits[2]);
console.log("======================================");

console.log("=======Fruits assing in a variable Element=======");
newFruits = fruits[1];
console.log(newFruits);

console.log("======================================");

console.log("=======Fruits set Element value by Index=======");
fruits [2] = "Watermelon";
console.log(fruits);
console.log("=======Fruits set Element value by Index=======");

fruits [2] = "Orange";
console.log(fruits);
console.log("======================================");

console.log("=======Fruits POP Remove Orange=======");
fruits.pop();
console.log(fruits);

console.log("======================================");

console.log("=======Fruits PUSH Added Orange=======");
fruits.push("Watermelon");
console.log(fruits);
// Practice Problem 2
console.log("===========Practice Problem 2===========");
console.log("You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is");
console.log("80 or above A grade");
console.log("60 or above B grade");
console.log("50 or above C grade");
console.log("40 or above D grade");
console.log("39 or less => F grade");
console.log("=======Write a program to find your and your friends’ grades using if-else.======");
console.log('-------------------------------');
// mark input 
var inputExamResult;
var friendList = ['Samaul', 'Tom', 'Jane', 'Peter'];
var inputFriendName;
console.log("Your Friend " , friendList);
inputFriendName = prompt("Type Your Friend Name : ");
if(friendList[0] === inputFriendName){
    console.log("Your Friend " , inputFriendName);
    inputExamResult =prompt('Enter Your Mark : ');
    if(inputExamResult >= 80){
        console.log("congratulations Your Result is A grade" );
        console.log("and Your Marks ", inputExamResult );
    }else if(inputExamResult >= 60){
        console.log("congratulations Your Result is B grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 50){
        console.log("congratulations Your Result is C grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 40){
        console.log("congratulations Your Result is D grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult <= 39 && inputExamResult >=0){
        console.log("SORRY you failed. Your Result is F grade !! Try again" );
        console.log("and Your Marks ", inputExamResult );
    }
    
    else{
        console.log("Input Invalid");
    }
    
}else if(friendList[1] === inputFriendName){
    console.log("Your Friend " , inputFriendName);
    inputExamResult =prompt('Enter Your Mark : ');
    if(inputExamResult >= 80){
        console.log("congratulations Your Result is A grade" );
        console.log("and Your Marks ", inputExamResult );
    }else if(inputExamResult >= 60){
        console.log("congratulations Your Result is B grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 50){
        console.log("congratulations Your Result is C grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 40){
        console.log("congratulations Your Result is D grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult <= 39 && inputExamResult >=0){
        console.log("SORRY you failed. Your Result is F grade !! Try again" );
        console.log("and Your Marks ", inputExamResult );
    }
    
    else{
        console.log("Input Invalid");
    }
}else if(friendList[2] === inputFriendName){
    console.log("Your Friend " , inputFriendName);
    inputExamResult =prompt('Enter Your Mark : ');
    if(inputExamResult >= 80){
        console.log("congratulations Your Result is A grade" );
        console.log("and Your Marks ", inputExamResult );
    }else if(inputExamResult >= 60){
        console.log("congratulations Your Result is B grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 50){
        console.log("congratulations Your Result is C grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 40){
        console.log("congratulations Your Result is D grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult <= 39 && inputExamResult >=0){
        console.log("SORRY you failed. Your Result is F grade !! Try again" );
        console.log("and Your Marks ", inputExamResult );
    }
    
    else{
        console.log("Input Invalid");
    }
}else if(friendList[3] === inputFriendName){
    console.log("Your Friend " , inputFriendName);
    inputExamResult =prompt('Enter Your Mark : ');
    if(inputExamResult >= 80){
        console.log("congratulations Your Result is A grade" );
        console.log("and Your Marks ", inputExamResult );
    }else if(inputExamResult >= 60){
        console.log("congratulations Your Result is B grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 50){
        console.log("congratulations Your Result is C grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult >= 40){
        console.log("congratulations Your Result is D grade" );
        console.log("and Your Marks ", inputExamResult );
    }
    else if(inputExamResult <= 39 && inputExamResult >=0){
        console.log("SORRY you failed. Your Result is F grade !! Try again" );
        console.log("and Your Marks ", inputExamResult );
    }   
    else{
        console.log("Input Invalid");
    }
}else{
    console.log("Invalid Name");
}

console.log("================================");
// Practice Problem 3
console.log("===========Practice Problem 3===========");
console.log("1. You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.");
console.log("2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.");
console.log("Isosceles => two sides are equal");

// input user number 
var firstLargestNumber;
var secendLargestNumber;
var thirdLargestNumber;
firstLargestNumber = prompt("Enter the First Number : "); 
secendLargestNumber = prompt("Enter the Secend Number : "); 
thirdLargestNumber = prompt("Enter the Third Number : "); 

if(firstLargestNumber > secendLargestNumber && firstLargestNumber > thirdLargestNumber){
    console.log("Largest Number Is " , firstLargestNumber);
}
else if(secendLargestNumber > firstLargestNumber && secendLargestNumber > thirdLargestNumber){
    console.log("Largest Number Is " , secendLargestNumber);
}else{
    console.log("Largest Number Is " , thirdLargestNumber);
}

console.log("================================");
console.log("================================");
console.log("================================");