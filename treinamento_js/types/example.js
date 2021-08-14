//STRING

var nome = "agua rosada";

console.log(nome[2]);

for (let value of nome) {
  console.log(value);
}

for (var i = 0; i < nome.length; i++) {
  console.log("nome", nome[i]);
}
/*////////////////object string////////////////*/

var name_ = new String();
name_ = "Rosada";

console.log(typeof name_);

var famile = new String("Evanilson");
console.log(typeof famile);
