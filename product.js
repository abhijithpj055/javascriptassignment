var readlineSync = require('readline-sync');

let firstnumber=parseInt(readlineSync.question('Enter your first Number '));
let secondnumber=parseInt(readlineSync.question('Enter your second number '));
let product=firstnumber*secondnumber
console.log('Product of',firstnumber,'and',secondnumber,'is',product);