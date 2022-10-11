// Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const guests = ["ali", "baber", "lucky", "fayyaz"]

//Add one new guest to the beginning of your array.
console.log(guests.push("Khalid", "Raheel", "Zia Khan")); 
console.log(guests);            // ali, lucky, khalid, zia khan, baber, fayyaz, raheel


// Add a print statement to the end of your program informing people that you found a bigger dinner table
for (var i = 0; i < guests.length; i++) {
    console.log(guests[i] +":"+ " " + " I have got a more space for bigger dinner");           // second set of invitation messages
}


console.log(guests.unshift("irfan"));
console.log(guests);            // 'irfan','ali','baber','lucky','fayyaz','Khalid','Raheel','Zia Khan'


//new guest to the middle of your array
guests.splice(4, 0, 'Malik Javeed');
console.log(guests);         // 'irfan','ali','baber','lucky','fayyaz','Malik Javeed','Khalid','Raheel','Zia Khan'


// Note*: In terminal, if you want to check prnt then  write 'node q16.js' 