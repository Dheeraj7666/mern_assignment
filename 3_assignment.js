// #### Question 1
// *Task:* Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.
function capitalstrings(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        let str1 = arr[i].charAt(0).toUpperCase();//convert first letter into uppercase
        let str2=arr[i].slice(1); //return all the substring from 1 to end index
        let str3=str1+str2; // concatenation str1 + str2
        arr1.push(str3);
    }
    return arr1;
}

const words = ["apple", "banana", "cherry"];
console.log(capitalstrings(words)); // Output: ["Apple", "Banana", "Cherry"]

// #### Question 2
// *Task:* Create a function that returns the second largest element in an array.
function secondLargest(arr) {
    if (arr.length < 2) {
        return "increase length of the array"; 
    }
    arr.sort((a, b) => b - a);// Sort the array in descending order

    return arr[1]; 
}

const arr = [3, 1, 4, 22, 5];
console.log(secondLargest(arr)); // Output: 5

/*#### Question 3
*Task:* Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.*/

function Key(obj1, key) {
    let Array = [];   //empty array
    for (let i = 0; i < obj1.length; i++) {
        Array.push(obj1[i][key]); //it will push key value i.e(name) into an array
    }
    return Array;
}

const obj1 = [{name: "kalki", age: 55}, {name: "deadpool", age: 45}, {name: "spiderman", age: 26}];
const key = "name";
console.log(Key(obj1, key)); // Output: ["kalki", "deadpool", "spiderman"]

/*#### Question 4
*Task:* Calculate the factorial of every element in an array and store it in a new array.*/
function factorial(arr) {
    const result = []; // empty array
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]; // Get the current number from the array
        let fact = 1;
        
        for (let j = 2; j <= num; j++) {
            fact *= j; // Calculate factorial of num
        }
        
        result.push(fact); // Push factorial result into result array
    }
    
    return result; 
}

const num = [1, 2, 3, 4];
console.log(factorial(num)); // Output: [1, 2, 6, 24]


/*#### Question 5
*Task:* Create a function to find the intersection of two arrays.*/
function intersection(arr1, arr2) {
    // Sort both arrays
    arr1.sort();
    arr2.sort();
    
    let i = 0;
    let j = 0;
    const result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) { // if the arr1[i] is lesser than arr2[j] than we increase i by 1
            i++; 
        } else if (arr1[i] > arr2[j]) { // if the arr1[i] is greater than arr2[j] than we increase j by 1
            j++; 
        } else {
            result.push(arr1[i]);// if the number is not a greater or nor a less than it is equal
            i++;
            j++;
        }
    }
    return result;
}
const arr1 = [2,5,3,6];
const arr2 = [5,2,6,7];
console.log(intersection(arr1, arr2)); // Output: [ 2, 5, 6 ]
