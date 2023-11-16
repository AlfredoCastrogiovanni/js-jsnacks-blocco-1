
const listaInvitati = [
    "Luca",
    "Pino",
    "Franco",
    "Paolo",
    "Riccardo"
];

const nome = prompt("Inserisci il tuo nome: ");
let access = false;

for (let i = 0; i < listaInvitati.length; i++) {
    nome == listaInvitati[i] ? access = true : 0;
}

access ? console.log("Puoi entrare alla festa") : console.log("Non puoi entrare alla festa");