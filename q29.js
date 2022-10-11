// Q29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in 
//your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits= ['apple', 'mango', 'banana']

for (var i = 0; i < favorite_fruits.length; i++)
{
if (favorite_fruits[0] = "apple"){
    const apple = favorite_fruits.every(fruits => fruits[0]);
    console.log(apple + " You really like apple")
}else if(favorite_fruits[1] = "mango"){
    const apple = favorite_fruits.every(fruits => fruits[1]);
    console.log(mango + " You really like mango" );
}else if(favorite_fruits[2] = "banana"){
    const apple = favorite_fruits.every(fruits => fruits[1]);
    console.log(banana + " You really like banana");
}else{
    console.log("You don,t like any fruits")
}
}

// Note*: In terminal, if you want to check prnt then  write 'node q29.js' 