/*
ESCOPO DA VAR VARIÁVEL:
Variáveis ​​var têm escopo de função, 
o que significa que se declaradas em 
qualquer lugar dentro da função, estarão 
disponíveis em todo o escopo da função. 
Como declaramos a variável de bônus dentro 
de um bloco if da função getMarks, portanto,
 você pode acessá-la em qualquer lugar na 
 função getMarks. Se você consolar o valor
  do bônus fora do bloco, ele emitirá o valor
*/

function getMarks(marks) {
  if (marks > 60) {
    var bonus = 10;
    console.log("suma de marks and bonus", bonus + marks);
  }
  console.log(bonus);
}

getMarks(80);

//usando uma variável
/*
Se você declarar qualquer variável var
 fora da função, ela será adicionada
  ao objeto global e você poderá acessá-la
 com um objeto de janela no caso de
  navegadores como abaixo:
*/
/* var total;

function getTotal() {
  total = 20;
  if (total > 10) {
    console.log("Good");
  }
}
console.log(window.total); */ //isso funciona no browser

/*
REDECLARAÇÃO DE VARIÁVEIS VAR:
variáveis ​​var podem ser declaradas 
novamente no mesmo escopo . 
Ele substituirá a variável existente. 
Evite usar var, pois você pode acidentalmente 
declarar novamente a mesma variável e isso fará 
com que seu programa se comporte de maneira diferente, 
pois não mostrará nenhum erro se o nome da variável já for usado.
*/

function getIdade() {
  var idade = 20;
  if (idade > 18) {
    var idade = 40;
    console.log("idade > ", idade);
  }
  idade = 390;
  console.log("idade 30 > ", idade);
}

getIdade();
