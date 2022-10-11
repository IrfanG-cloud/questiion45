// Q30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code 
// that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting 
// to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


const user_name= ['admin', 'daniyal', 'Imran', 'hira', 'saeed']

// user_name.forEach(element => {
//     console.log(element + ": " + "Hello admin, would you like to see a status report" );
// })

for (var i = 0; i < user_name.length; i++)
{
    if (user_name[i] == "admin"){
        console.log(user_name[0] + "  " + "Hello admin, would you like to see a status report")
    }else{
        console.log("Hello Eric, thank you for logging in again.");
    }
}