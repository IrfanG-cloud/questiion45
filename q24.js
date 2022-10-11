// Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
//comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and 
//less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

//Tests for equality and inequality with strings
if ( '1' == "1" ){
    console.log(true);  // true
}else{
    console.log(false);
}

if("hello" !== "hello"){
    console.log(true)
} else{
    console.log(false)   // false
}


// Tests using the lower case function
function lowCase (letterCase) {
  
    if (letterCase == letterCase.toLowerCase()) 
    {
    return true; 
  } else {
    return false; 
  };  
  }
  
  console.log(lowCase("GGG"));

  
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//equality
let num = 1;
if ( num == 1 ){
    console.log(true);  // true
}else{
    console.log(false);
}

//inequality
if ( num !== 1 ){
    console.log(true);  
}else{
    console.log(false); //false
}

//great than
let num2 = 5;
if ( num2 > 1 ){
    console.log(true);  //true
    console.log(false); 
}

//less than
let num3 = 2;
if ( num3 < 10 ){
    console.log(true);  
}else{
    console.log(false); //false
}


//greater than or equal to 
let num4 = 11;
if ( num4 >=10 ){
    console.log(true);  // true
}else{
    console.log(false); 
}


//less than or equal to 
let num5 = 11;
if ( num5 <=10 ){
    console.log(true);  
}else{
    console.log(false); //false
}

//Tests using "and" and "or" operators
let num6 = 6;
let num7 = 3;
if(num6 < 10 && num7 > 1){
    console.log(true); 
}else{
    console.log(false); //false
}


//Tests using "and" and "or" operators
let num8 = 6;
let num9 = 3;
if(num8 < 10 || num9 > 1){
    console.log(true);      //true
}else{
    console.log(false); 
}


//Test whether an item is in a array
const number = [25, 35, 45, 55, 65,];

    if(number.indexOf(45) !== -1){
       console.log("An item in a array")
    } else{
        console.log("An item is not in a array")
    }

//Test whether an item is in a array

    if(number.indexOf(50) !== -1){
       console.log("An item in a array")
    } else{
        console.log("An item is not in a array")
    }


    // Note*: In terminal, if you want to check prnt then  write 'node q24.js' 