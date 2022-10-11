// Q31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


const user_name= ['admin', 'daniyal', 'imran', 'hira', 'saeed']

user_name.forEach(element => {
    console.log(element + " : " + "checked list is not empty" )  // make sure the list of users is not empty
})

user_name.splice(0, user_name.length);
console.log(user_name + "We need to find some users");  // the list is empty, print the message We need to find some users!
