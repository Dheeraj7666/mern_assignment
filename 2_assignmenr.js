// Question 1: Multiplication Table Generator
console.log("==========Multiplication Table from 1 to 10:===========");
for (let i = 1; i <= 10; i++) {    // Outer loop 
    let row = "";                  // Initialize an empty string 
    for (let j = 1; j <= 10; j++) {// Inner loop 
        row += (i * j)+("\t")
    }
    console.log(row);
}
// Question 2: Sum of Numbers in an Array

let num = [1,2,3,4,5];  // Initialize the array with 5 numbere lement
let sum = 0;            //variable sum is Initialize and assigned zero in it
for (let i = 0; i < num.length; i++) {
    sum += num[i];      // Add each element to the sum
}

console.log("Sum of array:", sum); // output:Sum of array: 15
// Question 3: Palindrome Checker
function isPalindrome(str) {
	let rev = ""; //variable rev is initialized
	for (let i = str.length - 1; i >= 0; i--) { // Loop to reverse the string
		rev += str[i];                          // rev store reversed string
	}
	if (rev == str) { // Check if the reversed string is equal to the original string 
		return true
	} else {
		return false;
	}
}
let str1 = "level";
console.log(isPalindrome(str1));

// Question 4: Fibonacci Sequence Generator
function fibo(n) {
    let arr1 = [];//initialize empty array
    let a = 0, b = 1;
    arr1.push(a); // we push first Fibonacci number in an array 
    if (n === 1) {
        return fibArray; 
    }
    arr1.push(b); // we push second Fibonacci number in an array 
    for (let i = 2; i < n; i++) {
        let c = a + b;
        arr1.push(c);
        a = b;
        b = c;
    }
    return arr1;
}

let n = 10; 
console.log(fibo(n)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// Question 5: Block Scope with Let and Const

// Using var =>function scope
function vareg() {
    if (true) {
        var i = 10;
    }
    console.log("var eg:" + i); // we can access x variable 
}
vareg();

// Using let =>block scope
function leteg() {
    if (true) {
        let y = 20;
    }
    // console.log("Let eg: " + y); //we can not access y variable because we can access y variable within if statement
}
leteg();

// Using const =>block scope
function consteg() {
    if (true) {
        const z = 30;
    }
    // console.log("Const eg: " + z);//we can not access z variable because we can access z variable within if statement
}
consteg();

