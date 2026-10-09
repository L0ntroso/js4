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

