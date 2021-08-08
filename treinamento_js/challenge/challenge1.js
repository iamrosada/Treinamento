/*If we list all the natural numbers 
below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
 */

function getMultiples() {
  var datos = [3, 5];
  const num = 1000;
  var sum = 0;

  for (var i = 1; i < num; i++) {
    for (var j = 1; j < datos.length; j++) {
      if (i % datos[0] == 0 || i % datos[1] == 0) {
        console.log("[ ", i, "]");
        sum = sum + i;
      }
    }
  }
  console.log("resultado", sum);
}

getMultiples();
