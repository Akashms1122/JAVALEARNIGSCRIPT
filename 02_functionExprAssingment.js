
function square(val1){
  var result=val1*val1;
  console.log("Square of No Is", result);

}
square(5);
square(6);
square(25);
square(100);
console.log("\n");
console.log("\n");
console.log("Type of the function name is" , typeof square);
console.log("\n");
function area(length,height){
  var result= length * height;
  console.log("Area of rectangular is=", result);
}
area(499,917);
console.log("\n");

function swapValues(value1, value2){
  console.log("Before Swap", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap", value1, value2);
}
swapValues(1000, 2000);
swapValues("Virat", "Anushka");
console.log("\n");
var firstName="Js is the most popular laungauge";
console.log("Given string is", firstName);
console.log("total character in string is" , firstName.length);
console.log("Char at index 6: ", firstName.charAt(6));
console.log("Char at index 11: ", firstName.charAt(11));
console.log("last Char at string is: ", firstName.charAt(31));
console.log(" first Char at string is: ", firstName.charAt(0));
console.log("calculate the suare of lenght",firstName.length*firstName.length );






