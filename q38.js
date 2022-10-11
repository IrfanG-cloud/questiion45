// Q38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function 
// should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.

var city_name = ['islamabd', ' lahore', 'karachi', 'peshawar', 'multan'];
var country_name = ['Pakistan', ' India', 'Nepal'];
function describe_city(city, country){
    console.log(city + " , " + country );
}
describe_city(city_name[1], country_name[0]);   // lahore is in default country
describe_city(city_name[2], country_name[1]);   // karachi is in default country
describe_city(city_name[5], country_name[2]);   // city is not in default country


