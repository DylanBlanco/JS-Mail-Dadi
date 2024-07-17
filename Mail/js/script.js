//chiedi nome utente
const mail =  prompt(`Inserisci la tua mail`);
console.log (`La mail dell'utente è:`, mail);

//array - lista autorizzati
const autorizzati = ["dylan", "mj", "camilla"];
console.log (`Mail autorizzate:`, autorizzati);

//condizione di verità
if (mail == autorizzati[0]) {
    console.log (`Questa mail è autorizzata:`, mail);
}
else if (mail == autorizzati[1]) {
    console.log (`questa mail è autorizzata:`, mail);
}
else if (mail == autorizzati[2]) {
    console.log (`questa mail è autorizzata:`, mail);
}
else {
    console.log (`questa mail non è autorizzata:`, mail);
    alert (`mail non autorizzata`);
}