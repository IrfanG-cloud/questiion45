// Q42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see 
// that the list has actually been modified.

let magician_name = [ "ali", "khalid", "wakil", "amjad"];

// adding the phrase the Great to each magician’s name
function make_great(){
    for (var i = 0; i < magician_name.length; i++){
        console.log(magician_name[0] + " " + "Hocus pocus");
        console.log(magician_name[1] + " " + "Jantar Mantar Jadu Mantar");
        console.log(magician_name[2] + " " + "quick change");
        console.log(magician_name[3] + " " + "quick change")
    }
}
make_great();

// for modified list
function show_magicians(){
    magician_name.reverse();
    console.log(magician_name);
}

show_magicians();