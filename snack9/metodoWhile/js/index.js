
let userNumber1 = parseInt(prompt("Inserisci un numero a due cifre: "));
const userNumber2 = parseInt(prompt("Inserisci un numero a quattro cifre: "));

console.log("Numeri prima dell'aumento: ",userNumber1, userNumber2);

while (userNumber1 < userNumber2) {
    userNumber1 *= 2;
}

console.log("Numeri dopo l'aumento: ",userNumber1, userNumber2);