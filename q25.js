// Q25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
// assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
// just earned 5 points.
// Write one version of this program that passes the if test and another that fails. (The version that fails will 
// have no output.)


// Print a message that the player just earned 5 points.
let alien_color = ['green', 'yellow', 'red']

for (var i = 0; i < alien_color.length; i++) {

    if(alien_color[i] == 'green'){
        console.log( "the player just earned 15 points")
    } else{
        console.log("didn,t get points")
    }
}


// The version that fails will have no output.
for (var i = 0; i < alien_color.length; i++) {

    if(alien_color[i] !== 'green'){
        console.log( "fail")
    } else{
        console.log("pass")
    }
}


// Note*: In terminal, if you want to check prnt then  write 'node q25.js' 