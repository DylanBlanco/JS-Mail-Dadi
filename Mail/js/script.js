//Seleziona form
const infoForm = document.querySelector (`form`);

//evento submit
infoForm.addEventListener (`submit`,
    function() {
        //prendi e salva valore mail
        const mailInput = document.getElementById (`mail`);
        const mail = mailInput.value;
        console.log('mail:', mail, typeof mail);

        //array - lista autorizzati
        const autorizzati = ["dylan@gmail.com", "mj@gmail.com", "camilla@gmail.com"];
        console.log (`Mail autorizzate:`, autorizzati);

        //condizione di verità
        if (mail == autorizzati[0]) {
            console.log (`Questa mail è autorizzata:`, mail);
            alert (`mail autorizzata`);
        }
        else if (mail == autorizzati[1]) {
            console.log (`questa mail è autorizzata:`, mail);
            alert (`mail autorizzata`);
        }
        else if (mail == autorizzati[2]) {
            console.log (`questa mail è autorizzata:`, mail);
            alert (`mail autorizzata`);
        }
        else {
            console.log (`questa mail non è autorizzata:`, mail);
            alert (`mail non autorizzata`);
        }
    }
)