/*Question 1
● Task: Write a function that returns a closure which adds a specific number to its argument.
*/
function Add(x) { // x=5
    // The inner function that is closure that adds x + y
    return function(y){ //y=3
    return x + y; // it will return 8
  };
}

let sum = Add(5); 
console.log(sum(3)); // Output: 8 

/*Question 2
● Task: Create a function using closure to keep track of how many times it has been called.
 */

function Track() {
    let count = 0; //count Variable track number of calls
    return ()=>{
      count++; // Increment the count variable by 1 when it is called
      return count; // Return the count
    };
  }

  const num = Track();
  for (let i = 0; i < 5; i++) {
    console.log(num());
  }
  
  /*Question 3
● Task: Implement a prototype method to calculate the area of a rectangle object.
*/
function rectangle(width, height) { 
    this.width = width;
    this.height = height;
  }
  // use prototype method to calculate area of rectangle
  rectangle.prototype.area = function(){
    return this.width * this.height; // return area of rectangle
  };
  
  const rect1 = new rectangle(2,2);
  console.log(rect1.area()); // Output: 4
  
  /*Question 4
● Task: Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.
 */

function Circle(radius) {
    this.radius = radius; // Initialize radius
  }
  
  // use prototype method to calculate area of circle
  Circle.prototype.area = function() {
    return 3.14*this.radius*this.radius; //return the area of circle
  };
  
  // use prototype method to calculate perimeter of circle
  Circle.prototype.perimeter = function() {
    return 2*3.14*this.radius; //return the perimeter of circle
  };
  
  const cir = new Circle(5);
  console.log(cir.area()); // Output:78.5
  console.log(cir.perimeter()); // Output: 31.400000000000002

  /*Question 5
Task
Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.
 */

function counter() {
    let counter = 0; 
    return {
      increment: function() {// this function increment the counter by 1 
        counter++;
      },
      decrement: function() {// this function decrement the counter by 1
        counter--;
      },
      reset: function() {// this function reset the counter by 0
        counter = 0;
      },
      result: function() { 
        return counter;// return current value
      }
    };
  }
  
  const count = counter();

  count.increment();
  count.increment();
  console.log(count.result()); // Output: 2

  count.decrement();
  console.log(count.result()); // Output: 1

  count.reset();
  console.log(count.result()); // Output: 0
  