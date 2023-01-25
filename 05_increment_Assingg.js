function countCharA(sentence)
{
    var counter = 0;
    for (let index = 0; index < sentence.length; index++) {
        var char = sentence.charAt(index);
        if(char=='A' || char=='a')
        {
            counter=counter+1;
            
        }
            
        
    }
    console.log(`${sentence}`);
    console.log(`Total number of A or a in the given string is ${counter}`);
}

countCharA(`"I AM Learning JavaScript, The Language of internet"`);
countCharA(`"My favourite movie is LAggAn"`);