let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");

console.log(typeof nome, typeof idade);
console.log("Olá", nome, "você tem", idade, "anos");

/*O valor undefined aparece nos 2 casos pois nenhum valor foi definido para as variáveis "nome" e "idade", por isso o comando typeof não retorna
valores como boolean, string, number, etc*/

/*Após utilizar o comando "prompt" pedindo para o usuário inserir os seus dados, as variáveis recebem um valor (do tipo string), e esses são os valores
que aparecem quando utilizamos o comando console.log para imprimir os tipos das variáveis na tela*/

