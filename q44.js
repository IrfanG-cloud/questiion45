// Q44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have 
// one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich 
// that is being ordered. Call the function three times, using a different number of arguments each time.

var sandwich = ['tomato', 'chicken spread', 'mayonez', 'ketchup', 'bread'];

function collect_item(collects){

    for (var i = 0; i < sandwich.length; i++){
        console.log(collects[i]);           // print a summary of the sandwich 
        console.log(collects[1]);           // chicken spread
        console.log(collects[2]);            // mayneez
        console.log(collects[4]);             // bread
    }
}
collect_item(sandwich);