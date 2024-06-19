import prompt from 'prompt-sync';

let ler = prompt();

export function exibirMenu(){
    console.log(`
1 - Deposito
2 - Sacar
3 - Ver saldo
4 - simular investimento
5 - sair
    `);

    let opcao = Number(ler("Opção > "));
    return opcao;
}