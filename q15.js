// Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

const guests = ["ali", "amjad", "lucky", "fayyaz"]   

console.log(guests[1]);             // name of the guest who can’t make it

guests.splice(1, 1, 'Baber');
console.log(guests);                    //replacing the name of the guest who can’t make

for (var i = 0; i < guests.length; i++) {
    console.log(guests[i] +":"+ " " + "can not make the dinner");           // second set of invitation messages
}

// Note*: In terminal, if you want to check prnt then  write 'node q15.js' 