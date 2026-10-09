let categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
console.log('1.1 - categorias:', [...categorias]);

let codigosProdutos = [101, 102, 103, 104];
let fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');
console.log('1.2 - codigosProdutos:', [...codigosProdutos]);
console.log('1.2 - fornecedores:', [...fornecedores]);

console.log('1.3 - primeiro elemento:', categorias[0]);
categorias[1] = 'Calçados';
console.log('1.3 - categorias atualizado:', [...categorias]);

categorias.push('Livros');
console.log('2.1 - após push("Livros"):', [...categorias]);

categorias.pop();
console.log('2.1 - após pop():', [...categorias]);

categorias.unshift('Brinquedos');
console.log('2.1 - após unshift("Brinquedos"):', [...categorias]);

categorias.shift();
console.log('2.1 - após shift():', [...categorias]);

console.log('2.2 - tamanho (length):', categorias.length);

console.log('2.3 - índice de "Calçados":', categorias.indexOf('Calçados'));
console.log('2.3 - tem "Eletrônicos"?', categorias.includes('Eletrônicos'));

console.log('3.1 - for tradicional:');
for (let i = 0; i < categorias.length; i++) {
  console.log(categorias[i]);
}

console.log('3.2 - for...of:');
for (const categoria of categorias) {
  console.log(categoria);
}

const produtos = [
{ nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
{ nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
{ nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

console.log(produtos[0].nome);

const produtosBaratos = produtos.filter(p => p.preco < 300);
console.log(produtosBaratos);

const multiplos = [50, 150, 200, 350, 400].filter(preco => preco % 100 === 0);
console.log(multiplos);

const totalItens = [2, 3, 5, 10].reduce((acc, q) => acc + q, 0);
console.log(totalItens);

const valorEstoque = produtos.reduce((acc, p) => acc + p.preco * p.estoque, 0);
console.log(valorEstoque);

const comDesconto = [100, 200, 300].map(preco => preco * 0.9);
console.log(comDesconto);

const nomesProdutos = produtos.map(p => p.nome);
console.log(nomesProdutos);

const ordenados = produtos.slice().sort((a, b) => a.preco - b.preco);
console.log(ordenados);

console.log(produtos.some(p => p.estoque < 5));

const inventario = [
{ nome: 'Teclado', estoque: 15 },
{ nome: 'Mouse', estoque: 2 },
{ nome: 'Headset', estoque: 10 }
];

console.log(inventario.some(p => p.estoque < 5));
console.log(inventario.find(p => p.estoque < 5));
