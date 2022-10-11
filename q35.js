// Q35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these 
// animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such 
// as Any of these animals would make a great pet!

let different_animals = ['dog', 'cat', 'horse', 'donkey'];

    for (var i = 0; i < different_animals.length; i++){
    console.log(different_animals[i]);
    console.log(different_animals[0]  + " " + "A dog is a great pet.");
    console.log(different_animals[1]  + " " + "A cat is a great pet.");
    console.log(different_animals[2]  + " " + "A horse is a great pet.");
    console.log(different_animals[3]  + " " + "A donkey is a great pet.");
    }

    console.log(" These animals has four legs, two ear, two eyes and etc")