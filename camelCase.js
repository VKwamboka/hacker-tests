function processData(input) {
    //Enter your code here
    let word = input.split(' ')
    console.log(word)
    for (let i in input){
        console.log(input[i])
    }
    if((word[0]=='S') && (word[1]=='V')){
       input.replace(/([a-z])([A-Z])/g, "$1 $2").split(';').splice(2).join('')
    
        // return word
    }
    else if(word[0]=='C' && word[1]=='V'){
        word = input.split(';').splice(2)

    }
     else if(word[0]=='C' && word[1]=='C'){
        word = input.split(';').splice(2)

        
    // return word
    }
    
    console.log(word)
    return word
    
    
} 