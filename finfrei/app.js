import { exibirMenu } from "./menu.js";
import { deposito,sacar,investimento } from "./financeiro.js";

let continuar = true

let saldo = 0;
let valor = 0;

while(continuar==true){
    let a = exibirMenu()
   
    if(a == 5){
        continuar = false
    }else if(a == 1){
        let novoDeposito = deposito(saldo);
        saldo = novoDeposito;

    }else if(a == 2){
        let novoSaque = sacar(saldo);
        saldo = novoSaque;
        
    } else if (a == 3){
        console.log(saldo);
    }else if(a == 4){
        let novoInvestimento = investimento(valor)
        valor = novoInvestimento
        console.log(valor.toFixed(2))
    }
}