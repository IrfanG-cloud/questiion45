// Q41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
// the name of each magician in the array.

let magician_name = [ "ali", "khalid", "wakil", "amjad"];

function show_magicians(){
    for (var i = 0; i < magician_name.length; i++){
        console.log(magician_name)
    }
}
show_magicians();