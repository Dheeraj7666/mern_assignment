/*
Question 1: Data Types and Variables
Problem: Write a program that defines and logs different data types. The program should:
*/

let str = "Hello coder";
    //variable str is declared and assigned the value "Hello coder".
let num = 99;       
    //variable num is declared and assigned the value 99
let con = true;    
    //variable con is declared and assigned the value true.
let obj = { name: "Dheeraj", roll_no:61 }; 
    //variable obj is declared and assigned an object with properties name and roll_no.
let arr1 = [1, 2, 3, 4, 5];
    //variable arr1 is declared and assigned an array containing the values [1, 2, 3, 4, 5].

console.log("Value:",str, "type:", typeof str); //output:Value: Hello coder type: string
console.log("Value:",num, "type:", typeof num); //output:Value: 99 type: number
console.log("Value:",con, "type:", typeof con); //output:Value: 99 type: number
console.log("Value:",obj, "type:", typeof obj); //output:Value: { name: 'Dheeraj', roll_no: 61 } type: object
console.log("Value:",arr1,"type:", typeof arr1);//output:Value: [ 1, 2, 3, 4, 5 ] type: object


/* Question 2: Operators and Expressions
Problem: Write a program that performs basic arithmetic operations. The program should:*/

let num1 = parseFloat(prompt("Enter the first number:")); 
//take the number from the prompt and store in the num1 variable
let num2 = parseFloat(prompt("Enter the second number:"));
//take the number from the prompt and store in the num2 variable

// Perform arithmetic operations
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let quotient;

// Check for division by zero
if (num2 == 0) { 
    quotient = "denominator is never be zero";
} else {
    quotient = num1 / num2;
}
console.log(`Addition: ${add}`);               // Display the sum of num1 and num2
console.log(`Subtraction: ${sub}`);            // Display the difference between num1 and num2
console.log(`multiplication: ${mul}`);         // Display the product of num1 and num2
console.log(`Quotient: ${quotient}`);          // Display the quotient of num1 and num2 or error message

/*Question 3: Conditional Statements
Problem: Create a program that checks if a number is positive, negative, or zero. The program should:
.*/

// Take the number from the prompt and store it in the num variable
let _num = parseFloat(prompt("Enter a number:"));

if (_num > 0) {
    // If the number is greater than zero,than it is positive
    console.log("The number is positive.");
} else if (_num < 0) { 
    // If the number is less than zero,than it is negative
    console.log("The number is negative.");
} else {
    // If the number is not greater than or less than zero, it must be zero
    console.log("The number is zero.");
}

// Question 4: Control Flow Keywords
// Problem: Write a program that prints all even numbers from 1 to 20. The program should:

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        // If the number is odd, skip the rest of this loop iteration and go to next iteration
        continue;
    }
    console.log(i); //print all the even number from 1 to 20
}

/*
Question 5: Combining Concepts
Problem: Create a program that simulates a simple grading system. The program should:
*/

// Take the number from the prompt and store it in the grade variable
let grade = parseFloat(prompt("Enter a grade from 0 to 100:"));

if (grade >= 90 && grade <= 100) {
    // If grade is between 90-100,it will print "A" grade
    console.log(`A`);
} else if (grade >= 80 && grade < 90) {
    // If grade is between 80-89 it will print "B" grade
    console.log(`B`);
} else if (grade >= 70 && grade < 80) {
    // If grade is between 70-79, it will print "C" grade
    console.log(`C`);
} else if (grade >= 60 && grade < 70) {
    // If grade is between 60-69, it will print "D" grade
    console.log(`D`);
} else {
    // If grade is between 0-59,it will print "F" grade
    console.log(`F`);
}