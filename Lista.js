const FileStream = require('fs');

const caracteresmaisuculo = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z","Ç"];
const caracteresMinusculo = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z","ç"];
const caracterNumero = ["0","1","2","3","4","5","6","7","8","9"];
const caracteresEspeciais = ["!","@","#","$","%","¨","&","*","(",")","-","_","=","+","§","'","{","[","ª","}","]","º","?","/","°",":",";",",",".","|"];

var Listacaracteresmaisuculo = [];

for(let i = 0; i < caracteresmaisuculo.length; i++){
    Listacaracteresmaisuculo.push(caracteresmaisuculo[i]);
}

FileStream.writeFile('Listas/Lista.txt', "\n"+Listacaracteresmaisuculo.toString(), (err) =>{
    if(err){
        console.log("Erro ao criar o arquivo");
    } 
    else{
        console.log("Arquivo criado");
    }
})