
let newNumber = prompt("Inserisci un numero di 7 cifre: ");
let sum = 0;
for (let i = 0; i < 7; i++) {
    let digit = newNumber.slice(i,i + 1);
    console.log(digit);
    sum += parseInt(digit);
}
console.log(sum);