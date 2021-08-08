const Magui = {
  nome: "Rosada",
  idade: 22,
  father: {
    name: "unknown",
  },
};

const Isabel = {
  nome: "Setinha",
  father: Magui.father,
};
Magui.nome = "Luis";
Magui.father.name = "Success";
console.log(Magui, Isabel);
