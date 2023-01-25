console.log("Check the Number is gretter");
console.log("------------------------------");
function check(num1,num2){
    if(num1>num2)
    {
        console.log(num1 ,"is greater -10");
    }
    else
    {
        console.log(num2 ,"is gretter 800");

    }
}
check(10,-10);
check(800,899);
//Que2
console.log("\n");
console.log("find evan or odd numbers");
console.log("---------------------")
function evanOrOdd(num){
    if(num%2==0)
    {
        console.log(num,"is evan");
    }
    else{
        console.log(num,"is odd");
    }
}
evanOrOdd(29);
evanOrOdd(44);
evanOrOdd(0);
evanOrOdd(101);

//Que3
console.log("\n");
console.log("Find the length of woard is odd or evan");
console.log("----------------------------------------")
function len(word){
   var ToTal=(word.length);
    console.log(ToTal);
    if(ToTal%2==0)
    {
        console.log(word,"length is evan");
    }
    else
    {
        console.log(word,"length is odd");
    }
}
len("Javascript");
len("Developer");
len("Googal");

