// Q28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

let age = 1;
if (age < 2) {
   console.log ("the person is a baby");
  } else {
    console.log("the person is toddler")
  }

let age1 = 3;
if (age1 >= 2 && age1 <= 4) {
   console.log ("the person is a toddler");
  } else {
    console.log("the person is a kid")
  }


let age2 = 12;
if (age2 >= 4 && age2 <= 13) {
     console.log ("the person is a kid");
    } else {
      console.log("the person is a teenager")
}


let age3 = 15;
if (age3 >= 13 && age3 <= 20) {
     console.log ("the person is a teenager");
    } else {
      console.log("the person is a adult")
}

let age4 = 35;
if (age4 >= 20 && age4 <= 65) {
     console.log ("he person is an adult");
    } else {
      console.log("the person is an elder")
}

let age5 = 65;
if (age5 = 65) {
     console.log ("he person is an elder");
    } else {
      console.log("the person is an oldeman")
}

// Note*: In terminal, if you want to check prnt then  write 'node q28.js' 