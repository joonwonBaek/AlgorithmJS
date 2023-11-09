let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString().split('\n');

function factorialByLoop(number) {
    let num = 1n;
    for (let i = 0; i < number; i++) {
      num *= BigInt(number - i);
    }
    return num;
}
const n = Number(input[0]);

console.log(factorialByLoop(n));