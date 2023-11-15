var readlineSync = require('readline-sync');

let firstnumber=parseInt(readlineSync.question('Enter your first Number '));
let secondnumber=parseInt(readlineSync.question('Enter your second number '));
let sum=(firstnumber+secondnumber);
console.log('Sum of',firstnumber,'and',secondnumber,'is',sum);