//VARIABLES (var)
//var or let can be used to name different variables which will be used in the future.
//STRING (TYPE OF VALUE): a sequence of characters (usually a name to determine a variables value)
// Example:
var a = "Mosh"
var b
var c 

// Cannot be reserved
// Cannot start with a number (1patrick)
// Cannot contain a space or a hyphen (-)
// Should be meaningful (not a, b, a1, etc...)
// Are case sensitive (a variable named 'A' is different from 'a'

//CONSTANTS (const)
//the value of a variable CAN change. The value of a constant however, CAN't change.
//If you don't need to reassign a variable, const is the best choice. Otherwise, if you need to reassign a variable, use var or let.

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ 
// [  𝟭 & 𝟮   ]   𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗜𝗘𝗦 𝗢𝗙 𝗧𝗬𝗣𝗘𝗦
// primitives & reference types
// ________________________________________

//̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
// [    1    ] Primitives/Value Types
//__________________________________
// Example using comparison:
// Comparison using Primitives.
var num1, num2
console.log(num1 === num2); // Result: true (values are equal) or false (values are not equal)
// In this  example, the === operator is used for strict equality comparison, which checks both the value and the type.

// [ 1 ] String
var name = "string";
// [ 1 ] Number
let age = 30;
// [ 1 ] Boolean
let isApproved = false;
// [ 1 ] Undefined = Null. his is used in situations when you want to clear the value of a variable.
let firstName = undefined; 
// [ 1 ] Null = Undefined. This is used in situations when you want to clear the value of a variable.
let lastName = null;




//̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
// [    1    ] Reference Types
//__________________________________
// Reference types check to see if the memory address is the same NOT the value itself.
// Comparison using References
var obj1 = ("Patrick")
var obj2 = ("Araujo")
console.log(obj1 === obj2);
// In this example, obj1 and obj2 have the same properties and values, but they are distinct objects with different memory references.
// Therefore, the comparison returns false.

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
// [     2 ] Objects
//__________________________________

//... TBF

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
// [     3 ] Functions
//__________________________________
//  Subprogram that gives a single value, typically used with return to give that result.
// 1. declared functions
// 2. expression functions
// 3. immediate response functions
// 4. arrow function expressions

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
//     1.★ declared functions
//__________________________________
function name([param1, param2]){
    codigo
    return valorDevuelto; //El return termina la ejecución y es opcional
}
// Example using a onclick button from a HTML page linking a javascript:
<script src="./script.js"></script> //HTML
 <input type="button" onclick="holaMundo();" value="Hola Mundo" />

function holaMundo() { //JAVASCRIPT
    alert("Hola Mundo!");
}
// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
//     2.★ expression functions
//__________________________________
 var sumar
 var suma

const sumar = function suma(n1, n2) {
    return n1 + n2;
  };
  console.log(sumar(3, 4)); //console.log(suma(3,4)); -> The function name suma is not accesible without the const named sumar.
   // Activates restar variable, then fills in 3 and 4 into n1 and n2 to add them. Function is named suma.

  var restar = function (n1, n2) {
    return n1 - n2; }; //Con una función anónima, sin nombre
  console.log(restar(3, 4));
  // Activates restar variable, then fills in 3 and 4 into n1 and n2 to subtract them. Function is left blank.
// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
//     3.★ immediate functions
//__________________________________
// Ex:
(function () {
    codigo;
  })();
// 
  (function () {
    let nombre = "Davinia";
    //if var is used, it will still be local because it scopes down to the pages body
    //if let is used, it will scope down to the closing block which is }
    alert("Hola " + nombre);
  })();
// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
//     4.★ arrow functions
//__________________________________
// They don´t create their own context upon execution.
// They are anonymous. The objects arguments are not found in the page.
function suma100_1(a) { // traditional function
    return a + 100;
  }
  console.log(suma100_1(3));
  
  // arrow function options (anonymous)
  (a) => {
    return a + 100;
  };

  //2
  (a) => a + 100;
  
  //3
  (a) => a + 100;
  
  const suma100_2 = (a) => a + 100;
  console.log(suma100_2(4));

