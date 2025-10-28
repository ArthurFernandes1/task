// #CALCULADORA DE PARTIDAS RANKEADAS

// **O QUE DEVE SER UTILIZADO**
//-Variáveis
//-Operadores
//-Laços de repetição
//-Estruturas de decisão
//-Funções


//##O QUE DEVE SER FEITO

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável,
// o saldo de Rankeadas deve ser feito através do calculo (itórias - Derrotas)

//Se vitórias for menor do que 10 = ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 30 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100 = Lendário
//Se vitórias for maior ou igual a 101 = Imortal


//#SAÍDA
//Ao final deve ser exibida a mensagem:
//"O jogador com saldo de **{saldoVitorias}** vitórias está na categoria **{nível}**"

let nivel = Rankeadas(150,39);
let saldoVitorias = 150 - 39;

console.log("O jogador com saldo de" , saldoVitorias , "vitórias está na categoria", nivel);


function Rankeadas(vitorias, derrotas){
    let partidasGanhas = vitorias - derrotas;
    if (partidasGanhas < 10) {
        return "Ferro";
    }
    else if (partidasGanhas >= 11 && partidasGanhas <=20){
        return "Bronze";
    }
    else if (partidasGanhas >= 21 && partidasGanhas <=50){
        return "Prata";
    }
    else if (partidasGanhas >= 51 && partidasGanhas <=80){
        return "Ouro";
    }
    else if (partidasGanhas >= 81 && partidasGanhas <=90){
        return "Diamante";
    }
    else if (partidasGanhas >=91 && partidasGanhas <=100){
        return "Lendário";
    }
    else if (partidasGanhas >=101){
        return "Imortal";
    }
}