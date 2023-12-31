//We are going to learn about type conversion we can also refer to it as type casting.

//We will use typeof funtion . two ways to represent it: -> typeof variable_name or ->typeof(variable_name).

//First we will just understand the typecasting of variable of different datatype to NUMBER.

//                  ****STRING TO NUMBER****
console.log(":  Number  :")
let score="33"; // it is STRING
let valueInnumber=Number(score); // typecasted to NUMBER 
console.log("score in :"+typeof score+" : "+score);
console.log("score in : "+typeof valueInnumber +" : "+valueInnumber);

//In javascript the string will be type-casted to NUMBER without any issue even if the string is not number. And even the typeof function will output it as number but when we will try to display its value it will show-> NaN <-  eg: given below.
let name1="23b";
let nameNum=Number(name1);
console.log(typeof name1);
console.log(typeof nameNum);
console.log(nameNum);// here the output will be NaN


//                  ****NULL TO NUMBER****
let score_null=null; // it is NULL
let scorenull_Num=Number(score_null); // typecasted to NUMBER 
console.log("\nscore in :"+typeof score_null+" : "+score_null);
console.log("score in : "+typeof scorenull_Num +" : "+scorenull_Num);//it is obvious the null in Number will be -> 0.

//                  ****UNDEFINED TO NUMBER****
let scoreUndefined= undefined; // it is undefined
let scoreUndefined_Num=Number(scoreUndefined); // typecasted to NUMBER 
console.log("\nscore in :"+typeof scoreUndefined+" : "+scoreUndefined);
console.log("score in : "+typeof scoreUndefined_Num +" : "+scoreUndefined_Num);//output will be NaN


//                  ****boolean TO NUMBER****
let scoreBool=true; // Boolean value( true or false)
let scoreBool_Num=Number(scoreBool); // typecasted to NUMBER 
console.log("\nscore in :"+typeof scoreBool+" : "+scoreBool);
console.log("score in : "+typeof scoreBool_Num +" : "+scoreBool_Num);//it outputs true as 1 & false as 0

// summary of above
// "33" outputs=> 33
// "33ab" outputs=> NaN ,but is still Number datatype
// null outputs=> 0
// undefined ouput=> NaN ,because it is not number 
// boolean outputs=> for true 1 & for false 2






//                  ****Number to Boolean****
console.log(":\n  Boolean  :");
let isLoggedIn=10; // 
let BooleanIsLoggedIn=Boolean(isLoggedIn); // typecasted to Boolean
console.log("\nIs logged :"+typeof isLoggedIn+" : "+isLoggedIn);
console.log("Is Logged :"+typeof BooleanIsLoggedIn +" : "+BooleanIsLoggedIn);//only zero will be false rest will be true in Number

//                  ****string to Boolean****

let isLoggedInEmpty=""; //it is empty string 
let BooleanIsLoggedInEmpty=Boolean(isLoggedInEmpty); // typecasted to Boolean
console.log("\nIs logged :"+typeof isLoggedInEmpty+" : "+isLoggedInEmpty);//no output
console.log("Is Logged :"+typeof BooleanIsLoggedInEmpty +" : "+BooleanIsLoggedInEmpty);//output will be false

//string with some values
isLoggedInEmpty="luffy";// here  the sting has value
BooleanIsLoggedInEmpty=Boolean(isLoggedIn);
console.log("\nIs logged :"+typeof isLoggedInEmpty+" : "+isLoggedInEmpty);
console.log("Is Logged :"+typeof BooleanIsLoggedInEmpty +" : "+BooleanIsLoggedInEmpty);//output will be true  because string has some value 

// summary of boolean
// 1 => true ; 0 =>false
// empty sting i.e "" -> false 
// "string " => true


