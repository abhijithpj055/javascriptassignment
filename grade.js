var readlineSync = require('readline-sync');

let mal=parseInt(readlineSync.question('malayalam grade:'));
let eng=parseInt(readlineSync.question('english grade:'));
let mat=parseInt(readlineSync.question('maths grade:'));
let phy=parseInt(readlineSync.question('physics grade:'));
let chm=parseInt(readlineSync.question('chemistry grade:'));
let bio=parseInt(readlineSync.question('biology grade:'));

let total=((mal+eng+mat+phy+chm+bio)/60)*100

if(total>=60){
    console.log('passed');
}
else{
    console.log('faild');
}