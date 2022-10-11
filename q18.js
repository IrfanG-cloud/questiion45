// Q18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const places = ["dubai", "new york", "paris", "rome", "london"]     // store the location in a array

console.log(places);                                                // Print array in original order.


places.reverse();
console.log(places);                                                // reverse alphabetical order without changing the order

places.reverse();
console.log(places);                                                // show that its order has changed.


places.reverse();
console.log(places);                                                // it’s back to its original order.

places.sort();
console.log(places);                                                // sort your array

places.sort();
places.reverse();
console.log(places);                                                //  the list to show that its order has changed.                                               


// Note*: In terminal, if you want to check prnt then  write 'node q18.js' 