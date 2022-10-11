// Q26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.



// Print a message that the player just earned 5 points.
let alien_color = ['green', 'yellow', 'red']

for (var i = 0; i < alien_color.length; i++) {

    if(alien_color[i] == 'green'){
        console.log( "the player just earned 15 points")    //  the player just earned 10 points
    } else if(alien_color[i] !== 'green'){
        console.log("the player just earned 10 points")     // the player just earned 10 points
    }else{
        console.log("didn,t get points")
    }
}


if(false){
    console.log( "block")
}else if(true){
    console.log("else block")
}


// Note*: In terminal, if you want to check prnt then  write 'node q26.js' 
