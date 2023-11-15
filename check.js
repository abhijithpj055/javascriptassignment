var readlineSync = require('readline-sync');

let num=parseInt(readlineSync.question('Enter a number : '));

if(num>0){
    console.log("The number is Positive");
}else 
if(num<0){
    console.log("The number is Negative");
}else{
    console.log("The number is zero");
}