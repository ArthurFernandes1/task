console.log("olá");

// Crie uma váriavel para armazenar o nome 
// e a quantidade de experiência (XP) de um herói,
//  depois utilize uma estutura de decisão para 
// apresentar alguma das mensagens abaixo:
// --------------------
// se XP for menor que 1.000 = Ferro 
// se XP for entre que 1.001 e 2.000= Bronze  
// se XP for entre que 2.001 e 5.000 = Prata
// se XP for entre que 6.001 e 7.000 Ouro
// se XP for entre que 7.001 e 8.000 = Platina 
// se XP for entre que 8.001 e 9.000 = Ascendente 
// se XP for entre que 9.001 e 10.000 = Imortal
// se XP for maior que 10.001 = Radiante 
//--------------------
// SAÍDA
// Ao final deve se exibida uma mensagem:
// "O herói de nome **{nome}** está no nível de **{nivel}**}"

const nome = "Arthur";
let xp = 7600;
let nivel;


if(xp < 1000){
    nivel = Ferro;
    console.log("O herói de nome" , nome , " está no nível de " , nivel)
}

else if(xp > 1001 && xp < 2000){
    nivel = "Bronze";
    console.log("O herói de nome" , nome , " está no nível de " , nivel)

}else if(xp > 2001 && xp < 5000){
    nivel = "Prata";
    console.log("O herói de nome" , nome , " está no nível de " , nivel)

}else if(xp > 6001 && xp < 7000 ){
    nivel = "Ouro";
    console.log("O herói de nome" , nome , " está no nível de " , nivel)

}else if( xp > 7001 && xp < 8000){
    nivel = "Platina";
    console.log("O herói de nome" , nome , " está no nível de " , nivel)

}else if( 8001 && xp < 9000){
    nivel = "Ascendente";
    console.log("O herói de nome" , nome , " está no nível de " , nivel)

}else if(xp > 9001 && xp < 10000){
    nivel = "Imortal";
    console.log("O herói de nome" , nome , " está no nível de " , nivel)

}else if(xp >= 10001){
    nivel = "Radiante";
    console.log("O herói de nome" , nome , " está no nível de " , nivel)
}

