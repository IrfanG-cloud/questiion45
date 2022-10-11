// Q37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I 
// love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a 
// different message.
var shirt_size = ['small', ' medium', 'large', 'XL', 'XXL'];
var default_message = "I love JavaScript.";

function make_shirt(shirt, message){
    console.log(shirt + " , " +  message );

}
make_shirt(shirt_size[1], default_message);
make_shirt(shirt_size[2], default_message);

