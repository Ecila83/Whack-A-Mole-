
const cases = document.querySelectorAll('.case');
const scoreEl = document.querySelector('#score');
const tempsEl = document.querySelector('#temps');
const startBtn = document.querySelector('#start');

let score = 0;
let tempsRestant = 10;
let position;

cases.forEach(c => {
    const cartePosition = parseInt(c.dataset.index)

    c.addEventListener('click', () => {
        if (cartePosition === position) {
            score++;
            scoreEl.innerHTML = score;
            position = -1
        }
    })
});

function start() {
    resetjeu();
    let debutJeu = setInterval(() => {
        cases.forEach(c => {
            c.innerHTML = '';
        });

        position = Math.floor(Math.random() * 12);
        cases[position].innerHTML = '<div class="taupe"></div>';

        tempsRestant--;
        tempsEl.innerHTML = tempsRestant;
        if (tempsRestant === 0) {
            clearInterval(debutJeu);
            setTimeout(() => {
                alert('Jeu terminé! Votre score est de ' + score + '.');
            }, 100);
        }
    }, 1000);
}


function resetjeu() {
    score = 0;
    tempsRestant = 10;
    scoreEl.innerHTML = score;
    tempsEl.innerHTML = tempsRestant;
}

startBtn.addEventListener('click', start);