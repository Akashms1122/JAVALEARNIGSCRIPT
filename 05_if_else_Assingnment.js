
var votingEligibility = function (age){
    if (age<=0 || age>120){
        console.log(`Invalid data: ${age}`);
    } else {
       console.log(`Valid data: ${age}`); 
       if (age>=18) {
        console.log(`Congratulation you are eligible for voting: ${age}`);
       }else{
        console.log(`Sorry you are not eligible for voting: ${age}`);
       }
    } 
}
votingEligibility( 45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);
console.log("\n");

console.log("*****Assingment-2*****");
var gradeCaculation = function (marks){ 
    if (marks>=90) {
        console.log(`valid data ${marks}`);
        console.log(`funtastic marks: ${marks} Your Grade is A+`);
        
    }
    if (marks>=75 && marks<90) {
        console.log(`valid data ${marks}`);
      console.log(`Excellent marks: ${marks} your Grade is A`);  
    }
    if (marks>=50 && marks<75) {
        console.log(`valid data ${marks}`);
        console.log(`Good marks: ${marks} your Grade is B`);  
    }
    if (marks>=35 && marks<50) {
        console.log(`valid data ${marks}`);
        console.log(`Marks is: ${marks} your Grade is c, Need to improvement`);
    }
    if (marks>=0 && marks>100  ) {
        console.log(`Invalid data ${marks}`);
        console.log(`please provide the valid marks : ${marks} `);
        console.log(` ${typeof marks}`);
    }
    
}
gradeCaculation(98);
gradeCaculation(80);
gradeCaculation(0);
gradeCaculation(150);
gradeCaculation(-7);
gradeCaculation(35);
gradeCaculation(29);
gradeCaculation(64);
gradeCaculation(49);
gradeCaculation("91");
gradeCaculation("Eighty");







