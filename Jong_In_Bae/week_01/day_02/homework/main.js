// What number's bigger?
//
// Write an if statement that tests two number (numOne and numTwo), and prints the biggest number
//
// The World Translator
//
// Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World,
// if the language is French write something romantic)
//
// The Grade Assigner
//
// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results
//
// The Pluralizer
//
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!!

console.log("==============  What number's bigger?  ==============");

var numOne = Math.floor( Math.random() * 20);
var numTwo = Math.floor( Math.random() * 20);
if (numOne > numTwo) {
  console.log("numOne is bigger than numTwo");
}else{
  console.log("numTwo is bigger than numOne");
}

console.log("==============  The World Translator  ==============");
var country = Math.random().toString(36).replace(/[^a-e]+/g, '').substr(0, 1).toUpperCase();
var helloLanguage = "Hello"
if (country === "A") {
  helloLanguage ="Australia : Hello";
  console.log(helloLanguage);
}else if (country === "B") {
  helloLanguage = "Spain : Hola";
  console.log(helloLanguage);
}else if (country === "C") {
  helloLanguage = "Italy : Ciao";
  console.log(helloLanguage);
}else if (country === "D") {
  helloLanguage ="Korea : 안녕하세요";
  console.log(helloLanguage);
}else{
  helloLanguage ="Japan : こ ん に ち は";
  console.log(helloLanguage);
}

console.log("==============  he Grade Assigner  ==============");

var usersScore =Math.floor( Math.random() * 100);
if (usersScore > 90){
  console.log("Your score is : A");
}else if (usersScore > 80) {
  console.log(" Your score is : B");
}else if (usersScore > 70) {
  console.log("Your sore is : C");
}else{
  console.log("Your score is : D");
}

console.log("==============  The Pluralizer  ==============");
var noun = "elephant";
var num = Math.floor( Math.random() * 10);

if ( noun.endsWith("t") && num > 1 ) {
  var str = noun.slice(0 , -1);
  console.log(num+" "+noun+"ts");
}else{
  console.log(num + " " + noun);
}
