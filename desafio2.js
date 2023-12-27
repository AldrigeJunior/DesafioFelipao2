let vitoria = 1000
let derrota = 950

function score(vitoria, derrota) {
    let saldoVitorias = vitoria - derrota;
    return saldoVitorias;
}

function nivelRanking(score) {
    let nivel;

    if (score <= 10) {
        nivel = 'Ferro';
    } else if (score >= 11 && score <= 20) {
        nivel = 'Bronze';
    } else if (score >= 21 && score <= 50) {
        nivel = 'Prata';
    } else if (score >= 51 && score <= 80) {
        nivel = 'Ouro';
    } else if (score >= 81 && score <= 90) {
        nivel = 'Diamante';
    } else if (score >= 91 && score <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return nivel;
}

const saldoVitorias = score(vitoria, derrota);
const nivel = nivelRanking(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
