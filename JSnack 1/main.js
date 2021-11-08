/* 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%. */

//4.
const players = [
    genNewPlayer('Michael', 'Jordan', 25),
    genNewPlayer('Lebron', 'James', 22),
    genNewPlayer('Karl', 'Malone', 30),
    genNewPlayer('Shaquille', 'O’Neal', 20),
    genNewPlayer('Magic', 'Johnson', 31),
    genNewPlayer('Bill', 'Russell', 25),
    genNewPlayer('Larry', 'Bird', 26),
    genNewPlayer('MichKareem', 'Abdul-Jabbarael', 22),
    genNewPlayer('Tim', 'Duncan', 18),
    genNewPlayer('Kobe', 'Bryant', 16)
]

console.table(players);

//3.
players.forEach((element) => console.log(element.firstName, element.secondName, `, age: ${element.age}`, `, playerCode: ${element.playerCode}`))

/*********
*FUNCTIONS
**********/
function genRandNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function genRandUpperCaseLetter () {
    return String.fromCharCode(genRandNum(65, 90));
}

//2.1
function genPlayerCode () {
    let playerCode = [];
    for (let i = 0; i < 3; i++) {
        playerCode.push(genRandUpperCaseLetter());
    }
    for (let i = 0; i < 3; i++) {
        playerCode.push(genRandNum(1, 9));
    }
    playerCode = playerCode.join('');
    return playerCode;
}
//2.1
function genPointsAverage () {
    return genRandNum(0, 50);
}
//2.3
function genSuccessPerCent () {
    return `${genRandNum(0, 100)}%`;
}

//1.
function genNewPlayer (firstName, secondName, age) {
    return {
        playerCode: genPlayerCode(),
        firstName: firstName,
        secondName: secondName,
        age: age,
        pointsAverage: genPointsAverage(),
        successPercentage: genSuccessPerCent(),
    };
}