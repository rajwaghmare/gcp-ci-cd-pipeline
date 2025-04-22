
function reverseSpecificWord(sentence, targetWord){

    return sentence
    .split(' ')
    .map((word  => (word.toLowerCase() === targetWord.toLowerCase()) ? word.split('').reverse().join('') : word))
    .join(' ');
}

    const sentence = "Hello Devils";
    console.log(reverseSpecificWord(sentence, "Devils"));