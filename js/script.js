// fase di dichiarazione - dati a disposizione

const twentyOne = 21

const yourName = prompt ("Ciao utente! Come ti chiami?");
console.log(yourName, typeof yourName)

const yourLastName = prompt(`Ciao ${yourName} qual è il tuo cognome?`);
console.log (yourLastName, typeof yourLastName);

const faveCorlor = prompt (`perfetto ${yourName}, qual'è il tuo colore preferito? `);
console.log (faveCorlor, typeof faveCorlor);

// logica del programma

const passwordGenerator = yourName + yourLastName + faveCorlor + twentyOne;
console.log (passwordGenerator);

const message = `la tua password sarà: ${passwordGenerator}`;
console.log (passwordGenerator);

// output

document.getElementById ("result") .innerHTML= message;