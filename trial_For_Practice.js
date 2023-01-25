console.log("___________________________________________________________");

console.log("-------3. Checking words is Even or odd  --------");

var result= function (words){
    var length = words.length;
var wordLength = length%2==0 ? "Even" : "Odd";
console.log(`${words} word length is ${wordLength}.`);
}
var wordLength= result ("1. JavaScript");
var wordLength= result("2. Developer");
var wordLength= result("3. Google");

console.log("\n");
console.log("_____3. Cheking words is even or odd");
var result= function (wording) {
    var length = wording.length;
    var wordingLength = length%2==0 ? "even" : "odd"  ;
    console.log(`${wording} wording length is ${wordingLength}` );  
}
var wordingLength= result ("1. JavaScripte");
var wordingLength= result ("1. SandipNikam");
var wordingLength= result ("1. Nileshubalee");
