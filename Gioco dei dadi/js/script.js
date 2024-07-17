//chiedi numero e salva valore
let numUser = prompt (`inserisci un numero da 1 a 6`);
console.log (`numero inserito:`, numUser);

//genera num. random da 1 a 6
let casual = Math.floor(Math.random() * 6) + 1;
console.log (`num. casuale generato:`, casual);

//condizione di verità
if (numUser > casual) {
    console.log (`Il tuo valore ha vinto:`, numUser, typeof numUser);
    alert (`Hai vinto`);
}
else if (numUser == casual) {
    console.log (`Il tuo valore ha pareggiato:`, numUser, typeof numUser);
    alert (`Hai pareggiato`);
}
else {
    console.log (`Il tuo valore ha perso:`, numUser, typeof numUser);
    alert (`Hai perso`);
}