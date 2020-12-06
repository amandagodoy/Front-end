console.log(`Trabalhando c/ condicionais`);
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`
);
const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1);//romevendo item.
// } else if(estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1,1);
// } else {
//     console.log("Não posso vender a passagem sem responsável");
//}


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(2, 1); // removendo item
}else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else {
    console.log("Infelizmente não poderá embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18); 
// console.log(listaDeDestinos);