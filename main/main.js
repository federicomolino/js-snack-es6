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


