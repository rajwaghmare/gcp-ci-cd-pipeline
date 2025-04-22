
var scores = [12,13,14,16,18];
var evenScore = [];

for(let i = 0; i < scores.length; i++){

    if(scores[i] % 2 == 0){

        evenScore.push(scores[i]);

    }
}

console.log("Even scores are: " + evenScore);
