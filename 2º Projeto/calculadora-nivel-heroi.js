// # 2º Desafio de código: Calculadora de rank de herois

function calculoDeRank(vitorias, derrotas) {
    let rank = "";

    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return rank;
}

// Lista do time com nomes, vitórias e derrotas
const heroisJogo = [
    {nome: "Heimerdinger", vitorias: 37, derrotas: 6},
    {nome: "Samira", vitorias: 70, derrotas: 10 },
    {nome: "Ahri", vitorias: 120, derrotas: 38},
    {nome: "Thresh", vitorias: 2, derrotas: 6},
    {nome: "Master Yi", vitorias: 270, derrotas: 80}    
];

// Loop para calcular e exibir os resultados de cada heroi
for (const herois of heroisJogo) {
    const nome = herois.nome
    const vitorias = herois.vitorias;
    const derrotas = herois.derrotas;
    const saldoVitorias = vitorias - derrotas;
    const rank = calculoDeRank(vitorias, derrotas);

    console.log(`O herói ${nome} com saldo de ${saldoVitorias}, está no nível de: ${rank}`);
}
