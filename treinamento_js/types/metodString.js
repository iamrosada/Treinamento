/* names = "Rosada Luis";

//return the value in this position 
console.log(names.charAt(2));
//return the value in this position of unicode
console.log(names.charCodeAt(3)); */

/* var nomes = "luis da silva gama de agua rosada";

console.log(nomes.indexOf(6)); */

var SearchIndex = function (programador, analista) {
  // ele vai dar  a position que tem algo semelhante
  var tech = programador.indexOf(analista);

  return console.log("the phrase is : ", programador[tech]);
};

var programador = "luis da silva gama";

var analista = "gama";
SearchIndex(programador, analista);
