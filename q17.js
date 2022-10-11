// Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

const guests = ["ali", "baber", "lucky", "fayyaz"]
const remove_guests =["lucky", "fayyaz"]

console.log("invite only two people for dinner"); // message only two people invite for dinner

// remove "fayyaz"
 let fayyaz = guests.pop();
console.log(fayyaz + " : we're sorry you can’t invite them to dinner."); 

// remove lucky
let lucky = guests.pop();
console.log(lucky + " : we're sorry you can’t invite them to dinner."); 

// // they are still invite   
guests.pop();
console.log( guests  + " " + " they’re still invited.");       

// empty array
function removeFromGuest(orignal, remove){
    return orignal.filter(value => !remove.includes(value));
}
console.log(removeFromGuest(guests, remove_guests));  


// Note*: In terminal, if you want to check prnt then  write 'node q17.js' 