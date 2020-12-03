console.log("Trabalhando com atribuição de variáveis");

idade = 26;
const nome = "Amanda";// mudança de status na programação é uma coisa difícil de reparar o erro e aonde está o erro, claro existe a palavra reservada "let" essa maneira de descrever o código, e tem caso que tem vou ter que usar ela. Mas se for possível reduzir ao maxímo melhor.
const sobreNome = "Hope";

console.log(nome + sobreNome);// assim vai ser imprimido no console nome e sobreNome colados, sendo que queremos separados. E assim temos duas opções console.log(nome, sobreNome); ou fazer a concatenização por exemplo:
//console.log(nome + " " + sobreNome);
//console.log(nome, sobreNome, idade);
console.log(`Meu nome é ${nome} ${sobreNome}`);//interpolação de variáveis.
//let contador = 0; exemplificação de variável com mudanças e loops constantes.
//contador = contador + 1;
const nomeCompleto = nome + sobreNome;//pega o valor dessas duas variáveis e sobre escreve, mas pode dar erro no console pois "const" seria uma variável fixa já a "let" pode ser alterada.
//nome = 2; ele aceita, pois JavaScript é muito livre nesse sentido.
console.log(nomeCompleto);//trocando a variável fica mais fácil do que mudar a palavra reservada.

//Sempre nomei suas variáveis independente do tamanho, dê nomes conforme for criando as coisas.

//console.log(idade);
//console.log(nome);
//console.log(sobreNome);
