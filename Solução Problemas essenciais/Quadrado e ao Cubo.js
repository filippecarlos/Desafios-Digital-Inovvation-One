/**
 * Quantidade de Números Positivos
 * 
 * Desafio:
 * - Você deve fazer a leitura de 5 valores inteiros. 
 * - Em seguida mostre quantos valores informados são pares, 
 * quantos valores informados são ímpares, quantos valores 
 * informados são positivos e quantos valores informados 
 * são negativos.
 * 
 * Entrada:
 * - Você receberá 5 valores inteiros./**
 * Quadrado e ao Cubo
 *
 * Desafio:
 * - Você terá o desafio de escrever um programa 
 * que leia um valor inteiro N (1 < N < 1000). 
 * Este N é a quantidade de linhas de saída que 
 * serão apresentadas na execução do programa.
 * 
 * Entrada:
 * - O arquivo de entrada contém um número inteiro 
 * positivo N.
 * 
 * Saída:
 * - Imprima a saída conforme o exemplo fornecido.
 */

let N = parseInt(gets());

let a, b;

for (let i = 1; i <= N; i++) {
    
    a = i * i
    b = i * i * i
    
    console.log(i, a, b)

}