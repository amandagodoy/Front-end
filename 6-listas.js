console.log(`Trabalhando c/ listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`
);// new(nova) Array(lista) essa estrutura de lista, esse novo Array vai imprimir no console a variável em forma de lista.
//let new = 2; Tome cuidado em usar palavras reservadas como variável, pois o IDEL pode informar erro 
listaDeDestinos.push(`Curitiba`);// isso possibilita que seja incluso na nova lista uma nova item.
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //splice seria um comando para remover um elemento
console.log(listaDeDestinos);//aqui o console vai imprimir somente os itens não solicitados no comando p/ ser splice(removido) da lita, ou seja, ao decretar a posição e quantidade de elementos a serem excluidos, seu console vai mostrar a lista sem o elemento removido.
//console.log(listaDeDestinos[1]); aqui depois de solicitar um comando de removação de elemento, entre couchetes o comando da posição dos elementos novos posicionados é impresso no console e o elemento solicitado é mostrado.
console.log(listaDeDestinos[1], listaDeDestinos[0]);