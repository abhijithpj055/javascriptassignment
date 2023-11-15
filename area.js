var readlineSync = require('readline-sync');

let length=parseInt(readlineSync.question('Enter the length of rectangle '));
let width=parseInt(readlineSync.question('Enter the width of rectangle '));
let area=length*width;
console.log('Area of rectangle is','',area);