//     ★ Return Type
// When JS reaches a return value, the function will stop executing.
// Functions return the value back to the caller.
//     ★ Void Type
// Doesnt return any value.
//     ★ Parameters
// Parameters are basically variables (var), a special kind of variable that is created when the function is called.
function add() { //EXAMPLE
    var(a) = 1
    var(b) = 2
    var(total)= a+b
    return total; // returns 3
}

function add(a, b) {
    var total = a+b
    return total; // 
}
add(3, 3); // returns 6

// [     2 ] Arrays
// [     2 ] Dates
// [     2 ] Other types...

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ 
// [  𝟭 & 𝟮   ]   𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗜𝗘𝗦 𝗢𝗙 𝗧𝗬𝗣𝗘𝗦
// basic operators & logical operators
// ________________________________________

//̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
// [    1    ] Basic Operators
//__________________________________
// Operations used in math
// 1. basic arithmetic operation
// 2. assigning
// 3. comparison

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
//     1.★ basic arithmetic operation
//__________________________________
// Addition = +
// Subtraction = -
// Division = /
// Rest of the division = %

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
//     2.★ assigning
//__________________________________
// = assignation
var n = 7; //
 var n2 = n2 + n * 3; // 7 replaces n and then n2 is replaced by the answer

// ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
//     3.★ comparison
//__________________________________
// == equality | Allows the comparison between contents
var n = 9;

var n2 = 9;
console.log(n == n2); // Returns true because both values are the same.
var n3 = 109;
console.log(n == n3); // Returns false because both values are not the same.

// === strict equality | Allows the comparison between contents but while also forcing the conversion of types
var n = 9;

var n2 = 9;
console.log(n === n2); // Returns true because n2 is equal to n.

var n3 = 109;
console.log(n === n3); // Returns false because n3 is not equal to n.
var n4 = "9";

// != unequality | Allows the unequal comparison between contents
var n = 9;

var n2 = 9;
console.log(n != n2); // Returns false because n2 is equal to n.

var n3 = 109;
console.log(n != n3); // Returns true because n3 is not equal to n.

// != strict unequality | Allows the unequal comparison between contents
var n = 9;

var n2 = 9;
console.log(n !== n2); // Returns false because n is equal to n2.

var n3 = 109;
console.log(n !== n3); // Returns true because n is not equal to n3.

// > crocodile mouth | Comparing bigger and smaller numbers
//     > Mayor que
//     < Menor que
//     >= Mayor o igual que
//     <= Menor o igual que
var a = 9;

var b = 8;
console.log(a > b); // Returns true because a is bigger than b.

var c = 9;
console.log(a >= c); // Returns true because a is the same as b.

//̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅ ̅
// [    2    ] Logical Operators
//__________________________________
// Operations used to combine boolean values.

//NOT - simply inverts the boolean state - true becomes false and vice versa
var n = 9;
console.log(!(n == 9)); //Returns as true because n is equal to 9, but then turns into a false.
console.log(!false); // HOWEVER, the false returns changed into a true because we are denying the false with !

//AND - only results in true if both sides of the AND evaluate to true
var n = 9;
console.log(n == 9 && n > 3); // Returns true because n is equal to 9, n is bigger than 3, and && compares both values which are equal and gives true.
console.log(n == 9 && n < 3); // Returns false because n is not smaller than 3.

//OR - results in true as soon as one of the two operations is true
var n = 9;
console.log(n == 9 || n > 3); // Returns true because n is equal to 9, and n is bigger than 3.
console.log(n == 9 || n < 3); //Devuelve true porque la primera comparación es true
console.log(n == 7 || n < 3); //Devuelve false porque las dos son false y el OR entre dos false es