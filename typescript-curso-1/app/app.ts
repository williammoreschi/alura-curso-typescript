import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 150);

console.log(negociacao);
console.log(negociacao.valor);
console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.volume);

const negociacao2 = new Negociacao(new Date(),5,235.52);

console.log(negociacao2);
console.log(negociacao2.valor);
console.log(negociacao2.data);
console.log(negociacao2.quantidade);
console.log(negociacao2.volume);