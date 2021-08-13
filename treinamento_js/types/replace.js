/*
3. string.replace (originalstr, newstr)
 - pesquisa por uma expressão regular
especificada em uma determinada string e, 
em seguida, substitui-a se a correspondência ocorrer.
*/
let names = "luis da luissilva luisgama de agua rosada ";

console.log(names.replace("luis", "filho"));

//vai ocorrer uma procura global e substitui
console.log(names.replace(/luis/g, "cristo"));

//not is global search
console.log(names.replace(/luis/, "notglobal"));
