var resultDivide = 0/0;
console.log(`Result is: ${resultDivide}`);
console.log(`Type of${resultDivide} is ${typeof resultDivide}`);
var resultDivide = 0/0;
console.log(`Result is: ${resultDivide}`);
console.log(`Type of${resultDivide} is ${typeof resultDivide}`);

var resultAdd = resultDivide + 10;
console.log(`resultAdd is: ${resultAdd}`);

var resultMul = resultDivide * 10;
console.log(`resultMul is: ${resultMul}`);

var num = new Number("Prathamesh"); 
console.log(`num is: ${num}`);
console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr;
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);
var numAdd = 10 + 40; // 50
var strAdd = "Pooja " + 70;
console.log(`strAdd is: ${strAdd}`);

console.log(` + operator can do the the type conversion as well from string to number `);
var numStr = "100";
var num = + numStr; // Explicit conversion
console.log(`typeof numStr is: ${typeof numStr}`);
console.log(`typeof num is: ${typeof num}`);

var numStr = "Chandra";
var num = + numStr;
console.log(`typeof ${numStr} is: ${typeof numStr}`);
console.log(`typeof ${num} is: ${typeof num}`);

console.log(`== comparison ${20 == "20"}`); // Implicit conversion

var myNumber = -77.333;
console.log(`myNumber values ${myNumber} and it's type is: ${typeof myNumber}`);
var strMyNumber = myNumber.toString();
console.log(`strMyNumber values ${strMyNumber} and it's type is: ${typeof strMyNumber}`);
console.log(` ====== if block ======= `);
console.log(`Check whether number is positive or negative...`);
var myNumber = -10;
if(myNumber>0){
    console.log(`Given number ${myNumber} is positive`);
}
var num = -4;
if (num<=0) {
    console.log(`Given number ${num} is Negative`);
}
var num1 =100;
var num2 = 200;
var num3 = 99;
if (num1>num2 && num1>num3) {
    console.log(`You are greater man ${num1}`);
}
if (num2>num1 && num2>num3) {
    console.log(`You are greater man ${num2}`); 
}
if (num3>num1 && num3>num2) {
    console.log(`You are greater man ${num3}`);  
}

function evenOrOdd(value){
    if (value%2==0) {
        return "EVEN";
    }
    if (value%2!=0) {
        return "ODD";
    }
}
evenOrOdd(45);
