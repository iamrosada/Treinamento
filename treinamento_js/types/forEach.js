const number = [1, 2, 3, 4, 5];

/* number.forEach(consoleItem);

function consoleItem(item, index, arr) {
  return console.log(item, index, arr);
} */
//tambem podemos criar uma arrow function

number.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const letter = ["a", "b", "c", "a", "c", "d", "b"];

count = {};

letter.forEach((item) => {
  if (count[item]) {
    count[item] += 1;
  } else {
    count[item] = 1;
  }
});

console.log("the value ", count);
