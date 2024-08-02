/*Question 1
Task: Write a function that takes an object and returns an array of the object's keys and values.*/

function pair(obj) {
    let result = [];
    for (let key in obj) {
        result.push([key, obj[key]]);// push key-value pairs in the 'result' array
    }
    return result; // Return the array 'result' containing all key-value pairs
}

let obj = { 
    name: "pika",
    age: 17, 
    city: "New York"
};
console.log(pair(obj)); // output: [ [ 'name', 'pika' ], [ 'age', 17 ], [ 'city', 'New York' ] ]

/*Question 2
● Task: Create a function to convert a string to title case.*/

function toTitleCase(str) {
    let words = str.split(' '); // split method convert string into an array 

    let firstCapital = words.map(word => {
        let a=word.charAt(0).toUpperCase();//convert first letter into upperCase
        let b=word.slice(1).toLowerCase();//convert second index to n-1 index into lowerCase
        return (a+b);
    });
    let str1 = firstCapital.join(' '); // join an array into a single string with space between each word
    return str1;
}

console.log(toTitleCase("hello world")); // Output: Hello World

/*Question 3
● Task: Implement a function that checks if an object is empty.*/

function check(obj) {
    for (let key in obj) {
        // If the loop find the property return false 
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true; // if the object is empty return true
}

const empty = {};
console.log(check(empty)); // Output: true

const no_Empty = { name: "Ben_10", age: 17 };
console.log(check(no_Empty)); // Output: false

/*Question 4
● Task: Write a function to count the number of occurrences of each character in a string.*/

function counter(str) {
    let charCount = {};// Create an empty object

    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // char variable get the current character
        charCount[char] = 0;//initialized character as 0 value

        for (let j = 0; j < str.length; j++) {
            if (str[j] === char) {
                charCount[char]++; // Increment the count 
            }
        }
    }
    return charCount;
}

console.log(counter("hello"));// output:{ h: 1, e: 1, l: 2, o: 1 } 



  
