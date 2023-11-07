let tempo = document.querySelector('#time');
let minutos = 15;
let segundos = 0;

function atualizarTempo() {
    if (minutos >= 0) {
        tempo.textContent = `00 : ${minutos < 10 ? '0' : ''}${minutos} : ${segundos < 10 ? '0' : ''}${segundos}`;

        if (minutos === 0 && segundos === 0) {
            tempo.textContent = '00 : 00 : 00';
        } else {
            if (segundos === 0) {
                minutos--;
                segundos = 59;
            } else {
                segundos--;
            }
            setTimeout(atualizarTempo, 1000);
        }
    }
}

atualizarTempo();
