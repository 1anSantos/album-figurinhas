const { Album } = require('./album');

let album1 = new Album('Pokemon', 20);
let album2 = new Album('Cavaleiros do Zodíaco', 40);
let album3 = new Album('Copa do Mundo 2023', 3);

console.log('Criação de Figurinhas:');
album1.adicionarFigurinhas(3);
album1.adicionarFigurinhas(4);
album1.adicionarFigurinhas(2);
album1.adicionarFigurinhas(2); // já existe

album2.adicionarFigurinhas(9);
album2.adicionarFigurinhas(10);
album2.adicionarFigurinhas(9); // já existe
album2.adicionarFigurinhas(35);

album3.adicionarFigurinhas(5);
album3.adicionarFigurinhas(7);
album3.adicionarFigurinhas(2);
album3.adicionarFigurinhas(9); // passou do limite total

console.log(`\nVerificar Figurinhas:`);

console.log(`${album1.getNome()} tem ${4} -> ${album1.verificarFigurinha(4)}`);
console.log(`${album1.getNome()} tem ${8} -> ${album1.verificarFigurinha(8)}`);
console.log(`${album2.getNome()} tem ${10} -> ${album2.verificarFigurinha(10)}`);
console.log(`${album2.getNome()} tem ${8} -> ${album2.verificarFigurinha(8)}`);
console.log(`${album3.getNome()} tem ${5} -> ${album3.verificarFigurinha(5)}`);
console.log(`${album3.getNome()} tem ${9} -> ${album3.verificarFigurinha(9)}`);

console.log(`\nTotal de Figurinhas: ${Album.getTotalFigurinhas()}\n`);
