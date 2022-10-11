// Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person = 'Zia Khan';
let lower_case = person.toLowerCase();
let upper_case = person.toUpperCase();

console.log(lower_case);    // zia khan

console.log(upper_case);    // ZIA KHAN


function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  console.log(titleCase("zia khan"));   // Zia Khan

  // Note*: In terminal, if you want to check prnt then  write 'node q3.js' 