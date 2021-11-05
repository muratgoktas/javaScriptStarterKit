let numbersArray = [11,25,3,4,2,1,12341,67,99,87,345,653,547]
function findPrimeFunc(params) {
    let message=" prime number."
    if (params == 2){
        return console.log(params+message)
       }//end if
    if ( params==1)  {
        message=" not prime number."
        return console.log(params+message)
       }//end if

    for (let indexB = 2; indexB < params; indexB++) {
       let value =params%indexB
     
       // console.log(params+"%"+indexB+"="+value)
   
       if (value == 0 )  {
            message=" not prime number."
            indexB=params
        }
   
     }//end for
     return console.log(params+message)
     
}//end func
function factorization(number){
    let value=[]
    let total=0
    for (let indexB = 1; indexB < number; indexB++) {
        if (number%indexB==0) {
            value.push(indexB)
            total=total+indexB
           // console.log(indexB)
        }
    }
    return total
}
function perfectNumberFound(number){
    let perfectNumbers=[]
    for (let indexA = 1; indexA < number; indexA++) {
        
        let total= factorization(indexA)
      
        if (total+indexA==indexA*2) {
           console.log(indexA+" : This number perfect number.")
            perfectNumbers.push(indexA)
          
        }
    }
}

let input = prompt("A-Find Prime Numbers in Array~ B-Find Prime Numbers up to 1000~ C-Find Perfect Numbers  up to 1000~ Other- Compare numbers and find Friendly Numbers(choose A-B-C-undefined :-)) ?");

alert(`Select ${input}`);

if (input=="a" || input=="A") {
   
    for (let indexA = 1; indexA < numbersArray.length; indexA++) {
  
        findPrimeFunc(numbersArray[indexA])
       
    } //end for

} else if(input=="b" || input=="B") {    
    findPrimeFunc(2)
    findPrimeFunc(11)
    findPrimeFunc(25)
    findPrimeFunc(1)
   
    for (let indexA = 1; indexA < 1000; indexA++) {
  
        findPrimeFunc(indexA)
       
    } //end for
} else if(input=="c" || input=="C") {
        perfectNumberFound(1000)
}else{
    let number1=220
    let number2=284
    
     if (factorization(number1)==number2 && factorization(number2)==number1){
         console.log(number1+" and "+number2+" Friendly Numbers." )
     }else{
         console.log(number1+" and "+number2+" don't Friendly Numbers." )
     }//end else

}//end else
