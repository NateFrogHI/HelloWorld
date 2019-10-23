
let firstNumber = parseInt(process.argv[2]);
let multBy = parseInt(process.argv[3]);
let answer = 0;

for(let index = 0; index < multBy; index = index + 1) {
    answer = answer + firstNumber;
}

console.log('answer: ' + answer);

