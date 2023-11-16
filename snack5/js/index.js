
const userWord1 = prompt("Inserisci una parola: ");
const userWord2 = prompt("Inserisci una altra parola: ");

if(userWord1.length > userWord2.length) {
    console.log(userWord1);
    console.log(userWord2);
} else if (userWord2.length > userWord1.length) {
    console.log(userWord2);
    console.log(userWord1);
} else {
    console.log("same length", userWord1, userWord2);
}
