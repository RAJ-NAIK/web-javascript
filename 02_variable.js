// 1.The ES6(ecmascript) javacsript Variable names are called identifiers. 
// 2.The rules to keep in mind while naming an identifier. 
// 3.An identifier can contain alphabets and numbers but cannot be the keyword names
// 4.It cannot start with a number
// 5.It cannot contain spaces and special characters, except the underscore (_) and the dollar ($) symbol.
// 6.A variable, by definition, is “a named space in the memory” that stores values. In other words, it acts as a container for values in a program

// A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.eg given below
let name1="priyanshu"; 
console.log("Name : "+name1); 

//Variables in javascript can be declared using keywords like : let , var ,const .eg are given below.
let namen1="Roronoa";
var namen2="Freiren";
const namen3="Natsu";

console.log([namen1,namen2,namen3]);

// Note :The var keyword in JavaScript is used to declare variables. However, there are some problems with using var to declare variables. 
// One problem is that variables declared with var are scoped to the function in which they are declared. This means that a variable declared with var inside a function cannot be accessed from outside of the function.

// Another problem with using var is that variables declared with var can be reassigned. This means that the value of a variable declared with var can be changed at any time. This can lead to unexpected behavior in your code.eg given below 
console.log("\nTesting var keyword :");
var i=1

for(var i=2 ; i<=2 ;i++){
    console.log("inner loop i ="+i);
}
console.log("outter loop i ="+i);

//Insted of "var " that is why we should go for "let" mostly but when we need read-only data to be assigned to varible we can go with "const". 
console.log("\nTesting let keyword :");
let count=1
for(let count=2 ; count<=2 ; count++){
    console.log("inner loop count ="+count);
}
console.log("outter loop count ="+count);

//In javascript, type of data a variable stores is known when that variable is initialize(when data is stored in variable).
let contactNo=998778673;
//In above code we have declared and initialize the code.
 

