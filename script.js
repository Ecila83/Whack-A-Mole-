
const cases = document.querySelectorAll('.carte');
const scoreEl = document.querySelector('#score');
const tempsEl = document.querySelector('#temps');
const startBtn = document.querySelector('#start');

let score = 0;
let tempsRestant = 10;
let position;

cases.forEach(carte => {
    carte.addEventListener('click', () => {
        if (parseInt(carte.getAttribute('data-index')) === position) {
            score++;
            scoreEl.innerHTML = score;
        }
    })
});

function start() {
    resetjeu();
    let debutJeu = setInterval(() => {
        cases.forEach(carte => {
            carte.innerHTML = '';
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