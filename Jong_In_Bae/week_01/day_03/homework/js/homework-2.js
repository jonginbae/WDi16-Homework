// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount,
//  and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
console.log("======================== DrEvil ========================");
var drEvil = function( amount ){
  var result = 0;

  if ( amount === 1000000){
    result = amount + "dollars (pinky)";
  }else{
    result = amount+" dollars";
  }
  console.log(result);
  return result;
}

console.log("======================== DrEvil - TEST ========================");
drEvil(1000000);
drEvil(12);
// MixUp
//
// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
console.log("======================== MixUp ========================");
var mixUp = function(firstStr , secondStr){
  var frontFirstStr = firstStr.substring(0 , 2);
  var endFirstStr = firstStr.substring(2,firstStr.length);

  var frontSecondStr = secondStr.substring(0 , 2);
  var endSecondStr = secondStr.substring(2,secondStr.length);

  var firstRes =  frontSecondStr + endFirstStr;
  var secondRes = frontFirstStr + endSecondStr;

  var lastRes = " ' "+firstRes + " " + secondRes+" ' ";

  console.log(lastRes);
  return lastRes;
}
console.log("======================== MixUp - TEST ========================");
mixUp("dogy" , "panda");
mixUp("Wolf" , "cat");


// FixStart
//
// Create a function called fixStart. It should take a single argument,
// a string, and return a version where all occurences of its first character have been replaced with
// '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
console.log("======================== FixStart ========================");
var fixStart = function( str ){
  var strLength = str.length;
  var fixedStr="" ;
  var tmpStar="" ;

  // tmpStar += "*";
  // fixedStr = str.replace(str.substring(2 , str.length-2), tmpStar);


  for ( var i =2; i < strLength-2; i += 1){
    tmpStar += "*";
    fixedStr = str.replace(str.substring(2 , str.length-2), tmpStar);
  }

  console.log(fixedStr);
  return fixedStr;
}
console.log("======================== FixStart - TEST ========================");
fixStart("panda");
fixStart("860610");

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
console.log("======================== Verbing ========================");
var verbing = function( str ){
  var strLength = str.length;
  var resultStr = "";
  if ( parseInt(strLength) >= 3){
    if (str.substring(strLength -3 , strLength) === "ing"){
      resultStr = str.replace(str.substring(strLength-3 , strLength), "ly");
    }else if (str.substring(strLength -1 , strLength)){
      resultStr = str+"ing";
    }
  } else{
    resultStr =  str;
  }
  console.log(resultStr);
  return resultStr;
}

console.log("======================== Verbing ========================");
verbing("swimming");
verbing("go");
verbing("cook");
// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
console.log("======================== notBad ========================");
var notBad = function( str ){
  var orgStrLength = str.length;
  var fiexedLength = 0;
  var fixedStr = "";

  if (orgStrLength > 3 ){
    fixedStr = str.replace('not', '');
    fiexedLength = fixedStr.length;
    if (fiexedLength === orgStrLength ){
      fixedStr = str.replace('bad', 'good')
    }else{
      fixedStr = fixedStr;
    }
  }else{
    console.log("Out of sight");
  }

  console.log(fixedStr);
  return fixedStr;
}

console.log("======================== notBad -TEST ========================");
notBad("Thisdinnerisnotthatbad!");
notBad("This movie is not so bad!");
notBad("This dinner is bad!")
