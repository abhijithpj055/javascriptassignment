var readlineSync = require('readline-sync');
let vt=parseInt(readlineSync.question(' Enter your age  '));

if(vt>=18){
    console.log("you are eligible ");
}
else
{
    console.log("you are not eligible ");
}