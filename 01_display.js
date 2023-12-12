// console.log() Funtion Is Used To Display The String  

console.log("hello world")
let contactNo=9920557845;
let username="Priyanshu Gupta";
let course="SYBsc.IT";
let language="Javascript";
let passkey="BOSS@8055";

//We Can Display Multiple Variable Data Using       => console.log(var1,var2,var3) .We Can Seprate The Variable Element Using " ," Comma As Shown Above.
// In console.log() we can display multiple data but is not in organized manner.

console.log(username,passkey,contactNo,course,language);

// We Can Display Multiple Data In Organized Manner Using => console.table([var1,var2,var3]) Function .Note That In The console.table([]) Funtion " [ ] <-box bracket" Are Must And The "," Is Used to seprate the variable elements.

console.table([username,passkey,language,contactNo,course]);

// Below We Have Implemented The Concatination Of String And  Variable(Data) In console.table([]) Funtion.

console.table(["Username :"+username,"Passkey : "+passkey,"Language : "+language,"Contact No : "+ contactNo,"Course : "+course]);