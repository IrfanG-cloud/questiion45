// Q37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I 
// love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a 
// different message.
var shirt_size = ['small', 'medium', 'large', 'Xl', 'XXL'];
var message = ['I love Javascrip', 'hate javascript']

function make_shirt(large, message){

        console.log(large + ' , ' + message)
}

console.log(make_shirt(shirt_size[0], message[1]));
make_shirt(shirt_size[1], message[0]);
make_shirt(shirt_size[2], message[0]);
make_shirt(shirt_size[3], message[1]);
make_shirt(shirt_size[4], message[1]);

