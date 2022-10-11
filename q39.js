// Q39. city Names: Write a function called city_country() that takes in the name of a city and its country. The function 
// should return a string formatted like this: "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

var city_name = ['islamabd', ' lahore', 'karachi', 'peshawar', 'multan'];
var country_name = ['Pakistan', ' India', 'Nepal'];
function city_country(city, country){
    console.log(city + " , " + country );
}
city_country(city_name[1], country_name[0]);
city_country(city_name[2], country_name[0]);
city_country(city_name[1], country_name[1]);