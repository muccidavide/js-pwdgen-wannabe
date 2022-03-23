/* 
- Chiedi all’utente il suo nome,
- poi chiedi il suo cognome,
- poi chiedi il suo colore preferito
- Infine scrivi sulla pagina il risultato in questo formato : 
nomecognomecolorepreferito22 */       

// - Chiedi all’utente il suo nome

const firstName = prompt("Inserisci qui il tuo nome");
console.log(firstName);

// Chiedi il suo cognome

const lastName = prompt('Inserisci qui il tuo cognome');
console.log(lastName);


// Chiedi colore preferito

const favColor = prompt ('Inserisci qui il tuo colore preferito')
console.log(favColor);

/* Infine scrivi sulla pagina il risultato in questo formato : 
nomecognomecolorepreferito22 */
const userPassword = `${firstName}${lastName}${favColor}22`;
console.log(userPassword);

document.getElementById('password').innerHTML = userPassword;