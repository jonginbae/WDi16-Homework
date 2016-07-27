// The Calculator
//
// Part 1

// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// console.log("======================== Square function ========================");

var squareNumber = function( num ) {

  var result =  Math.pow( num , 2 );

  console.log("The result of squaring the number "+ num +" is "+ result);
  return result;
}

// console.log("======================== Half function ========================");
var halfNumber = function( num ) {

  var result = num / 2;

  console.log("Half of "+num+" is "+result);
  return result;
}

// console.log("======================== percentOf function ========================");
var percentOf = function( firstNum , secondNum ) {

  var result = (firstNum / secondNum) * 100 +"%";

  console.log(firstNum+" is "+result+" of "+secondNum);
  return result;
}

// console.log("======================== areaOfCircle function ========================");
var areaOfCircle = function ( r ){
  var piValue = Math.PI;
  var result =  squareNumber(r)  * piValue;
  // Round the result so there are only two digits after the decimal.
  var roundRes = Math.round(result * 100) / 100;

  console.log("The area for a circle with radius "+r+" is "+roundRes);
  return roundRes;
}



// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var inPutFucntion = function(n) {
  console.log("======================== half of number ========================");
  var pTwoOneRes = halfNumber( n ) ;

  console.log("======================== square the result(half of number) ========================");
  var pTwoTwoRes = squareNumber(pTwoOneRes);
  console.log("======================== calculate the area of circle  ========================");
  var pTwoThreeRes = areaOfCircle(pTwoTwoRes);
  console.log("======================== percentage that area is of the squared ========================");
  var lastRes = percentOf(pTwoThreeRes , pTwoTwoRes );
}

inPutFucntion(5);
