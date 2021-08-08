/*
Var Hoisting:
Variáveis ​​Var podem ser acessadas antes de 
sua declaração. Javascript move todas 
as variáveis ​​var para o topo da função ou 
contexto global. Isso é conhecido como 
içamento var
*/

//the first example

console.log(num); //undefined

var num = 2;

console.log(num); //2
//outro example

var car;

console.log("var car", car); //undefined

car = "Ferrari";

console.log("hoisting variable car :", car); //Ferrari
