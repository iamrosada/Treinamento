const products = [
  {
    id: 1,
    name: "Desktop",
    price: 400,
    count: 10,
  },
  { id: 2, name: "iphone", price: 500, count: 7 },
  { id: 3, name: "cadeira", price: 600, count: 60 },
];

let bestProduct = products.filter((product) => product.price < 600);

console.log(bestProduct);
