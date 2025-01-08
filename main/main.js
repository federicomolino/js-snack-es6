//Crea Array con le 10 auto
const automobili = [
    {marca:"Bmw", modello:"X6", alimentazione:"benzina"},
    {marca:"Mercedes", modello:"amg", alimentazione:"gpl"},
    {marca:"Audi", modello:"A1", alimentazione:"elettrico"},
    {marca:"Fiat", modello:"Panda", alimentazione:"elettrico"},
    {marca:"Mercedes", modello:"classe A", alimentazione:"benzina"},
    {marca:"Mercedes", modello:"Calsse B", alimentazione:""},
    {marca:"Bmw", modello:"X2", alimentazione:"benzina"},
    {marca:"Bmw", modello:"X7", alimentazione:"diesel"},
    {marca:"Fiat", modello:"Panda", alimentazione:"metano"},
    {marca:"Audi", modello:"A4", alimentazione:"diesel"}
];

//creo una funzione che mi filtra le auto e mi prende solo quelle a benzina
function autoABenzina (automobili){
        return automobili.filter(function(auto){
            return auto.alimentazione === "benzina";
    });
}
//creo una funzione che mi filtra le auto e mi prende solo quelle a diesel
function autoADiesel (automobili){
    return automobili.filter(function(auto){
        return auto.alimentazione === "diesel";
});
}
//creo una funzione che mi filtra le auto e non mi prende solo quelle a benzina e diesel
function restoAuto (automobili){
    return automobili.filter(function(auto){
        return auto.alimentazione !== "diesel" && auto.alimentazione !== "benzina" 
    });
}

//richiamo le funzioni 
const autoBenzia = autoABenzina(automobili);
const autoDisel = autoADiesel(automobili);
const restoDelleAuto = restoAuto(automobili);

//stampo gli array
console.log(autoBenzia);
console.log(autoDisel);
console.log(restoDelleAuto);

//creao array di stringhe
const string = ['pippo', 'PLUTO', 'Paperino'];

function invertString(newString) {
    // Creare un nuovo array vuoto per memorizzare le stringhe con la prima lettera in maiuscolo
    const newArray = [];
    
    // Iterare sull'array originale usando un ciclo `for`
    for (let i = 0; i < newString.length; i++) {
        // Convertire ogni stringa in minuscolo e poi mettere la prima lettera in maiuscolo
        const newArrayLower = newString[i].toLowerCase();
        // Prendo il primo carattere lo metto in Maiuscolo e faccio stampare il restante della parola dall'indice 1
        const finishArray = newArrayLower.charAt(0).toUpperCase() + newArrayLower.slice(1);

        // Aggiungere la stringa modificata all'array
        newArray.push(finishArray);
    }

    console.log(newArray);
}

invertString(string);

//Creao array
const animali = [
    {nome:"leone", famiglia:"felidi", classe:"mammiferi"},
    {nome:"cane", famiglia:"canidi", classe:"mammiferi"},
    {nome:"gallina", famiglia:"fasianidi", classe:"uccelli"}
];

function mammiferi (animali){
    return animali.filter(function(listaMammiferi){
        return listaMammiferi.classe === 'mammiferi'
    });
}

const arrayMammiferi = mammiferi(animali);

console.log(arrayMammiferi);



//creo array persone
const persone = [
    { nome: "leone", cognome: "mio", eta: 18 },
    { nome: "cane", cognome: "tuo", eta: 22 },
    { nome: "gallina", cognome: "suo", eta: 14 }
];

//funzione per verificare se la persona può guidare
function verificaGuida(persona) {
    if (persona.eta >= 18) {
        return "si";
    } else {
        return "no";
    }
}

function puoiGuidare(persone) {
    //inizializzo nuovo array
    const newArray = [];

    //intero su ogni elemento dell'array persone
    for (let i = 0; i < persone.length; i++) {
        const persona = persone[i];
        //verifico richiamando la funzione se la persona può guidare
        const sePuoiGuidare = verificaGuida(persona);
        // aggiugo la frase al nuovo array
        newArray.push(`${persona.nome} ${persona.cognome} può guidare: ${sePuoiGuidare}`);
    }

    //Ritorno il nuovo array completo
    return newArray;
}

const personeConGuida = puoiGuidare(persone);

console.log(personeConGuida);