let country = 'Poland';
let continent = 'Europe'
let population = 'a lot of people';

console.log(country, continent, population);

//Calculate the tip value - coding challenge 4

let tip;
const bill = [275, 40, 430];
bill <= 300 && bill >= 50 ? tip = 0.15 : tip = 0.2;

for (const item of bill) {
    console.log(`The bill was ${item}, the tip was ${item * (bill <= 300 && bill >= 50 ? 0.15 : 0.2)}, and the total value was ${item + (item * (bill <= 300 && bill >= 50 ? 0.15 : 0.2))}`);
}
