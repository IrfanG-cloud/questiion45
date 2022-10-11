// Q27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Print a message that the player just earned 5 points.
let alien_color = ['green', 'yellow', 'red']

for (var i = 0; i < alien_color.length; i++) {
    if(alien_color[i] == 'green'){
        console.log( alien_color[0] + ":" + " the player just earned 15 points")    //  the player just earned 10 points
    } else if(alien_color[i] == 'yellow'){
        console.log(alien_color[1] + ":" + " the player just earned 10 points")     // the player just earned 10 points
    }else if(alien_color[i] == 'red') {
        console.log(alien_color[2] + ":" + " the player earned 15 points")            // the player earned 15 points
    }else{
        console.log("didn,t earn points")
    }
}

if(false){
    console.log( "the appropriate color alien")
}else if(true){
    console.log("the appropriate color alien")
}


// Note*: In terminal, if you want to check prnt then  write 'node q27.js' 