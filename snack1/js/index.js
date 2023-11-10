
let firstAge = parseInt(prompt("Inserisci l'eta' della prima persona: "));
let secondAge = parseInt(prompt("Inserisci l'eta' della seconda persona: "));

if (firstAge < secondAge) {
    console.log("La prima persona e' piu' grande della seconda");
} else if (secondAge < firstAge) {
    console.log("La seconda persona e' piu' grande della seconda");
} else {
    console.log("Entrambi hanno la stessa eta'");
}

