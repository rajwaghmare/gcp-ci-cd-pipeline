
for(let i = 1; i <= 100; i++){

    if(i%2 == 0 && i%5 == 0){

    console.log("common multiply by:" +i);

    }

}

// console.log("****************************************");

// for(let k = 1; k <= 100; k++){

//     if(k%2 == 0 || k%5 == 0){

//     console.log("common multiply by:" +k);

//     }

// }

console.log("****************************************");

let n = 0;
for(let k = 1; k <= 100; k++){

    if(k%2 == 0 && k%5 == 0){

    n++;

    console.log(k);

    if(n == 3){

        break;
    }

    }

}