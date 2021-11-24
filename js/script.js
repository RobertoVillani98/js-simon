let difficolta = parseInt(prompt('Con quanti numeri vuoi giocare?'));

for (let i = 0; i < 1; i++) {
    if (isNaN(difficolta)) {
        difficolta = parseInt(prompt('Inserisci i numeri'));
        i--;
    }
}

let numeriCasuali = [];

for (let i = 0; i < difficolta; i++) {
    let numRandom = Math.floor(Math.random() * 100) + 1;
    if (numeriCasuali.includes(numRandom)) {
        i--;
    } else {
        numeriCasuali.push(numRandom);
    }
}

let seconds = 30;

let display = document.getElementById('timer');

let timerDisplay = setInterval(function () {

    display.innerHTML = seconds;

    if (seconds == 0) {
        clearInterval(timerDisplay)
    } else {
        seconds--;
    }

}, 1000);

alert('Numeri da ricordare: ' + numeriCasuali);

setTimeout(timer, 32000);

function timer() {
    let arrayNum = [];
    let score = 0;
    for (let i = 0; i < difficolta; i++) {
        let numeriGioco = parseInt(prompt('Inserisci uno dei numeri che hai visto'));
        if (numeriCasuali.includes(numeriGioco)) {
            arrayNum.push(numeriGioco);
            score++;
            alert('Corretto!');
        } else {
            alert('Sbagliato!');
        }
    }
    alert('Hai indovinato: ' + arrayNum + ' per un punteggio di ' + score);
    console.log('Hai indovinato: ' + arrayNum + ' per un punteggio di ' + score);}