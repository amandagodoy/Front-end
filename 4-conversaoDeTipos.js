console.log("Conversão de tipos");

console.log("ano " + 2020); 
console.log("2" + "2");
console.log(parseInt("2"));// a condição "parseInt" seria pedir para converter a string(texto) para número inteiro, mas "parse" não tem somente em inteiro.
console.log(parseInt("2") + parseInt("2"));//nessa situação vai acontecer a soma dos dois número inteiro.
console.log("10" / "2");// sempre quando temos uma operação matemática c/ strings(textos), automaticamente o interpretador do JavaScript vai pegar tudo e converter p/ número, assim ele será feita a operação que solicitar claro conforme a ordem de procedência sempre, ou seja, "Conversão explicita".
console.log("Ramona" / "2");//nesse caso o console vai imprimir "NaN", que significa "Not a Number"(Não tem um Número), apesar da tentativa de fazer a conversão com a apresentação de um símbolo operacional em comando sem sucesso p/ transformar a string(texto) p/ número.
console.log(6.5);// aqui ele é reconhecido como ponto float(flutuante).
console.log(6,5);// aqui ele somente reconhece os número deixando um espaço na onde deveria estar a virgula, pois a virgula é um caracter especial nas linguagens e tem funções diferentes. Ou seja quando quisermos trabalhar c/ números tem que ser com ponto não com virgula. 