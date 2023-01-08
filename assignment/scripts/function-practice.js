console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
console.log( 'This should say Hello and a name:' , helloName('Jessica'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber; 
  // return firstNumber + secondNumber;
}
console.log('This should add 2 numbers together:', addNumbers(6,8));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  let result = firstNumber * secondNumber * thirdNumber; 
  return result
}

console.log('This should be the product of 4, 5, and 6:', multiplyThree(4, 5, 6));
console.log('This should be the product of -70, 32, and 9000:', multiplyThree(-70, 32, 9000));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length-1]
}

let fruit=['apple', 'orange', 'banana']
getLast(fruit)
console.log("This should be a fruit:", getLast(fruit));

let dogs=[]
console.log("This should say undefined:", getLast(dogs));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  console.log('in the find function');
  for( let parameter of array ){
      if( parameter === value ){
        console.log('We have a match - ', value);
        return true
      } //end match
      else{
        console.log('Do we have a match?', false );
      } //end no match
  } //end for loop 
} //end function find 


let seaCreatures = ['squid', 'urchin' , 'stingray', 'dolphin', 'starfish', 'seahorse']
console.log( find( 'urchin', seaCreatures));
console.log( find( 'mermaid', seaCreatures));

// ----------------------
// Stretch Goals
// ----------------------
console.log("----------Stretch goals-----------");

// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log("8. Checking if letter is first letter ");
function isFirstLetter(letter, string) {
    let text = string;
    let result = text.indexOf(letter);
    if( result === 0 ){
      return true
    }
    else {
      return false;
    }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
console.log("9. Sum of all numbers in an array");
function sumAll(array) {
  let sum = 0
  for (i = 0; i < array.length; i++) {
     sum += array[i]
  }
  return sum;
}

let gumballArray = [ 8, 5, 16, 41, 2, 13, 7];
console.log("this should be 92:", sumAll(gumballArray));

let anotherArray = [2000, 3000, 40, 100, 85];
console.log("This should be 5225:", sumAll(anotherArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

console.log("10. Return an array with all positive numbers");
function allPosArray(array){
    let allPos = array.filter(num => num > 0)
      return allPos;
    }

//Cannot figure out how to return an empty array when the first return ends the function.     
let yetAnotherArray = [9, 3.5, -7, -13, 0, -85, 92]
console.log(allPosArray(yetAnotherArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Problem from edabit.com: Create a function that returns the maximum value of a triangle's third edge given the values of the two other sides. 
// All sides of the traingle need to be positive integers. 
console.log("Question from Edabit:");
function nextEdge(side1, side2) {
	if(side1 > 0 && side2 > 0) {
	result = (side1 + side2) - 1; 
	return result 
	}	
} 
console.log("The two sides are 10 and 6, so the thrid side of triange can be at most" , nextEdge(6, 10));
console.log("The two sides are 28 and 54, so the thrid side of triange can be at most" , nextEdge(28, 54));
console.log("This should be undefined because the numbers can't be negative" , nextEdge(-8, -11));



// (Extra code from question 10 before I figured out filter method, saving for later to see if I was on the right track)
// function allPosArray(inputArray) {
//   let posOnly = [];
//   for (let point of inputArray){
//            if ( point > 0 ) {
// //               posOnly.push(point);
//               else if (point <= 0 ) {
//                 emptyArray = []
//               }
//            }       
//     } // end positive for of statement
//   for (let point of inputArray){
//     if ( point <= 0){
//       emptyArray = [];
//       console.log(emptyArray);
//      }
//   }
// } //function