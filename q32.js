// Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone 
// has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
// current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message 
// that the person will need to enter a new username. If a username has not been used, print a message saying that the 
// username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

const current_users= ['adil', 'boni', 'imran', 'hira', 'saeed'];
const new_users= ['ali', 'baber', 'shakil', 'boni', 'adil'];

const filter_users = (current_users.concat(new_users));  // ['adil', 'boni', 'imran', 'hira', 'saeed', 'ali', 'baber', 'shakil', 'boni', 'adil'];
filter_users.splice(6, 7);
console.log(filter_users);          // ['adil', 'boni', 'imran', 'hira', 'saeed', 'ali', 'baber', 'shakil'];

for (var i = 0; i < new_users.length; i++)
{
    if (new_users[i] == "boni"){
        console.log(new_users[3] + "  " + "the person will need to enter a new username")
    }else if(new_users[i] == "adil"){
        console.log(new_users[4] + "  " + "the person will need to enter a new username")
    }else{
        console.log ('the username is available')   
    }
}