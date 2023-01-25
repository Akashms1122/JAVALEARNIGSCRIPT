function squareOfWordLength(val1) {

    console.log("--------------", val1, "------------");

    console.log("Length of value is :", val1, "=", val1.length);
    console.log("Square of length", val1.length * val1.length);

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log("=================================================");

var profile = function () {
    var result = "    I am Angular Developer     ";
   
    console.log("Length of String is :", result.length);
    console.log("total No of Words", result.indexOf("Developer"));
  
    var length = result.length;
    var index = result.indexOf("Developer");
     console.log(`1.Using Division Operator ${length/index}`);
    console.log(`2.Using Multiplication Operator ${length*index}`);

}
profile();