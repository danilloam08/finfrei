import prompt from "prompt-sync"
let ler = prompt()

export function deposito(saldo){
    console.log("valor do depósito")
    let depositado = Number(ler())
    let novovalor = saldo + depositado
    return novovalor
}


//sacar

export function sacar(saldo){
    console.log("valor do saque")
    let saque = Number(ler())
    let novovalor = saldo - saque
    return novovalor
}

//investimento

export function investimento(valor){
    console.log("valor a se investir")
     valor = Number(ler())
    console.log("meses investidos")
    let meses = Number(ler())
    let cdb = valor * ((1+0.06)**meses)
    return cdb
}