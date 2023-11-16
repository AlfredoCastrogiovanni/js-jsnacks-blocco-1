
const oddNumber = [];

for (let i = 0; i < 6; i++) {
    let newNumber = parseInt(prompt("Inserisci un numero: "));
    newNumber % 2 != 0 ? oddNumber.push(newNumber) : 0;
}

console.log(oddNumber);