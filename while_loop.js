const { copyFileSync } = require("fs");

let i = 0;


while(i > 10){

    i++;

    console.log("Inside the loop: " + i);
}

do{
    i ++;
}while(i>10);

    console.log("Inside the do while loop: " + i);
