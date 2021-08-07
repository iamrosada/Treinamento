/* console.log(nome); //error
let nome; */

/*ESCOPO DA VARIÁVEL let:
Ao contrário de var, 
vamos declarar variáveis
 ​​que são limitadas em escopo
ao bloco, instrução ou 
expressão em que é usado. 
permitir que as variáveis ​​
tenham escopo de bloco 
(conjunto mais próximo de chaves {}),
o que significa que está disponível 
apenas dentro do bloco em que está definido. */

function getMarks(marks) {
  if (marks > 20) {
    let bonus = 10;
    console.log(marks + bonus);
  }
  console.log(bonus);
}

getMarks(70);
// a variável do type let so trabalham em escopo
//nao tem como usar como type global
let bonus;
function getMarks(marks) {
  if (marks > 20) {
    console.log(marks + bonus);
  }
  console.log(bonus);
}

getMarks(70); //error

// a variável do type let so trabalham em escopo
//nao podem ser atribuído valores duas vezes no mesmo scope

function getMarks() {
  let nome = "rosada";

  if (nome.length > 5) {
    console.log("is true", nome);
  }
  var nome = "Luis";
  console.log(nome); //error
}

getMarks();
